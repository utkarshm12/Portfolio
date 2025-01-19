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
				' mx-auto flex h-16 w-full max-w-xl gap-4 items-end justify-center rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3 border-x-8 border-hidden',
				className
			)}
			style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
			<div className='flex cursor-pointer transition-opacity my-auto'>
				<span
					className='hidden md:text-lg md:flex lg:flex lg:text-xl font-mono text-black dark:text-white'
					href='#Profile'>
					U12065
				</span>
			</div>

			{/* Icons Section */}
			<div className='flex gap-4'>
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

	const [hovered, setHovered] = useState(false);

	return (
		<ShinyButton>
			<Link href={href} className='relative block overflow-visible'>
				<div
					className='relative group overflow-visible'
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}>
					<motion.div
						ref={ref}
						style={{ width, height }}
						className='aspect-square rounded-full flex items-center justify-center relative cursor-pointer'>
						<motion.div
							style={{ width: widthIcon, height: heightIcon }}
							className='flex items-center justify-center text-black dark:text-white'>
							{icon}
						</motion.div>
					</motion.div>
				</div>
			</Link>
		</ShinyButton>
	);
}
