
'use client'

import { useState } from "react"
import man1 from '@/public/cloth_Assets/Man6.png'
import man2 from '@/public/cloth_Assets/Man8.png'
import man3 from '@/public/cloth_Assets/Men1.png'
import man4 from '@/public/cloth_Assets/Men11.png'
import man5 from '@/public/cloth_Assets/Men2.png'
import man6 from '@/public/cloth_Assets/Men5.png'
import man7 from '@/public/cloth_Assets/Man10.png'
import man8 from '@/public/cloth_Assets/Men12.png'
import man9 from '@/public/cloth_Assets/Man13.png'
import man10 from '@/public/cloth_Assets/Man15.png'
import man11 from '@/public/cloth_Assets/Man9.png'
import man12 from '@/public/cloth_Assets/Man7.png'
import man13 from '@/public/cloth_Assets/Men3.png'
import Nav from "@/components/Nav"
import Image from 'next/image'

const Men = () => {
  const [products] = useState([
{
  id:'1',
  img: man10,
  desc:'Wine Shirt',
  price:'8,5000'
},
{
  id:'6',
  img: man6,
  desc:'Turtle-Neck Shirt',
  price:'10,000'
},
{
  id:'2',
  img: man2,
  desc:'Long Black-Jacket',
  price:'20,000'
},
{
  id:'8',
  img: man8,
  desc:'Green Jacket',
  price:'10,000'
},
{
  id:'5',
  img: man5,
  desc:'Long Trouser',
  price:'7,500'
},
{
  id:'11',
  img: man11,
  desc:'Yellow Shirt',
  price:'6,000'
} ,
{
  id:'12',
  img: man12,
  desc:'Blue Jacket',
  price:'15,000'
},
{
  id:'7',
  img: man7,
  desc:'Black Top',
  price:'7,000'
},
{
  id:'9',
  img: man13,
  desc:'White Vest',
  price:'6,000'
},

  ])
  return (
   <main >
<Nav/>
<div className="flex flex-wrap gap-[20px] mt-[30px] ml-[100px] " >
  {products.map((product)=>(
  <div key={product.id} className="w-[350px] h-[500px] bg-[#fff] shadow-md shadow-black text-center gap-[10px]">
<Image src={product.img} className="w-[350px] h-[350px]" alt="man"></Image>
<p className="mt-[10px] text-[20px]">{product.desc}</p>
<p className="text-[#023047]">#{product.price}</p>
<button className="w-[100px] h-[40px] bg-red-600 text-[#fff] rounded mt-[10px] hover:text-[#000]">Purchase</button>
  </div>
  ))}
</div>
   </main>
  )
}

export default Men