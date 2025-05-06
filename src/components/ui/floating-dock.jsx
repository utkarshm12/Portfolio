import { cn } from '@/lib/utils';
import { IconLayoutNavbarCollapse } from '@tabler/icons-react';
import {
	AnimatePresence,
	motion,
	useMotionValue,
	useSpring,
	useTransform,
} from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';
import ShinyButton from '@/components/ui/shiny-button';

export const FloatingDock = ({ items, desktopClassName }) => {
	return (
		<>
			<FloatingDockDesktop
				items={items}
				className={desktopClassName}
			/>
		</>
	);
};

const FloatingDockDesktop = ({ items, className }) => {
	let mouseX = useMotionValue(Infinity);
	return (
		<motion.div
			onMouseMove={e => mouseX.set(e.pageX)}
			onMouseLeave={() => mouseX.set(Infinity)}
			className={cn(
				' mx-auto overlay-auto flex h-16 w-full max-w-xl gap-2 items-end justify-center rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3 border-x-8 border-hidden',
				className
			)}
			style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
			{/* Icons Section */}
			<div className='flex gap-2 sm:gap-6'>
				{items.map(item => (
					<IconContainer
						mouseX={mouseX}
						key={item.title}
						{...item}
						href={item.href}
					/>
				))}
			</div>
		</motion.div>
	);
};

function IconContainer({ mouseX, title, icon, href }) {
	let ref = useRef(null);
	const [hovered, setHovered] = useState(false);

	let distance = useTransform(mouseX, val => {
		let bounds = ref.current?.getBoundingClientRect() ?? {
			x: 0,
			width: 0,
		};

		return val - bounds.x - bounds.width / 2;
	});

	let widthTransform = useTransform(
		distance,
		[-150, 0, 150],
		[50, 65, 50]
	);
	let heightTransform = useTransform(
		distance,
		[-150, 0, 150],
		[50, 65, 50]
	);

	let widthTransformIcon = useTransform(
		distance,
		[-150, 0, 150],
		[25, 32, 25]
	);
	let heightTransformIcon = useTransform(
		distance,
		[-150, 0, 150],
		[25, 32, 25]
	);
	let width = useSpring(widthTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});
	let height = useSpring(heightTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	let widthIcon = useSpring(widthTransformIcon, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});
	let heightIcon = useSpring(heightTransformIcon, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	return (
		<Link href={href}>
			<motion.div
				ref={ref}
				style={{ width, height }}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative'>
				<AnimatePresence>
					{hovered && (
						<motion.div
							initial={{ opacity: 0, y: 10, x: '-50%' }}
							animate={{ opacity: 1, y: 0, x: '-50%' }}
							exit={{ opacity: 0, y: 2, x: '-50%' }}
							className='px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 top-16 w-fit text-xs z-50'>
							{title}
						</motion.div>
					)}
				</AnimatePresence>
				<motion.div
					style={{ width: widthIcon, height: heightIcon }}
					className='flex items-center justify-center'>
					{icon}
				</motion.div>
			</motion.div>
		</Link>
	);
}
