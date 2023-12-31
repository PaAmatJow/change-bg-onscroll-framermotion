'use client'

import {useRef, ReactNode} from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'


interface SectionProps {
	children: ReactNode;
	theme: string;
	setTheme: (theme: string) => void;
}

const Section = ({children, theme, setTheme}: SectionProps) => {

  const container = useRef(null)

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start center', 'end center']
  })

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    if(value > 0 && value < 1) {
      setTheme(theme)
    }
  })


  return (
		<section
			ref={container}
			className='bg-bg text-content dark:text-bg dark:bg-content transition-all duration-500'
		>
			{children}
		</section>
	);
}
export default Section