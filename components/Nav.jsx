

'use client'

import Image from "next/image"
import Link from "next/link"
import Icon from '../public/Layer 29.png'
import { Inter } from "next/font/google"

const inter = Inter({subsets:['latin'], weight:'400'})

const Nav = () => {

  return (
    <div className={[`${inter.className}`, " w-[1392px] h-[105px] ml-[48px] flex gap-[492px] pb-[32px] pt-[32px]"]} >
<Image src={Icon} alt="icon" className="w-[212px] h-[41px]"/>
<ul className="flex gap-[46px] w-[641px] h-[40px] font-[Inter] font-[400]">
  <Link href= '/home' className="w-[46px] h-[32px] text-[#043AFB] font-[600]" >Home</Link>
  <Link href='/about' className="w-[71px] h-[32px]">About Us</Link>
  <li className="w-[42px] h-[32px]">Login</li>
  <Link href='/contact' className="w-[85px] h-[32px]">Contact Us</Link>
  <li className=" bg-[#043AFB] w-[117px] h-[40px] pt-[4px] pb-[4px] pr-[32px] pl-[32px] rounded-[5px] gap-[10px] text-[#fff]">Signup</li>
</ul>

    </div>
  )
}

export default Nav