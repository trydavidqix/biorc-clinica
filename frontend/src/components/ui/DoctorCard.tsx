import { Doctor } from "../../types";
import { assetPath } from "../../lib/utils";

interface DoctorCardProps {
	doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
	const rootClass = `group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full ${doctor.cardMinHeight ?? "min-h-[520px]"} ${doctor.cardClass ?? ""}`;
	const imageWrapperClass = `relative ${doctor.imageHeight ?? doctor.imageClass ?? "h-56"} overflow-hidden`;
	const contentClass = `${doctor.cardPadding ?? "p-3"} flex-1 flex flex-col justify-start ${doctor.cardGap ?? "gap-2"} ${doctor.contentMarginTop ?? ""}`;

	return (
		<div className={rootClass}>
			<div className={imageWrapperClass}>
				<img
					src={assetPath(doctor.image)}
					alt={doctor.name}
					className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
					style={{ objectPosition: doctor.imagePosition ?? "center top" }}
					loading="lazy"
					decoding="async"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
			</div>

			<div className={contentClass}>
				<div>
					<h3 className={`font-semibold text-neutral-dark ${doctor.nameSize ?? ""}`.trim()}>{doctor.name}</h3>
					<p className={`text-primary text-sm font-medium mb-1 ${doctor.titleSize ?? ""}`.trim()}>{doctor.title}</p>
				</div>
				<p className={`text-neutral-gray text-xs leading-relaxed ${doctor.bioSize ?? ""} ${doctor.bioClamp ?? "line-clamp-3"}`.trim()}>
					{doctor.bio}
				</p>
			</div>
		</div>
	);
}
