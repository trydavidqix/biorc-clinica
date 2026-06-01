import {
	Activity,
	Apple,
	Baby,
	Brain,
	Dumbbell,
	Heart,
	HeartPulse,
	PersonStanding,
	Stethoscope,
	type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { Specialty } from "../../types";
import { assetPath } from "../../lib/utils";

interface SpecialtyCardProps {
	specialty: Specialty;
}

export default function SpecialtyCard({ specialty }: SpecialtyCardProps) {
	const iconMap: Record<string, LucideIcon> = {
		Brain,
		HeartPulse,
		Stethoscope,
		Heart,
		Baby,
		Activity,
		Apple,
		Dumbbell,
		PersonStanding,
	};
	const Icon = iconMap[specialty.icon] || Stethoscope;
	const iconPath = specialty.iconFile
		? assetPath(`/icons/${specialty.iconFile}`)
		: assetPath(`/icons/${specialty.id}.webp`);
	const [useImage, setUseImage] = useState(true);

	return (
		<article className="group p-6 rounded-xl border border-neutral-beige hover:border-primary/30 hover:shadow-md transition-all duration-200 bg-white border-l-4 border-l-transparent hover:border-l-primary">
			<div className="w-16 h-16 flex items-center justify-center mb-4 transition-colors">
				{useImage ? (
					<img
						src={iconPath}
						alt={specialty.name}
						className={`w-12 h-12 object-contain ${
							specialty.id === "pediatria" ? "icon-animate" : ""
						}`}
						loading="lazy"
						decoding="async"
						onError={() => setUseImage(false)}
					/>
				) : (
					<Icon size={36} className="text-primary" aria-hidden="true" />
				)}
			</div>
			<h3 className="font-semibold text-neutral-dark mb-2">{specialty.name}</h3>
			<p className="text-neutral-gray text-sm leading-relaxed mb-4">
				{specialty.description}
			</p>
			<span className="text-primary text-sm font-medium group-hover:underline">
				Saber mais →
			</span>
		</article>
	);
}
