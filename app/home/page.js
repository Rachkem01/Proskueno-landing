

import React from 'react'

import Gallery from '@/components/Gallery'
import {Roboto} from 'next/font/google'
import { Inter } from "next/font/google"
import Nav from '@/components/Nav'
const inter = Inter({subsets:['latin'], weight:'400'})

const nova = Roboto({subsets:['latin'], weight:'400'})
const Home = () => {
  return (
   
    <div>
       <Nav/>
      <Gallery/>
    <section className=' absolute top-[169px] w-[811px] h-[499px]  left-[48px] flex ' >
    <div>
    
    <div className={[`${nova.className}`,"line-height-[70px]" ]}>
        <div className='text-[54px] '>
        
          Secure Giving Simplified:<br/>Transforming the world <br/> of Donations with our<br/> Fintech Guardian.
        </div>
        
            </div> 
    <p className="w-[660px] h-[103px] text-[#707070] mt-[40px]">Lorem ipsum dolor sit amet consectetur. Malesuada nisl augue posuere<br/> aliquam. Lacinia nulla et quis molestie. Non eleifend ut ac sollicitudin<br/> elementum maecenas dolor magna. Mattis leo luctus.</p>
    <div className=' flex relative mt-[50px]  gap-[32px]'>
        <button className=' w-[138px] h-[52px]rounded-4 bg-[#043AFB] pt-[10px] pb-[10px] pr-[32px] pl-[32px] text-[#fff] gap-[10px]'>Try Demo</button>
        <button className='w-[140px] h-[52px] rounded-[4px] pt-[10px] pb-[10px] pr-[32px] pl-[32px] gap-[10px] border-[1px] border-[#043AFB]'>Download</button>
    </div>
    </div>
  
    </section>
   
   <section className='relative top-[865px] left-[48px]'>
   <div className={inter.className}>
    <h1 className='text-[24px] mb-[20px] ml-[54px]'>Our Mission</h1>
    <p  className='w-[389px] h-[168px]'>Lorem ipsum dolor sit amet consectetur. Etiam viverra vitae cursus quisque. Nibh vulputate cursus lacus est a. Faucibus imperdiet pharetra cursus pretium nibh egestas integer morbi. Aliquet adipiscing mauris sociis mi. Et at metus volutpat.</p>
   </div>
   </section>
    </div>
  )
}

export default Home