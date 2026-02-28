import CountUp from '@/components/CountUp'
import React from 'react'

export default function Clients() {
  return (
    <div className='h-[70vh] p-5 lg:p-10 flex items-center justify-around lg:flex-row flex-col gap-8 '>
        <div className='flex flex-col gap-4 items-center justify-center'>
            <div className='flex'>
      <CountUp
  from={0}
  to={50}
  separator=","
  direction="up"
  duration={3}
  className="count-up-text text-white font-semibold text-6xl lg:text-8xl"
  />
  <span className='text-white font-bold    text-4xl lg:text-8xl'>+ </span>
  </div>
  <span className='text-gray-300 text-xs lg:text-sm '>Completed Projects</span>
  </div>
                 <div className='flex flex-col gap-4 items-center justify-center'>

            <div className='flex'>
      <CountUp
  from={0}
  to={30}
  separator=","
  direction="up"
  duration={3}
  className="count-up-text text-white font-semibold text-6xl lg:text-8xl"
  />
  <span className='text-white font-bold    text-4xl lg:text-8xl'>+ </span>
  </div>
  <span className='text-gray-300 text-xs lg:text-sm'>Happy clients</span>
  </div>
              <div className='flex flex-col gap-4 items-center justify-center'>

            <div className='flex'>
      <CountUp
  from={0}
  to={60}
  separator=","
  direction="up"
  duration={3}
  className="count-up-text text-white font-semibold text-6xl lg:text-8xl"
  />
  <span className='text-white font-bold    text-4xl lg:text-8xl'>%</span>
  </div>
  <span className='text-gray-300 text-xs lg:text-sm max-w-xs'>Clients who came to us by referrals

</span>
  </div>

    </div>
  )
}
