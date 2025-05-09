import { HoverEffect } from '../components/ui/card-hover-effect';

export default function Projects() {
	return (
		<div id='Projects' className='max-w-7xl mx-auto px-8'>
			<h1 className='text-4xl font-bold mb-12 mt-16 '>Projects</h1>
			<HoverEffect items={projects} />
		</div>
	);
}
const projects = [
	{
		title: 'Portfolio',
		description:
			'An Introduction to my work, skills, and experience. A place to showcase my projects and achievements',
		link: '#',
		image: '/images/projects/portfolio.png',
		github: 'https://github.com/utkarshm12/Portfolio',
	},
	{
		title: 'FestX',
		description:
			'An AI assistance to generate ATS friendly resume just by getting users public profile and basic information',
		link: '/#Projects',
		image: '/images/projects/festx.png',
		github: 'https://github.com/utkarshm12/FestX',
	},
	{
		title: 'Blogify',
		description:
			'Developed a modern platform with a minimalistic UI, enabling users to create, explore, and manage blogs efficiently',
		link: '/#Projects',
		image: '/images/projects/blogify.png',
		github: 'https://github.com/Jitisha-khede/blogify-frontend',
	},
	{
		title: 'Socion',
		description:
			'Platform delivering social media insights through AI chatbots using langflow and gpt integrations.',
		link: 'https://socion-client.vercel.app/',
		image: '/images/projects/socion.png',
		github: 'https://github.com/AbhishekPal634/socion',
	},
	{
		title: 'Leave Management System',
		description:
			'Our Campus Leave Management System simplifies leave requests for all college members.',
		link: '#',
		image: '/images/projects/leave_management.png',
		github:
			'https://github.com/AbhishekPal634/Student-Leave-Application',
	},
	{
		title: 'Forkify',
		description:
			'User-friendly recipe management web app with vaious recipes, dynamically displayed via API integration.',
		link: 'https://forkify-app-mu.vercel.app',
		image: '/images/projects/forkify.png',
		github: 'https://github.com/utkarshmandloi12/Forkify_App',
	},
	{
		title: 'Flight Management System',
		description:
			'Makes use of key C++ principles, logic development, as well as fundamental data structures and algorithms.',
		link: '#',
		image: '/images/projects/flight_management.png',
		github:
			'https://github.com/utkarshmandloi12/Flight_Management_System',
	},
];
