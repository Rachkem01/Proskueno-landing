

import React from 'react'
import Nav from '@/components/Nav'
import  Card from '@/components/Card'
import app from '@/public/cloth_Assets/app_store.png'
import Image from 'next/image'
const Home = () => {
    const date = new Date()
    let year = date.getFullYear()
  return (
    <main className=' h-[500px] w-full bg-[#023047]'>
<section>
<Nav/>
<Card/>
    </section>  
<div>
<Image src={app} alt='app' className='relative left-[40%] mt-[200px] md:mt-[40px] lg:mt-[40px]'/>
    </div> 
<section className='bg-[#eee] mt-[30px] pl-[30px] pr-[30px] flex flex-col gap-[20px] lg:flex-row justify-between md:flex-row justify-between'>
<div>
<h1 className='text-[20px]'>Office Locations</h1>
<div>
<div>United Kingdom</div>
<div>Canada</div>
<div>Germany</div>
<div>Nigeria</div>
</div>
</div>
<div>
    <h1 className='text-[20px]'>Contacts</h1>
<div>Mobile: 0000000000</div>
<div>Mail: <a href='@mailto:example.com'>royaltystore@gmail.com</a></div>
<div>LinkedIn:royaltystore@linkedin</div>
</div>

</section>
<div className='text-[20px] pl-[50px] bg-[#eee]'>&copy; {year}</div>
    </main>
  )
}

export default Home