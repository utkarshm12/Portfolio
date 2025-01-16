import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import {
	IconBrandGithub,
	IconBrandX,
	IconExchange,
	IconHome,
	IconNewSection,
	IconTerminal2,
} from '@tabler/icons-react';
import Image from 'next/image';

export default function Navbar() {
	const links = [
		{
			title: 'Home',
			icon: (
				<IconHome className='h-full w-full text-neutral-500 dark:text-neutral-300' />
			),
			href: '#',
		},
		{
			title: 'Aceternity UI',
			icon: (
				<Image
					src='https://assets.aceternity.com/logo-dark.png'
					width={20}
					height={20}
					alt='Aceternity Logo'
				/>
			),
			href: '#',
		},
		{
			title: 'Changelog',
			icon: (
				<IconExchange className='h-full w-full text-neutral-500 dark:text-neutral-300' />
			),
			href: '#',
		},

		{
			title: 'Twitter',
			icon: (
				<IconBrandX className='h-full w-full text-neutral-500 dark:text-neutral-300' />
			),
			href: '#',
		},
		{
			title: 'GitHub',
			icon: (
				<IconBrandGithub className='h-full w-full text-neutral-500 dark:text-neutral-300' />
			),
			href: '#',
		},
	];
	return (
		<div className='fixed items-center justify-center w-full lg:m-2 lg:px-4 z-50'>
			<FloatingDock items={links} />
		</div>
	);
}
