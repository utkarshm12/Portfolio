import React from 'react';

import { cn } from '@/lib/utils';

import { ArrowRight } from 'lucide-react';

export function RainbowButton(
	{ text = 'Button', children, className, ...props },
	ref
) {
	return (
		<button
			ref={ref}
			className={cn(
				'group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
				// before styles
				'before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:[filter:blur(calc(0.8*1rem))] ',
				// light mode colors
				'bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]',
				// dark mode colors
				'dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]',
				'group relative w-32 cursor-pointer overflow-hidden rounded-full border bg-background p-2 text-center font-semibold ',
				className
			)}
			{...props}>
			{children}
			<span className='inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 '>
				{text}
			</span>
			<div className='absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 hover:bg-white hover:text-black'>
				<span>{text}</span>
				<ArrowRight />
			</div>
		</button>
	);
}
