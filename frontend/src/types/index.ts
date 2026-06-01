export interface Specialty {
	id: string;
	name: string;
	description: string;
	icon: string;
	iconFile?: string;
	category: "tecnica" | "medica";
	doctor?: Doctor;
}

export interface Doctor {
	id: string;
	name: string;
	title: string;
	bio: string;
	image: string;
	specialties: string[];
	cardClass?: string;
	imageClass?: string;
	imagePosition?: string;
	cardPadding?: string;
	cardGap?: string;
	cardMinHeight?: string;
	imageHeight?: string;
	contentMarginTop?: string;
	nameSize?: string;
	titleSize?: string;
	bioSize?: string;
	bioClamp?: string;
}

export interface Testimonial {
	id: string;
	name: string;
	text: string;
	rating: number;
	specialty: string;
}

export interface ContactFormData {
	name: string;
	email: string;
	phone: string;
	specialty: string;
	message: string;
	privacyConsent?: boolean;
	honeypot?: string;
}

export interface ApiResponse {
	success: boolean;
	message: string;
}
