'use client';
import React, { useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import {
	IconBrandGithub,
	IconBrandDiscord,
	IconBrandLinkedin,
} from '@tabler/icons-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function SignupFormDemo() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [messageSent, setMessageSent] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();
		setIsSubmitting(true);

		// Get form values
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const message = form.message.value;

		// EmailJS send
		try {
			await emailjs.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				e.target,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
			);

			toast.success('Message sent successfully!');
			e.target.reset();
		} catch (error) {
			console.error('Email sending failed:', error);
			toast.error('Failed to send message. Please try again.');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className='max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black'>
			<h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
				Let's Connect.
			</h2>
			<p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
				Drop me a message and I will get back to you as soon as
				possible.
			</p>

			{messageSent && (
				<p className='text-green-600'>
					Your message has been sent successfully!
				</p>
			)}

			<form className='my-8' onSubmit={handleSubmit}>
				<div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
					<LabelInputContainer>
						<Label htmlFor='name'>Name</Label>
						<Input
							id='name'
							name='name'
							placeholder='Harry Potter'
							type='text'
							required
						/>
					</LabelInputContainer>
				</div>

				<LabelInputContainer className='mb-4'>
					<Label htmlFor='email'>Email Address</Label>
					<Input
						id='email'
						name='email'
						placeholder='harrypotter@wizard.com'
						type='email'
						required
					/>
				</LabelInputContainer>

				<LabelInputContainer className='mb-8'>
					<Label htmlFor='message'>Message</Label>
					<textarea
						id='message'
						name='message'
						placeholder='Your Spell Here'
						className='flex h-32 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
						required
					/>
				</LabelInputContainer>

				<button
					className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
					type='submit'
					disabled={isSubmitting}>
					{isSubmitting ? 'Sending...' : 'Send Message →'}
				</button>
			</form>
			<Toaster />
			<div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />

			<div className='flex justify-center space-x-4'>
				{/* Social links */}
				<a
					href='https://linkedin.com/in/utkarshmandloi12'
					target='_blank'
					rel='noopener noreferrer'
					className='relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] hover:opacity-80'>
					<IconBrandLinkedin className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
					<span className='text-neutral-700 dark:text-neutral-300 text-sm'>
						LinkedIn
					</span>
				</a>
				<a
					href='https://github.com/utkarshmandloi12'
					target='_blank'
					rel='noopener noreferrer'
					className='relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] hover:opacity-80'>
					<IconBrandGithub className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
					<span className='text-neutral-700 dark:text-neutral-300 text-sm'>
						GitHub
					</span>
				</a>
				<a
					href='https://discord.com/users/vector#5013'
					target='_blank'
					rel='noopener noreferrer'
					className='relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] hover:opacity-80'>
					<IconBrandDiscord className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
					<span className='text-neutral-700 dark:text-neutral-300 text-sm'>
						Discord
					</span>
				</a>
			</div>
		</div>
	);
}

const LabelInputContainer = ({ children, className }) => {
	return (
		<div className={cn('flex flex-col space-y-2 w-full', className)}>
			{children}
		</div>
	);
};
