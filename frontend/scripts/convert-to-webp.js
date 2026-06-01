import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptDir, '../..')

const imageExtensions = new Set(['.jpg', '.jpeg', '.png'])
const sourceExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.html', '.css', '.json', '.md'])
const ignoredDirectories = new Set(['node_modules', '.git', 'dist'])

async function walk(directory) {
	const entries = await fs.readdir(directory, { withFileTypes: true })
	const files = []

	for (const entry of entries) {
		if (entry.isDirectory()) {
			if (ignoredDirectories.has(entry.name)) {
				continue
			}
			files.push(...(await walk(path.join(directory, entry.name))))
			continue
		}

		files.push(path.join(directory, entry.name))
	}

	return files
}

function isImageFile(filePath) {
	return imageExtensions.has(path.extname(filePath).toLowerCase())
}

function isSourceFile(filePath) {
	return sourceExtensions.has(path.extname(filePath).toLowerCase())
}

function shouldSkip(filePath) {
	return filePath.split(path.sep).some((segment) => ignoredDirectories.has(segment))
}

function toWebpPath(filePath) {
	return filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp')
}

function replaceImageReferences(content) {
	return content.replace(
		/(["'`(\s])([^"'`\s()<>]+?)\.(jpg|jpeg|png)(?=(["'`\s)\],;]|$))/gi,
		(match, prefix, basePath) => `${prefix}${basePath}.webp`,
	)
}

async function convertImages() {
	const allFiles = await walk(projectRoot)
	const imageFiles = allFiles.filter((filePath) => isImageFile(filePath) && !shouldSkip(filePath))

	for (const filePath of imageFiles) {
		const outputPath = toWebpPath(filePath)
		const before = await fs.stat(filePath)
		await sharp(filePath).webp({ quality: 82 }).toFile(outputPath)
		const after = await fs.stat(outputPath)

		console.log(
			`Converted: ${path.relative(projectRoot, filePath)} -> ${path.relative(
				projectRoot,
				outputPath,
			)} (${before.size} bytes -> ${after.size} bytes)`,
		)
	}

	return allFiles
}

async function updateReferences(allFiles) {
	const sourceFiles = allFiles.filter((filePath) => isSourceFile(filePath) && !shouldSkip(filePath))

	for (const filePath of sourceFiles) {
		const original = await fs.readFile(filePath, 'utf8')
		const updated = replaceImageReferences(original)

		if (updated !== original) {
			await fs.writeFile(filePath, updated, 'utf8')
			console.log(`Updated refs: ${path.relative(projectRoot, filePath)}`)
		}
	}
}

async function main() {
	const allFiles = await convertImages()
	await updateReferences(allFiles)
	console.log('Done.')
}

main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})