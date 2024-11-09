'use client'
import React from 'react'
import Gallery from '@/components/Gallery'
import mic from '@/public/megaphone illustration 1.png'
import { Inter } from "next/font/google"
import Nav from '@/components/Nav'
const inter = Inter({subsets:['latin'], weight:'400'})
import Image from 'next/image'

import Icon from '@/public/Titheware Logo Full.png'


const Home1 = () => {
  return (
    <div >
     <Nav/>
      <Gallery/>
    <section className=' absolute top-[169px] w-[811px] h-[210px]  left-[48px] flex ' >
    <div>
    
    <div className={"line-height-[70px]" }>
        <h1 className={[`${inter.className}`,  ' text-[54px] leading-[70px] ']}>
        
        Providing global<br/>
solutions for religious <br/>
institutions everywhere <br/>
        </h1>
        
            </div> 
    <p className="w-[660px] h-[103px] text-[#707070] mt-[40px]">Lorem ipsum dolor sit amet consectetur. Malesuada nisl augue posuere<br/> aliquam. Lacinia nulla et quis molestie. Non eleifend ut ac sollicitudin<br/> elementum maecenas dolor magna. Mattis leo luctus.</p>
    <div className=' flex relative mt-[50px]  gap-[32px]'>
        <button className=' w-[150px] h-[52px]rounded-4 bg-[#043AFB] pt-[10px] pb-[10px] pr-[32px] pl-[32px] text-[#fff] gap-[10px]'>Learn More</button>
        <button className='w-[140px] h-[52px] rounded-[4px] pt-[10px] pb-[10px] pr-[32px] pl-[32px] gap-[10px] border-[1px] border-[#043AFB]'>Download</button>
    </div>
    </div>
  
    </section>
    <section className='absolute top-[813px] left-[48px]'>
<p className={[`${inter.className}`, " text-[#878787] text-[20px]"]}>What we seek to achieve</p>
<div className='w-[660px] h-[128px] text-[#1B1B1B] mt-[25px]'>
Lorem ipsum dolor sit amet consectetur. Malesuada nisl <br/> augue posuere aliquam. Lacinia nulla et quis molestie.<br/> Non eleifend ut ac sollicitudin elementum maecenas 
</div>
    </section>

<section className=' absolute top-[1020px] w-[1052px] h-[425px] left-[48px] rounded-[4px] bg-[#eef2ef]'>
<div className={[`${inter.className}`, " ml-[31px] mt-[35px] w-[936px] h-[298px] leading-[32px]"]}>Lorem ipsum dolor sit amet consectetur. Commodo faucibus nisi mauris congue nunc. Sagittis netus risus enim <br/>iaculis ultrices risus ac. In pulvinar ac non sit aliquet praesent. Eget faucibus non dignissim pulvinar in. Aliquet sit eu<br/> sociis metus morbi.<br/>
Amet eu blandit lobortis scelerisque. Id sit maecenas tellus scelerisque nunc massa eu viverra ut. Id eu turpis <br/>pellentesque aenean. Diam laoreet vitae lacinia dolor et elementum turpis ipsum elit. Platea ullamcorper vulputate <br/> ante nisi vel. Non imperdiet nec etiam eget malesuada scelerisque maecenas neque gravida. Morbi sagittis feugiat <br/>ornare aliquam tempor ac.<br/>
Sit interdum fringilla nascetur parturient pretium. Quis tempus nunc gravida aliquam adipiscing ut nunc venenatis.<br/> Interdum varius phasellus aliquam vivamus viverra. Donec lacus habitant purus laoreet. Diam arcu enim enim.</div>
<button className='w-[149px] h-[52px] rounded-[4px] pt-[10px] pb-[10px] pr-[32px] pl-[32px] gap-[10px] border-[1px] border-[#043AFB] bg-[#fff] relative left-[35px]'>Contact us</button>
</section>

<section className='absolute grid grid-cols-2 w-[1345px] h-[646px] top-[1575px] ml-[48px]'>
<div className={[`${inter.className}`]}>
<p className='text-[20px] text-[#878787]'>Fast Safe and Seamless financial transaction <span className=' bg-[#878787]  w-[221px] border-t-2 border-b-2 
border-r-2 border-l-2'></span></p>  
<p className='w-[660px] h-[128px] leading-[40px] mt-[15px] text-[#1B1B1B] text-500' >With the following features, Titheware Malesuada nisl<br/> augue posuere aliquam. Lacinia nulla et quis molestie.<br/> Non eleifend ut ac sollicitudin elementum maecenas </p>
</div>
<div className=' relative w-[560px] h-[306px] bg-[#FFF5E4] rounded-[4px] '>
    <div className=' relative  w-[577px] h-[237px] top-[34px] left-[34px] gap-[16px]'>
<h4 className={[`${inter.className}`, ' text-500 text-[24px] leading-[40px]text-[#1C1C1C]']}>All in One audit friendly report generation</h4>
<p className={[`${inter.className}`, " leading-[24px] text-[14px] w-[500px]"]}>Lorem ipsum dolor sit amet consectetur. Quis aenean adipiscing semper libero egestas ipsum. Nunc nisl ac viverra non. Mattis mauris sed magna amet suspendisse nam blandit. Amet interdum maecenas risus orci in. Bibendum mollis posuere egestas bibendum turpis nunc porttitor. Proin eget sed phasellus duis nunc at nunc ultricies.</p>
<button className='w-[150px] h-[52px] rounded-[4px] pt-[10px] pb-[10px] pr-[32px] pl-[32px] gap-[10px] border-[1px] border-[#525252] bg-[#fff] relative left-[35px]'>Learn More</button>
</div>
</div>
<div className=' relative w-[560px] h-[306px] bg-[#FFF5E4] rounded-[4px] '>
    <div className=' relative  w-[577px] h-[237px] top-[34px] left-[34px] gap-[16px]'>
<h4 className={[`${inter.className}`, ' text-500 text-[24px] leading-[40px]text-[#1C1C1C]']}>Receive payments globally in the sent currency</h4>
<p className={[`${inter.className}`, " leading-[24px] text-[14px] w-[500px]"]}>Lorem ipsum dolor sit amet consectetur. Quis aenean adipiscing semper libero egestas ipsum. Nunc nisl ac viverra non. Mattis mauris sed magna amet suspendisse nam blandit. Amet interdum maecenas risus orci in. Bibendum mollis posuere egestas bibendum turpis nunc porttitor. Proin eget sed phasellus duis nunc at nunc ultricies.</p>
<button className='w-[175px] h-[52px] rounded-[4px] pt-[10px] pb-[10px] pr-[32px] pl-[32px] gap-[10px] border-[1px] border-[#525252] bg-[#fff] relative left-[35px]'>Start Receiving</button>
</div>
</div>
<div className=' relative w-[560px] h-[306px] bg-[#FFF5E4] rounded-[4px] '>
    <div className=' relative  w-[577px] h-[237px] top-[34px] left-[34px] gap-[16px]'>
<h4 className={[`${inter.className}`, ' text-500 text-[24px] leading-[40px]text-[#1C1C1C]']}>Clear and concise information about transactions</h4>
<p className={[`${inter.className}`, " leading-[24px] text-[14px] w-[500px]"]}>Lorem ipsum dolor sit amet consectetur. Quis aenean adipiscing semper libero egestas ipsum. Nunc nisl ac viverra non. Mattis mauris sed magna amet suspendisse nam blandit. Amet interdum maecenas risus orci in. Bibendum mollis posuere egestas bibendum turpis nunc porttitor. Proin eget sed phasellus duis nunc at nunc ultricies.</p>
<button className='w-[124px] h-[52px] rounded-[4px] pt-[10px] pb-[10px] pr-[32px] pl-[32px] gap-[10px] border-[1px] border-[#525252] bg-[#fff] relative left-[35px]'>Sign Up</button>
</div>
</div>
</section>
<section className='absolute flex top-[2285px] left[48px] w-[1345px] h-[645px]'>
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

<form color=' w-[371px] h-[156px] gap-[24px]'>
<div className=' w-[107px] h-[24px]'>Email Address</div>
<input  className=' w-[371px] h-[44px]   border-[1px] rounded-[4px]  border-[#BOBOBO] ' placeholder=' Enter Email Address'/>

</form>
<button className='w-[149px] h-[52px] rounded-[4px] pt-[10px] pb-[10px] pr-[32px] pl-[32px] gap-[10px] border-[1px]  bg-[#043afb] text-[#fff] relative left-[35px] top-[20px] '>Contact Us</button>
</div>
</div>
</section>
<footer className=' absolute w-[1440px] h-[164px] top-[3037px] bg-[#020887]'>
<Image src={Icon} alt='icon' className=' relative top-[40px] w-[195px] h-[50px] text-[#fff] left-[622px]'/>
<p className='relative  w-[235px] h-[32px] top-[74px] left-[602px] text-[#fff]'>Copyright Proskuneo Inc. 2023</p>
</footer>
    </div>
  )
}

export default Home1