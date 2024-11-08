'use client'
import React from 'react'
import Image from 'next/image'
import imageI from '../public/Rectangle 1.png'
import image1 from '../public/Rectangle 4.png'
import image2 from '../public/Rectangle 5.png'
import image3 from '../public/Rectangle 6.png'
import image4 from '../public/Rectangle 7.png'
import image5 from '../public/Rectangle 8.png'
import image6 from '../public/Rectangle 11.png'
import image7 from '../public/Rectangle 14.png'
import image8 from '../public/Rectangle 17.png'
import image9 from '../public/Rectangle 20.png'
import image10 from '../public/Rectangle 9.png'
import image11 from '../public/Rectangle 12.png'
import image12 from '../public/Rectangle 15.png'
import image13 from '../public/Rectangle 18.png'
import image14 from '../public/Rectangle 21.png'
import image15 from '../public/Rectangle 10.png'
import image16 from '../public/Rectangle 13.png'
import image17 from '../public/Rectangle 16.png'
import image18 from '../public/Rectangle 19.png'
import image19 from '../public/Rectangle 22.png'

const Gallery = () => {
  return (
    <div className=' absolute grid grid-cols-5 gap-[8px] w-[552px] h-[440px] left-[701px] top-[169px]  '>
    <Image className=" w-[104px] h-[104px]" src={imageI} alt = 'img'/>
    <Image className=" w-[104px] h-[104px]" src={image1} alt = 'img'/>
    <Image className=" w-[104px] h-[104px]" src={image2} alt = 'img'/>
    <Image className=" w-[104px] h-[104px]" src={image3} alt = 'img'/>
    <Image className=" w-[104px] h-[104px]" src={image4} alt = 'img'/>
    <Image className=" w-[104px] h-[104px]" src={image5} alt = 'img'/>
    <Image className=" w-[104px] h-[104px]" src={image6} alt = 'img'/>
    <Image className=" w-[104px] h-[104px]" src={image7} alt = 'img'/>
    <Image className=" w-[104px] h-[104px]" src={image8} alt = 'img'/>
    <Image className=" w-[104px] h-[104px]" src={image9} alt = 'img'/>
    <Image className=" w-[104px] h-[104px]" src={image10} alt = 'img'/>
    <Image className=" w-[104px] h-[104px]" src={image11} alt = 'img'/>
    <Image className=" w-[104px] h-[104px]" src={image12} alt = 'img'/>
    <Image className=" w-[104px] h-[104px]" src={image13} alt = 'img'/>
    <Image className=" w-[104px] h-[104px]" src={image14} alt = 'img'/>
    <Image className=" w-[104px] h-[104px]" src={image15} alt = 'img'/>
    <Image className=" w-[104px] h-[104px]" src={image16} alt = 'img'/>
    <Image className=" w-[104px] h-[104px]" src={image17} alt = 'img'/>
    <Image className=" w-[104px] h-[104px]" src={image18} alt = 'img'/>
    <Image className=" w-[104px] h-[104px]" src={image19} alt = 'img'/>
  
    </div>
  )
}

export default Gallery