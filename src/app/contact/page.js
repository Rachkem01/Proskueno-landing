

import React from 'react'
import Image from 'next/image'
import frame from '@/public/Frame 42.png'
const Contact = () => {
  return (
    <div>
    <Image src={frame} alt='frame' className=' absolute w-[1017px] h-[699px] top-[34px]  left-[212px]'/>
    </div>
  )
}

export default Contact