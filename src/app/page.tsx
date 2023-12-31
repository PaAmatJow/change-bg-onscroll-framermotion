'use client'
import Nav from '@/components/Nav';
import Section from '@/components/Section';
import { useState } from 'react';

export default function Home() {
	const [theme, setTheme] = useState('light')
  return (
		<main className={`${theme}`}>
			<Nav />

			<Section theme='light' setTheme={setTheme}>
				<div className='min-h-screen flex items-center justify-center w-[1000px] text-[80px] font-extrabold'>
					<h1>HERO SECTION</h1>
				</div>
			</Section>
			<Section theme='dark' setTheme={setTheme}>
				<div className='min-h-screen flex items-center justify-center w-[1000px] text-[80px] font-extrabold'>
					<h1>ABOUT SECTION</h1>
				</div>
			</Section>
			<Section theme='light' setTheme={setTheme}>
				<div className='min-h-screen flex items-center justify-center w-[1000px] text-[80px] font-extrabold'>
					<h1>SKILLS SECTION</h1>
				</div>
			</Section>
			<Section theme='dark' setTheme={setTheme}>
				<div className='min-h-screen flex items-center justify-center w-[1000px] text-[80px] font-extrabold'>
					<h1>PROJECTS SECTION</h1>
				</div>
			</Section>
			<Section theme='light' setTheme={setTheme}>
				<div className='min-h-screen flex items-center justify-center w-[1000px] text-[80px] font-extrabold'>
					<h1>CONTACT SECTION</h1>
				</div>
			</Section>
		</main>
	);
}
