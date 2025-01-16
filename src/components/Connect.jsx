import SignupFormDemo from './signup-form-demo';
import { IconCloud } from './ui/icon-cloud';

const slugs = [
	// Social & Coding Platforms
	'github',
	'twitter',
	'discord',
	'linkedin',
	'leetcode',
	'codechef',
	'instagram',

	// Programming Languages
	'javascript',
	'cplusplus',
	'c',

	// Web Technologies
	'html5',
	'css3',
	'react',
	'nextdotjs',
	'nodedotjs',
	'express',

	// Databases
	'mongodb',
	'postgresql',
	'mysql',

	// Tools & Platforms
	'visualstudiocode',
	'git',
	'docker',
	'figma',
	// Social & Coding Platforms
	'github',
	'twitter',
	'discord',
	'linkedin',
	'codechef',

	// Programming Languages

	'cplusplus',

	// Web Technologies
	'html5',
	'css3',
	'react',
	'nextdotjs',
	'nodedotjs',
	'express',

	// Databases
	'mongodb',
	'postgresql',
	'mysql',

	// Tools & Platforms
	'git',
	'figma',
];

export default function Connect() {
	const images = slugs.map(
		slug => `https://cdn.simpleicons.org/${slug}/${slug}`
	);
	return (
		<div className='min-h-screen py-20 px-4 md:px-8' id='Contact'>
			<div className='flex flex-col lg:flex-row w-full max-w-7xl mx-auto gap-8 items-center justify-center'>
				<div className='w-full lg:w-1/2 h-full'>
					<SignupFormDemo />
				</div>
				<div className='w-full lg:w-1/2 h-[600px] flex items-center justify-center'>
					<IconCloud images={images} />
				</div>
			</div>
		</div>
	);
}
