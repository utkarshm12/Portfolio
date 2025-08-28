'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import {
	IconBrandGithub,
	IconBrandDiscord,
	IconBrandLinkedin,
	IconSend,
} from '@tabler/icons-react';
import { Toaster } from 'react-hot-toast';

const renderResult = result => (
	<div
		className={`fixed top-12 transform z-50 p-3 md:p-4 rounded-lg text-center font-outfit max-w-xs md:max-w-sm mx-4 ${
			result === 'Sending....'
				? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-700'
				: result === 'Message Received'
				? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-700'
				: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-700'
		}`}>
		<div className='flex items-center justify-center gap-2'>
			{result === 'Sending....' && (
				<div className='animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 dark:border-blue-400'></div>
			)}
			{result === 'Message Received' && (
				<svg
					className='w-4 h-4 md:w-5 md:h-5'
					fill='currentColor'
					viewBox='0 0 20 20'>
					<path
						fillRule='evenodd'
						d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
						clipRule='evenodd'
					/>
				</svg>
			)}
			{result !== 'Sending....' && result !== 'Message Received' && (
				<svg
					className='w-4 h-4 md:w-5 md:h-5'
					fill='currentColor'
					viewBox='0 0 20 20'>
					<path
						fillRule='evenodd'
						d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
						clipRule='evenodd'
					/>
				</svg>
			)}
			<span className='font-medium text-sm md:text-base'>
				{result}
			</span>
		</div>
	</div>
);

export default function SignupFormDemo() {
	const [result, setResult] = useState('');
	const [status, setStatus] = useState('idle');
	const form = useRef(null);

	useEffect(() => {
		if (result) {
			const timer = setTimeout(() => {
				setResult('');
				setStatus('idle');
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [result]);

	const onSubmit = async event => {
		event.preventDefault();
		setStatus('sending');
		setResult('Sending....');

		const formElement = event.target;
		const formData = new FormData(formElement);

		try {
			const response = await fetch(
				'https://api.web3forms.com/submit',
				{
					method: 'POST',
					body: formData,
				}
			);

			const data = await response.json();

			if (data.success) {
				setResult('Message Received');
				setStatus('success');
				formElement.reset();
			} else {
				console.error('Error from web3forms:', data);
				setResult(data.message || 'An error occurred.');
				setStatus('error');
			}
		} catch (error) {
			console.error('Submission error:', error);
			setResult('An error occurred while submitting the form.');
			setStatus('error');
		}
	};

	const isSubmitting = status === 'sending';

	return (
		<div className='max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black'>
			<h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
				Let's Connect.
			</h2>
			<p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
				Drop me a message and I will get back to you as soon as
				possible.
			</p>

			<form
				className='space-y-6 w-full'
				ref={form}
				onSubmit={onSubmit}>
				<input
					type='hidden'
					name='access_key'
					value='cd10820a-faa4-4499-9be5-682b4d2dda76'
				/>
				<div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
					<LabelInputContainer>
						<Label htmlFor='name'>Name</Label>
						<Input
							id='name'
							name='name'
							placeholder='Utkarsh Mandloi'
							type='text'
							required
							disabled={isSubmitting}
						/>
					</LabelInputContainer>
				</div>

				<LabelInputContainer className='mb-4'>
					<Label htmlFor='email'>Email Address</Label>
					<Input
						id='email'
						name='email'
						placeholder='yourmail@something.com'
						type='email'
						required
						disabled={isSubmitting}
					/>
				</LabelInputContainer>

				<LabelInputContainer className='mb-8'>
					<Label htmlFor='message'>Message</Label>
					<textarea
						id='message'
						name='message'
						placeholder='Your Note Here'
						className='flex h-32 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
						required
						disabled={isSubmitting}
					/>
				</LabelInputContainer>

				<button
					type='submit'
					disabled={isSubmitting}
					className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg px-6 py-3 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'>
					{isSubmitting ? (
						<>
							<div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white'></div>
							<span>Sending...</span>
						</>
					) : (
						<>
							<IconSend className='w-4 h-4' />
							<span>Send Message</span>
						</>
					)}
				</button>
				{result && renderResult(result)}
			</form>
			<Toaster position='top-right' />
			<div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />

			<div className='flex justify-center space-x-4'>
				<a
					href='https://linkedin.com/in/utkarshm12'
					target='_blank'
					rel='noopener noreferrer'
					className='relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] hover:opacity-80'>
					<IconBrandLinkedin className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
					<span className='text-neutral-700 dark:text-neutral-300 text-sm'>
						LinkedIn
					</span>
				</a>
				<a
					href='https://github.com/utkarshm12'
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
