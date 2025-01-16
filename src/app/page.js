'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Projects from '@/components/Projects';
import Achivements from '@/components/Achivements';
import Connect from '@/components/Connect';
export default function Home() {
	return (
		// <div className='relative h-screen w-screen bg-gray-100 dark:bg-neutral-900'>
		<div>
			<Navbar />
			<Profile />
			{/* <TracingBeam> */}
			<Experience />
			<Projects />
			<Achivements />
			<Connect />
			{/* </TracingBeam> */}
		</div>
	);
}
