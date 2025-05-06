'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

// export const StickyScroll = ({ content, contentClassName }) => {
// 	const { theme } = useTheme();
// 	const isDark = theme === 'dark';
// 	const [activeCard, setActiveCard] = React.useState(0);
// 	const ref = useRef(null);
// 	const { scrollYProgress } = useScroll({
// 		container: ref,
// 		offset: ['start start', 'end start'],
// 	});
// 	const cardLength = content.length;

// 	useMotionValueEvent(scrollYProgress, 'change', latest => {
// 		const cardsBreakpoints = content.map(
// 			(_, index) => index / cardLength
// 		);
// 		const closestBreakpointIndex = cardsBreakpoints.reduce(
// 			(acc, breakpoint, index) => {
// 				const distance = Math.abs(latest - breakpoint);
// 				if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
// 					return index;
// 				}
// 				return acc;
// 			},
// 			0
// 		);
// 		setActiveCard(closestBreakpointIndex);
// 	});

// 	const backgroundColors = {
// 		light: ['var(--background)', 'var(--muted)', 'var(--accent)'],
// 		dark: ['var(--slate-900)', 'var(--black)', 'var(--neutral-900)'],
// 	};

// 	const linearGradients = {
// 		light: [
// 			'linear-gradient(to bottom right, var(--cyan-200), var(--emerald-200))',
// 			'linear-gradient(to bottom right, var(--pink-200), var(--indigo-200))',
// 			'linear-gradient(to bottom right, var(--orange-200), var(--yellow-200))',
// 		],
// 		dark: [
// 			'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
// 			'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
// 			'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))',
// 		],
// 	};

// 	const [backgroundGradient, setBackgroundGradient] = useState(
// 		linearGradients.dark[0]
// 	);

// 	useEffect(() => {
// 		setBackgroundGradient(
// 			isDark
// 				? linearGradients.dark[
// 						activeCard % linearGradients.dark.length
// 				  ]
// 				: linearGradients.light[
// 						activeCard % linearGradients.light.length
// 				  ]
// 		);
// 	}, [activeCard, isDark]);

// 	return (
// 		<motion.div
// 			animate={{
// 				backgroundColor: isDark
// 					? backgroundColors.dark[
// 							activeCard % backgroundColors.dark.length
// 					  ]
// 					: backgroundColors.light[
// 							activeCard % backgroundColors.light.length
// 					  ],
// 				transition: { duration: 0.5 },
// 			}}
// 			className='h-[60rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10'
// 			ref={ref}>
// 			<div className='div relative flex items-start px-4'>
// 				<div className='max-w-2xl'>
// 					{content.map((item, index) => (
// 						<div key={item.title + index} className='my-20'>
// 							<motion.h2
// 								initial={{
// 									opacity: 0,
// 								}}
// 								animate={{
// 									opacity: activeCard === index ? 1 : 0.3,
// 								}}
// 								className='text-2xl font-bold text-black dark:text-slate-100'>
// 								{item.title}
// 							</motion.h2>
// 							<motion.div
// 								initial={{
// 									opacity: 0,
// 								}}
// 								animate={{
// 									opacity: activeCard === index ? 1 : 0.3,
// 								}}
// 								className='text-kg text-black-100 dark:text-slate-300 max-w-xl mx-10 mt-10'>
// 								{item.description}
// 							</motion.div>
// 						</div>
// 					))}
// 					<div className='h-52' />
// 				</div>
// 			</div>
// 			<div
// 				style={{ background: backgroundGradient }}
// 				className={cn(
// 					'hidden lg:block h-72 w-96 rounded-md bg-white sticky top-10 overflow-hidden',
// 					contentClassName
// 				)}>
// 				{content[activeCard].content ?? null}
// 			</div>
// 		</motion.div>
// 	);
// };

export const StickyScroll = ({ content, contentClassName }) => {
	const [activeCard, setActiveCard] = React.useState(0);
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		// uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
		// target: ref
		container: ref,
		offset: ['start start', 'end start'],
	});
	const cardLength = content.length;

	useMotionValueEvent(scrollYProgress, 'change', latest => {
		const cardsBreakpoints = content.map(
			(_, index) => index / cardLength
		);
		const closestBreakpointIndex = cardsBreakpoints.reduce(
			(acc, breakpoint, index) => {
				const distance = Math.abs(latest - breakpoint);
				if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
					return index;
				}
				return acc;
			},
			0
		);
		setActiveCard(closestBreakpointIndex);
	});

	const backgroundColors = [
		'#0f172a', // slate-900
		'#000000', // black
		'#171717', // neutral-900
	];
	const linearGradients = [
		'linear-gradient(to bottom right, #06b6d4, #10b981)', // cyan-500 to emerald-500
		'linear-gradient(to bottom right, #ec4899, #6366f1)', // pink-500 to indigo-500
		'linear-gradient(to bottom right, #f97316, #eab308)', // orange-500 to yellow-500
	];

	const [backgroundGradient, setBackgroundGradient] = useState(
		linearGradients[0]
	);

	useEffect(() => {
		setBackgroundGradient(
			linearGradients[activeCard % linearGradients.length]
		);
	}, [activeCard]);

	return (
		<motion.div
			animate={{
				backgroundColor:
					backgroundColors[activeCard % backgroundColors.length],
			}}
			className='relative flex h-[100vh] sm:h-[60vh] justify-center space-x-10 overflow-y-auto rounded-md p-10'
			ref={ref}>
			<div className='div relative flex items-start px-4'>
				<div className='max-w-5xl'>
					{content.map((item, index) => (
						<div key={item.title + index} className='my-20'>
							<motion.h2
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: activeCard === index ? 1 : 0.3,
								}}
								className='text-2xl font-bold text-slate-100'>
								{item.title}
							</motion.h2>
							<motion.p
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: activeCard === index ? 1 : 0.3,
								}}
								className='text-kg mt-10 max-w-sm text-slate-300'>
								{item.description}
							</motion.p>
						</div>
					))}
					<div className='h-20' />
				</div>
			</div>
			<div
				style={{ background: backgroundGradient }}
				className={cn(
					'sticky top-10 hidden h-60 w-96 overflow-hidden rounded-md bg-white lg:block',
					contentClassName
				)}>
				{content[activeCard].content ?? null}
			</div>
		</motion.div>
	);
};
