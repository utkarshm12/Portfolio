import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import {
	IconHome,
	IconBriefcase,
	IconDeviceImacCode,
	IconTrophy,
	IconPhone,
} from '@tabler/icons-react';
import Link from 'next/link';

export default function Navbar() {
	const links = [
		{
			title: 'Home',
			icon: (
				<IconHome className='h-full w-full text-neutral-500 dark:text-neutral-300' />
			),
			href: '#Profile',
		},
		{
			title: 'Experience',
			icon: (
				<IconBriefcase className='h-full w-full text-neutral-500 dark:text-neutral-300' />
			),
			href: '#Experience',
		},
		{
			title: 'Projects',
			icon: (
				<IconDeviceImacCode className='h-full w-full text-neutral-500 dark:text-neutral-300' />
			),
			href: '#Projects',
		},

		{
			title: 'Achivements',
			icon: (
				<IconTrophy className='h-full w-full text-neutral-500 dark:text-neutral-300' />
			),
			href: '#Achivements',
		},
		{
			title: 'Contact',
			icon: (
				<IconPhone className='h-full w-full text-neutral-500 dark:text-neutral-300' />
			),
			href: '#Contact',
		},
	];
	return (
		<div className='fixed items-center justify-center w-full lg:m-2 lg:px-4 z-50'>
			<FloatingDock items={links} />
		</div>
	);
}
