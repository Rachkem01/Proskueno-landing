
'use client'

import woman1 from '@/public/cloth_Assets/Woman6.png'
import woman2 from '@/public/cloth_Assets/Woman9.png'
import woman3 from '@/public/cloth_Assets/Woman3.png'
import woman4 from '@/public/cloth_Assets/Woman4.png'
import woman5 from '@/public/cloth_Assets/Women5.png'
import woman6 from '@/public/cloth_Assets/Woman8.png'
import woman7 from '@/public/cloth_Assets/Woman1.png'
import woman8 from '@/public/cloth_Assets/Woman7.png'
import woman9 from '@/public/cloth_Assets/Woman2.png'

import Nav from "@/components/Nav"
import Image from 'next/image'

import { useState } from 'react'
const Women= () => {
  const [products] = useState([
    {
      id:'1',
      img: woman1,
      desc:'Short- Shirt',
      price:'8,0000'
    },
    {
      id:'9',
      img: woman9,
      desc:'Flay-Gown',
      price:'16,000'
    },
    
    {
      id:'3',
      img: woman3,
      desc:'Black Sport Wear',
      price:'20,000'
    },
    {
      id:'4',
      img: woman4,
      desc:'Top with Short',
      price:'15,000'
    },
    {
      id:'5',
      img: woman5,
      desc:'Yellow Gown',
      price:'8,500'
    },
    {
      id:'6',
      img: woman6,
      desc:'Satin Gown',
      price:'25,000'
    } ,
    {
      id:'7',
      img: woman7,
      desc:'Pink Jacket',
      price:'15,000'
    },
    {
      id:'8',
      img: woman8,
      desc:'Trouser-Gown',
      price:'25,000'
    },
    
    {
      id:'2',
      img: woman2,
      desc:'White Gown',
      price:'10,000'
    },
      ])
      return (
       <main >
    <Nav/>
    <div className="flex flex-wrap gap-[20px] mt-[30px] ml-[100px] " >
      {products.map((product)=>(
      <div key={product.id} className="w-[350px] h-[500px] bg-[#fff] shadow-md shadow-black text-center gap-[10px]">
    <Image src={product.img} className="w-[350px] h-[350px]" alt='woman'></Image>
    <p className="mt-[10px] text-[20px]">{product.desc}</p>
    <p className="text-[#023047]">#{product.price}</p>
    <button className="w-[100px] h-[40px] bg-red-600 text-[#fff] rounded mt-[10px] hover:text-[#000]">Purchase</button>
      </div>
      ))}
    </div>
       </main>
      )
}

export default Women
