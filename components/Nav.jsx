'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import {Inter} from 'next/font/google'




const inter = Inter({subsets:['latin'], weight:'500'})

const Nav = () => {
const router = useRouter()




  return (
    <div>
<nav className='bg-[#023047] w-full flex flex-row justify-between pl-[30px] pr-[50px] md:flex-row  lg:flex-row  text-[#fff] cursor-pointer h-[100px] pt-[10px]'>
<Link href='/home'>
<h1 className={[`${inter.className}`, ' text-[34px]']} >Royalty <span className='text-[#c1121f] italic'>Store</span></h1>
</Link>
<ul className='flex flex-col gap-[19px] md:flex-row gap-[30px] lg:flex-row gap-[50px]'>
  <Link href='/men' className=' hover:text-[#c1121f]' >Men Store</Link>
  <Link href='/women'  className=' hover:text-[#c1121f]'>Women Store</Link>
</ul>
</nav>
    </div>
  )
}

export default Nav