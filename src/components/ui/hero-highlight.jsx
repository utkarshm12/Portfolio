'use client';
import { cn } from '@/lib/utils';
import {
	useMotionValue,
	motion,
	useMotionTemplate,
} from 'framer-motion';
import React from 'react';

export const Highlight = ({ children, className }) => {
	return (
		<motion.span
			initial={{
				backgroundSize: '0% 100%',
			}}
			animate={{
				backgroundSize: '100% 100%',
			}}
			transition={{
				duration: 2,
				ease: 'linear',
				delay: 0.5,
			}}
			style={{
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'left center',
				display: 'inline',
			}}
			className={cn(
				` relative inline-block pb-1 px-1 mx-2 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`,
				className
			)}>
			{children}
		</motion.span>
	);
};
