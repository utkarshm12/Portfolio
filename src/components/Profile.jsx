'use client';
import React from 'react';
import { StarsBackground } from '@/components/ui/stars-bg';
import WordRotate from '@/components/ui/word-rotate';
import TypingAnimation from '@/components/ui/typing-animation';
import { Highlight } from '@/components/ui/hero-highlight';
import { RainbowButton } from '@/components/ui/rainbow-button';
import BoxReveal from '@/components/ui/box-reveal';
import Link from 'next/link';

export default function Profile() {
	return (
		<div
			id='Profile'
			className=' bg-neutral-900 flex flex-row items-start justify-center w-full h-[100vh] sm:h-auto text-white p-4'>
			<StarsBackground />
			<div className='my-16 min:mx-4 mx-auto flex flex-col gap-4'>
				<BoxReveal>
					<div>
						<TypingAnimation className='text-xl sm:text-4xl md:text-5xl'>
							Hey there!!
						</TypingAnimation>
					</div>
					<div>
						<TypingAnimation className='text-xl sm:text-4xl md:text-5xl'>
							Welcome to Utkarsh's Portfolio
						</TypingAnimation>
					</div>
				</BoxReveal>
				<BoxReveal>
					<div className='flex flex-row items-center text-xl mb-2 gap-2'>
						I'm a{' '}
						<Highlight className='bg-white dark:bg-neutral-800 px-2 py-2 rounded-lg w-[16rem] sm:w-[30rem]'>
							<WordRotate
								className='text-xl sm:text-3xl md:text-4xl font-bold text-white dark:text-black'
								words={[
									'Full-Stack Developer',
									'Competitive Programmer',
								]}
							/>
						</Highlight>
					</div>
				</BoxReveal>
				<BoxReveal>
					<p className='text-xl leading-relaxed max-w-6xl'>
						I love building things that solve problems, whether it's
						crafting smooth user experiences or optimizing backend
						systems for performance. I'm always eager to learn new
						technologies.
					</p>
				</BoxReveal>
				<BoxReveal>
					<p className='text-xl leading-relaxed max-w-6xl'>
						{' '}
						Feel free to explore my work and collaborate.
					</p>
				</BoxReveal>
				<BoxReveal>
					<div className='flex flex-row items-center gap-4'>
						<Link href='#Contact'>
							<RainbowButton text='Contact Me'></RainbowButton>
						</Link>
					</div>
				</BoxReveal>
			</div>
		</div>
	);
}
