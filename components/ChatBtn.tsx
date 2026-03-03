import { MessageCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function () {
  return (

      <Link
  href="https://wa.me/923165575485?text=Hi%20I%20want%20to%20discuss%20a%20project"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 z-100 right-5 bg-neutral-800 text-neutral-200 px-4 py-3 rounded-full shadow-lg flex items-center gap-2 text-xs"
>
<MessageCircle className='text-green-500'/>

<span className='hidden lg:flex'>
  Chat on WhatsApp
</span>

</Link>

  )
}
