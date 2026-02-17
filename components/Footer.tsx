import { NavLinks } from '@/constants/constants'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className='pt-5  pl-3 pr-3 md:p-5 md:pb-0 border-t border-neutral-700 mt-24 h-max lg:h-[20vh] flex flex-col md:flex-row items-center justify-between '>
      <Link className=" text-2xl md:text-4xl text-neutral-200" href="/" >
      Weblify.
      </Link>

    
       <div className='text-xs  text-neutral-400  text-center leading-5 pt-5 tracking-wider'>
           ©{year} Weblify.All rights reserved
       </div>
         
    </div>
  )
}
