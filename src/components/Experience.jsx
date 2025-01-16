import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
export default function Experience() {
	const testimonials = [
		{
			quote:
				'Successfully organized and led a variety of tech events, workshops, and hackathons. Our focus has been on creating engaging, educational experiences that empower participants to grow their technical skills.',
			name: 'LearnTech NMIMS',
			designation: 'TechLead (Aug 2024 - Present)',
			src: '/images/experience/learntech.png',
		},
		{
			quote:
				'Focused on expanding my knowledge of the Stellar blockchain and its applications in global financial systems through hands-on involvement in tech events and workshops.',
			name: 'Stellar',
			designation: 'Regional Ambassidor (Jan 2025 - Present)',
			src: '/images/experience/stellar.png',
		},
		{
			quote:
				'Spearheaded the organization and execution of various events, ensuring smooth coordination among team members and participants.',
			name: 'Ambiora',
			designation: 'Convenor (Jan 2024 - March 2024)',
			src: '/images/experience/ambiora.png',
		},
		{
			quote:
				'Led comprehensive management of competitive programming initiatives within the club, driving strategic planning, event coordination.',
			name: 'Coding Club',
			designation: 'Technical Team (Aug 2023 - May 2024)',
			src: '/images/experience/cc.png',
		},
		{
			quote:
				'Contributed to designing artwork for various events, while honing my artistic skills and collaborating with a team to bring creative ideas to life.',
			name: 'Atrangi',
			designation: 'Creative Team (Dec 2022 - May 2024)',
			src: '/images/experience/atrangi.png',
		},
	];
	return (
		<div className='max-w-7xl mx-auto px-8'>
			<h1 className='text-4xl font-bold mb-12 mt-16 '>Experience</h1>
			<AnimatedTestimonials testimonials={testimonials} />
		</div>
	);
}
