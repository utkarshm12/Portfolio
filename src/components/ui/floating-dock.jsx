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
				' mx-auto flex h-16 w-full max-w-3xl gap-4 items-end justify-center rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3 border-x-8 border-hidden',
				className
			)}
			style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
			{items.map(item => (
				<IconContainer
					mouseX={mouseX}
					key={item.title}
					{...item}
					href={item.href}
				/>
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
                            className='flex items-center justify-center'>
                            {icon}
                        </motion.div>
                    </motion.div>
                    
                    <AnimatePresence>
                        {hovered && (
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: 8 }}
                                exit={{ opacity: 0, y: 0 }}
                                className='absolute left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-100 dark:bg-neutral-800 rounded-md text-xs text-neutral-700 dark:text-white border border-gray-200 dark:border-neutral-700 whitespace-nowrap z-50'
                            >
                                {title}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Link>
        </ShinyButton>
	);
}
