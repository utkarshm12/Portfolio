'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import { OrbitingCircles } from '../ui/orbiting-circles';
import {
	IconBrandGithub,
	IconBrandNextjs,
	IconBrandCss3,
	IconBrandJavascript,
	IconBrandGit,
	IconBrandMysql,
	IconBrandNodejs,
	IconBrandLeetcode,
	IconBrandReact,
	IconBrandCpp,
} from '@tabler/icons-react';

export const HoverEffect = ({ items, className }) => {
	let [hoveredIndex, setHoveredIndex] = useState(null);

	return (
		<div
			className={cn(
				'grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10',
				className
			)}>
			{items.map((item, idx) => (
				<Link
					href={item?.link}
					key={item?.link}
					className='relative group  block p-2 h-full w-full'
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className='absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl'
								layoutId='hoverBackground'
								initial={{ opacity: 0 }}
								animate={{
									opacity: 0.15,
									transition: { duration: 0.1 },
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.1, delay: 0.1 },
								}}
							/>
						)}
					</AnimatePresence>
					<CardContainer
						className={cn(
							'rounded-2xl m-0 h-96 w-full bg-tranparent relative z-50',
							className
						)}>
						<CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
							<CardItem
								translateZ='20'
								className='text-xl font-bold text-neutral-600 dark:text-white'>
								{item.title}
							</CardItem>
							<CardItem
								as='p'
								translateZ='20'
								className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'>
								{item.description}
							</CardItem>
							<CardItem translateZ='20' className='w-full mt-4'>
								<Image
									src={item.image}
									height='1000'
									width='1000'
									className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
									alt={item.title}
								/>
							</CardItem>
							<div className='flex justify-between items-center mt-16'>
								<CardItem
									translateZ={20}
									as='div'
									className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'>
									<Link
										href='#'
										onClick={e => {
											e.preventDefault();
											window.open(item.github, '_blank');
										}}
										className='block'>
										<div className='h-12 w-12 rounded-full bg-black dark:bg-white flex items-center justify-center'>
											<IconBrandGithub className='h-6 w-6 dark:text-black text-white' />
										</div>
									</Link>
								</CardItem>
							</div>
						</CardBody>
					</CardContainer>
				</Link>
			))}
			<div
				className='relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-gray-50 dark:bg-black md:shadow-xl  h-[30rem]'
				onClick={() =>
					window.open('https://github.com/utkarshmandloi12', '_blank')
				}>
				<span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-black'>
					More Projects
				</span>

				<OrbitingCircles iconSize={40}>
					<IconBrandGithub />
					<IconBrandNextjs />
					<IconBrandGit />
					<IconBrandJavascript />
					<IconBrandMysql />
				</OrbitingCircles>
				<OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
					<IconBrandGithub />
					<IconBrandLeetcode />
					<IconBrandCss3 />
					<IconBrandJavascript />
					<IconBrandNodejs />
					<IconBrandReact />
					<IconBrandCpp />
				</OrbitingCircles>
			</div>
		</div>
	);
};
