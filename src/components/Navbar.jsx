import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import {
	IconHome,
	IconBriefcase,
	IconDeviceImacCode,
	IconTrophy,
	IconPhone,
} from '@tabler/icons-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function Navbar() {
	const links = [
		{
			title: 'Home',
			icon: (
				<IconHome className='h-full w-full text-neutral-100 dark:text-neutral-300' />
			),
			href: '#Profile',
		},
		{
			title: 'Experience',
			icon: (
				<IconBriefcase className='h-full w-full text-neutral-100 dark:text-neutral-300' />
			),
			href: '#Experience',
		},
		{
			title: 'Projects',
			icon: (
				<IconDeviceImacCode className='h-full w-full text-neutral-100 dark:text-neutral-300' />
			),
			href: '#Projects',
		},

		{
			title: 'Achivements',
			icon: (
				<IconTrophy className='h-full w-full text-neutral-100 dark:text-neutral-300' />
			),
			href: '#Achivements',
		},
		{
			title: 'Contact',
			icon: (
				<IconPhone className='h-full w-full text-neutral-100 dark:text-neutral-300' />
			),
			href: '#Contact',
		},
		{
			title: 'Theme',
			icon: (
				<div className='h-full w-full text-neutra-100 dark:text-neutral-100'>
					<ThemeToggle />
				</div>
			),
			href: '#',
		},
	];
	return (
		<div className='fixed items-center justify-center w-full lg:m-2 lg:px-4 z-30'>
			<FloatingDock items={links} />
		</div>
	);
}
