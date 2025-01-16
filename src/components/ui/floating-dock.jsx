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

export const FloatingDock = ({
	items,
	desktopClassName,
	mobileClassName,
}) => {
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
				'mx-auto flex h-16 w-full gap-4 items-end justify-center rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3 border-x-8 border-hidden',
				className
			)}>
			{items.map(item => (
				<IconContainer mouseX={mouseX} key={item.title} {...item} />
			))}
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
		[50, 65, 50] // Reduced from [40, 80, 40]
	);
	let heightTransform = useTransform(
		distance,
		[-150, 0, 150],
		[50, 65, 50] // Reduced from [40, 80, 40]
	);

	let widthTransformIcon = useTransform(
		distance,
		[-150, 0, 150],
		[25, 32, 25] // Reduced from [20, 40, 20]
	);
	let heightTransformIcon = useTransform(
		distance,
		[-150, 0, 150],
		[25, 32, 25] // Reduced from [20, 40, 20]
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
			<Link href={href}>
				<motion.div
					ref={ref}
					style={{ width, height }}
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					className='aspect-square rounded-full flex items-center justify-center relative'>
					<motion.div
						style={{ width: widthIcon, height: heightIcon }}
						className='flex items-center justify-center'>
						{icon}
					</motion.div>
				</motion.div>
			</Link>
		</ShinyButton>
	);
}
