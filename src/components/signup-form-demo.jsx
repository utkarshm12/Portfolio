'use client';
import React from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import {
	IconBrandGithub,
	IconBrandGoogle,
	IconBrandDiscord,
	IconBrandLinkedin,
	IconBrandX,
	IconBrandLeetcode,
} from '@tabler/icons-react';

export default function SignupFormDemo() {
	const handleSubmit = e => {
		e.preventDefault();
		console.log('Form submitted');
	};
	return (
		<div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black'>
			<h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
				Let's Get Started.
			</h2>
			<p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
				Drop me a message and I will get back to you as soon as
				possible.
			</p>
			<form className='my-8' onSubmit={handleSubmit}>
				<div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
					<LabelInputContainer>
						<Label htmlFor='name'>Name</Label>
						<Input id='firstname' placeholder='Tyler' type='text' />
					</LabelInputContainer>
				</div>
				<LabelInputContainer className='mb-4'>
					<Label htmlFor='email'>Email Address</Label>
					<Input
						id='email'
						placeholder='projectmayhem@fc.com'
						type='email'
					/>
				</LabelInputContainer>
				<LabelInputContainer className='mb-8'>
					<Label htmlFor='message'>Message</Label>
					<textarea
						id='message'
						placeholder='Your message here...'
						className='flex h-32 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
					/>
				</LabelInputContainer>

				<button
					className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
					type='submit'>
					Send Message &rarr;
					<BottomGradient />
				</button>

				<div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />

				<div className='flex justify-center space-x-4'>
					<a
						href='https://github.com/yourusername'
						target='_blank'
						rel='noopener noreferrer'
						className='relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] hover:opacity-80'>
						<IconBrandGithub className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
						<span className='text-neutral-700 dark:text-neutral-300 text-sm'>
							GitHub
						</span>
						<BottomGradient />
					</a>
					<a
						href='https://linkedin.com/in/yourusername'
						target='_blank'
						rel='noopener noreferrer'
						className='relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] hover:opacity-80'>
						<IconBrandLinkedin className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
						<span className='text-neutral-700 dark:text-neutral-300 text-sm'>
							LinkedIn
						</span>
						<BottomGradient />
					</a>
					<a
						href='https://discord.com/users/yourid'
						target='_blank'
						rel='noopener noreferrer'
						className='relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] hover:opacity-80'>
						<IconBrandDiscord className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
						<span className='text-neutral-700 dark:text-neutral-300 text-sm'>
							Discord
						</span>
						<BottomGradient />
					</a>
				</div>
			</form>
		</div>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
			<span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
		</>
	);
};

const LabelInputContainer = ({ children, className }) => {
	return (
		<div className={cn('flex flex-col space-y-2 w-full', className)}>
			{children}
		</div>
	);
};
