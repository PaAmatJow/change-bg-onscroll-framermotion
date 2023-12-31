import Link from "next/link"

const Nav = () => {
  return (
		<nav className='fixed top-0 w-full z-50 bg-bg dark:bg-content text-content dark:text-bg transition-all duration-500'>
			<div className='flex items-center justify-between px-5 py-2 h-[80px]'>
				<div className='text-[20px] font-extrabold'>
					<p>LOGO</p>
				</div>
				<div className='flex items-center gap-[30px]'>
					<Link href='/'>about</Link>
					<Link href='/'>skills</Link>
					<Link href='/'>projects</Link>
					<Link href='/'>
						<button className='bg-black dark:bg-bg px-8 py-3 text-bg dark:text-content rounded-full'>
							contact
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
}
export default Nav