
'use client'
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import Icon from '@/public/Layer 29.png'
import { Inter } from "next/font/google"
import frame from '@/public/Frame 27.png'
import mic from '@/public/megaphone illustration 1.png'

const inter = Inter({subsets:['latin'], weight:'400'})
const About = () => {
  return (
    <section>
    <div className={[`${inter.className}`, " w-[1392px] h-[105px] ml-[48px] flex gap-[492px] pb-[32px] pt-[32px]"]} >
<Image src={Icon} alt="icon" className="w-[212px] h-[41px]"/>
<ul className="flex gap-[46px] w-[641px] h-[40px] font-[Inter] font-[400]">
  <Link href= '/home' className="w-[46px] h-[32px]  font-[600]" >Home</Link>
  <Link href='' className="w-[71px] h-[32px] text-[#043AFB]">About Us</Link>
  <li className="w-[42px] h-[32px]">Login</li>
  <Link href='/contact' className="w-[85px] h-[32px]">Contact Us</Link>
  <li className=" bg-[#043AFB] w-[117px] h-[40px] pt-[4px] pb-[4px] pr-[32px] pl-[32px] rounded-[5px] gap-[10px] text-[#fff]">Signup</li>
</ul>

    </div>
    <div className={[`${inter.className}`,' absolute w-[88px] h-[32px] left-[676px]  top-[148px] text-[20px] leading-[32px] text-[#878787]' ]}> About Us </div>

    <div className={[`${inter.className}`,' absolute w-[1181px] h-[140px] top-[204px] left-[130px] text-[64px] leading-[70px] align-center']}>We are bridging the gap between<br/>
    tech and religion as you know it</div>
    <Image src={frame} alt='frame' className=' absolute w-[1344px] h-[386px] top-[376px] left-[47px]'/>

    
    <div className={[`${inter.className}`, ' absolute w-[660px] h-[175px] top-[916px] left-[63px]']}>
<p className='text-[20px] text-[#878787] '>Fast Safe and Seamless financial transaction <span className=' bg-[#878787]  w-[221px] border-t-2 border-b-2 
border-r-2 border-l-2'></span></p>  
<p className='w-[660px] h-[128px] leading-[40px] mt-[15px] text-[#1B1B1B] text-[24px] ' >Lorem ipsum dolor sit amet consectetur. Convallis morbi<br/> quam aliquam eget vel facilisis nibh congue. Nunc nulla .<br/> felis penatibus consequat. At magna curabitur faucibus a </p>
</div>
<div className=' absolute w-[597px] h-[290px] top-[858px] left-[701px] rounded-[-4px] bg-[#EBEFFF]'>
    <div className='  relative w-[577px] h-[237px] top-[34px] left-[34px] mr-[100px]'>
<p className={[`${inter.className}`, ' w-[266px] h-[40px]text-[500] text-[24px] leading-[40px]']}>Why we do what we do</p>
<p className={[`${inter.className}`, ' w-[577px] h-[113px] text-[500] text-[14px] leading-[24px]']}>
Lorem ipsum dolor sit amet consectetur. Quis aenean adipiscing semper libero egestas ipsum. Nunc nisl ac viverra non. Mattis mauris sed magna amet suspendisse nam blandit. Amet interdum maecenas risus orci in. Bibendum mollis posuere egestas bibendum turpis nunc porttitor. Proin eget sed phasellus duis nunc at nunc ultricies.

</p>
<button className='w-[170px] h-[52px] rounded-[4px] pt-[10px] pb-[10px] pr-[32px] pl-[32px] gap-[10px] border-[1px] border-[#525252] bg-[#fff]'>Read Our Blog</button>
</div>
</div>

<section className={[ `${inter.className}`, ' absolute flex  w-[1102px] h-[402px] top-[1235px] left-[169px] leading-[32px] text-[#878787] text-[20px]']}>
Lorem ipsum dolor sit amet consectetur. Sed enim in at in at non mi. Morbi id facilisi ac tellus sagittis eget bibendum<br/> ultrices. Aenean duis in lectus morbi congue congue tortor et. Id vitae ornare nulla bibendum maecenas quam eget.<br/> Ultrices lectus ipsum sed felis nibh. Convallis viverra sit massa suspendisse vitae eu. Enim et velit hendrerit sodales <br/>auctor sed blandit pellentesque pharetra. Ornare etiam aliquet hendrerit laoreet integer gravida neque. Ac senectus<br/> amet ut blandit neque adipiscing amet.<br/>
Laoreet dui volutpat odio consectetur. Turpis non eu vel praesent velit dignissim ac neque molestie. Et nunc bibendum.
</section>

<section className='absolute flex top-[1558px] left[48px] w-[1345px] h-[645px]'>
<Image src={mic} alt='mic' className=' relative left-[28px] w-[536px] h-[390px]'/>
<div className=' absolute left-[728px] w-[577px] h-[510px] gap-[18px]'>
<div className={[`${inter.className}`, " text-500 text-[36px] leading-[43.57px]"]}>
We are charting a new<br/> 
course in the history of Africa<br/>
and <span className='text-[#f9bb3a]'>redefining Tech</span> as you<br/>
know it
</div>
<div className='w-[577px] h-[316px] gap-[47px]'>
<div className='w-[577px] h-[113px] leading-[24px] mb-[47px]'>Lorem ipsum dolor sit amet consectetur. Quis aenean adipiscing semper<br/> libero egestas ipsum. Nunc nisl ac viverra non. Mattis mauris sed magna<br/> amet suspendisse nam blandit. Amet interdum maecenas risus orci in.<br/> Bibendum mollis posuere egestas bibendum turpis nunc porttitor. Proin eget<br/> sed phasellus duis nunc at nunc ultricies</div>

<form color=' w-[371px] h-[156px] gap-[24px] '>
<div className=' w-[107px] h-[24px]'>Email Address</div>
<input  className=' w-[371px] h-[44px]   border-[1px] rounded-[4px]  border-[#BOBOBO] ' placeholder=' Enter Email Address'/>

</form>
<button className='w-[149px] h-[52px] rounded-[4px] pt-[10px] pb-[10px] pr-[32px] pl-[32px] gap-[10px] border-[1px]  bg-[#043afb] text-[#fff] relative left-[35px] top-[20px] '>Contact Us</button>
</div>
</div>
</section>
<footer className=' absolute w-[1440px] h-[164px] top-[2331px] bg-[#020887]'>
<Image src={Icon} alt='icon' className=' relative top-[40px] w-[195px] h-[50px] text-[#fff] left-[622px]'/>
<p className='relative  w-[235px] h-[32px] top-[74px] left-[602px] text-[#fff]'>Copyright Proskuneo Inc. 2023</p>
</footer>
  
    </section>

    
  )
}

export default About