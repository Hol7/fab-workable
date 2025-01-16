import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

function Navbar() {
  return (
    <div className='bg-white z-0 top-0 left-0 w-full fixed text-[16px] font-bold text-text h-[84px] flex'>
        <div className='w-full  text-[16px] font-black flex  justify-center items-center gap-14'>
            <div className='hover:cursor-pointer'>
            <Image
                className="dark:invert"
                src="/logoworktable.png"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
                />
            </div>
           
            <span className='hover:cursor-pointer' >
                Product
            </span>
            <span className='hover:cursor-pointer'>
                Pricing
            </span>

          

        </div>
        <div className='w-full full flex font-black  bg-white justify-center items-center gap-10'>
            <span className='hover:cursor-pointer'>
                Log in
            </span>
            <div className='flex gap-3' >
                <div className=' bg-gradient-to-r from-bubble-gum  to-bermuda    rounded-lg'>
                <Button className='border-2 border-text bg-white px-10 py-6 font-black rounded-lg text-text   hover:bg-white duration-300 transform  transition ease-in-out  hover:-translate-y-2 hover:scale-105'>Request a demo</Button>
                </div>

                <div className='bg-gradient-to-r from-bubble-gum  to-bermuda   rounded-lg'>
                <Button className='border-2 border-text bg-text px-10 font-black py-6 rounded-lg text-white   hover:bg-text duration-300 transform  transition ease-in-out  hover:-translate-y-2 hover:scale-105'>Start a free trial</Button>
                </div>
            
         
            </div>

        </div>
        
        </div>
  )
}

export default Navbar