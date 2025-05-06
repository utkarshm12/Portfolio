'use client';
import React from 'react';
import { StickyScroll } from './ui/sticky-scroll-reveal';
import Image from 'next/image';

const content = [
	{
		title: 'Stellar 101, 12 March 2025',
		description:
			"Delivered and organized a hands-on workshop titled 'Stellar 101', introducing 300+ students to blockchain and Web3 fundamentals. Collaborated with Stellar India to highlight real-world use cases and career pathways in decentralized tech",
		content: (
			<div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white text-xl font-semibold text-center p-4'>
				Stellar 101
			</div>
		),
	},
	{
		title: '.Execute, 8–10 March 2025',
		description:
			'Finalist in a 30-hour hackathon at NMIMS Indore. Built and pitched a full-stack solution called FestX, an AI-powered resume builder that generates professional resumes automatically. Assembled 90+ commits on GitHub within 24 hours, showcasing technical agility, product thinking, and rapid execution under pressure',
		content: (
			<div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white text-xl font-semibold text-center p-4'>
				Hackathon Finalist — 30-Hour Sprint
			</div>
		),
	},
	{
		title: 'AMBIORA Techfest Winner, March 2025',
		description:
			'Topped a three-round competitive programming contest during AMBIORA TechFest at NMIMS Shirpur on 1st March 2025. Marked a back-to-back win, having secured first place in the same event the previous year. Demonstrated speed, problem-solving depth, and consistency under pressure',
		content: (
			<div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--sky-500))] flex items-center justify-center text-white text-xl font-semibold text-center p-4'>
				TechFest Coding Champion — 2025
			</div>
		),
	},
	{
		title: 'Flavium Champion, February 2025',
		description:
			'Won at the college cricket championship in the annual sports fest FALVIUM without losing even a single match thougout the league',
		content: (
			<div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--amber-500),var(--red-500))] flex items-center justify-center text-white text-xl font-semibold text-center p-4'>
				College Cricket Champions
			</div>
		),
	},
	{
		title: 'Attendee — DevFest Indore, December 2025',
		description:
			'Engaged in sessions led by top developers and Industry Experts at DevFest Indore. Gained insights on the latest tech trends and career-building strategies',
		content: (
			<div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--blue-500))] flex items-center justify-center text-white text-xl font-semibold text-center p-4'>
				DevFest Indore
			</div>
		),
	},
	{
		title: 'Top 30% on LeetCode since August 2024',
		description:
			'Ranked in the top 30% of global coders on LeetCode by solving 200+ problems and participating in multiple contests',
		content: (
			<div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white text-xl font-semibold text-center p-4'>
				Top 30% Globally on LeetCode
			</div>
		),
	},
	{
		title: 'TechFest Winner — NMIMS Shirpur, March 2024',
		description:
			'First place in a programming challenge at TechFest 2024 at NMIMS Shirpur, reinforcing problem-solving skills and competitive programming experience.',
		content: (
			<div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--fuchsia-500))] flex items-center justify-center text-white text-xl font-semibold text-center p-4'>
				TechFest Coding Champion — 2024
			</div>
		),
	},
	{
		title: 'CodeChef Starters 106 — November 2023',
		description:
			'Solved 250+ problems on CodeChef; secured a global rank of 72 among 3000+ participants in Starters 106, demonstrating speed and accuracy in competitive programming.',
		content: (
			<div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--rose-500),var(--violet-500))] flex items-center justify-center text-white text-xl font-semibold text-center p-4'>
				CodeChef Starters 106 — Global Rank 72
			</div>
		),
	},
	{
		title: '',
		description: '',
		content: (
			<div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--rose-500),var(--violet-500))] flex items-center justify-center text-white text-xl font-semibold text-center p-4'></div>
		),
	},
];

export default function Achivements() {
	return (
		<div className='max-w-7xl mx-auto' id='Achivements'>
			<h1 className='text-4xl font-bold mb-12 mt-16'>
				Highlights From my Journey
			</h1>
			<StickyScroll content={content} />
		</div>
	);
}
