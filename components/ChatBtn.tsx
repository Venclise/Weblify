import { MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function () {
  return (

      <Link
  href="https://wa.me/923165575485?text=Hi%20I%20want%20to%20discuss%20a%20project"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 z-100 right-5 bg-neutral-100 text-green-500 px-4 py-3 rounded-full shadow-lg flex items-center gap-2 text-xs"
>

<Image 
src="/whatsapp.svg"
alt="whatsapp icon"
height={35}
width={35}
className='text-white '
/>

<span className='hidden lg:flex'>
  Chat on WhatsApp
</span>

</Link>

  )
}
