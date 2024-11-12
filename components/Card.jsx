'use client'

import React from 'react'
import woman from '@/public/cloth_Assets/Woman2.png'
import man from '@/public/cloth_Assets/Men3.png'
import Image from 'next/image'
import {Inter} from 'next/font/google'




const inter = Inter({subsets:['latin'], weight:'700'
})
const Card = () => {
  return (
    <div className='flex justify-between'>
<Image src={woman} alt='woman' className='hidden h-[400px] md:block'/>
<div className='w-[400px] leading-4rem mt-[100px] text-[#fff] ml-[50px] md: '>
<h1 className='text-[#c1121f] text-[20px]'>Welcome to Royalty Store</h1>
<p>Our mission is to grant you ascess to exquisite clothes that makes you gorgeous</p>
<p>When you are gorgeous you are confident</p>
<span className='text-[#c1121f] text-[14px]' >You are a Royalty.....</span>
</div>
<Image src={man} alt='man' className=' hidden h-[400px] w-[550px] mt-[-10px] md:block' />
    </div>
  )
}

export default Card