'use client';
import { useTheme } from 'next-themes';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<button
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className='h-full w-full text-neutral-500 dark:text-neutral-300'
			aria-label='Toggle theme'>
			{theme === 'dark' ? (
				<IconSun className='' />
			) : (
				<IconMoon className='' />
			)}
		</button>
	);
}
