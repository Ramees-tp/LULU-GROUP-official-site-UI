import React from 'react'
import bg1 from '../assets/img/mall.webp'
import bg2 from '../assets/img/bg2.jpg'
import bg3 from '../assets/img/bg3.jpg'
import bg4 from '../assets/img/bg4.jpg'
import bg5 from '../assets/img/bg5.jpg'

function Content3() {
  return (
    <div>
      <div className='mt-20'>
        <div className='px-20 bg-[#EAF0F6]'>
            <div className='flex justify-between pb-16 py-20'>
            <h1 className='text-2xl font-medium'>News & Events</h1>
            <button className='text-gray-500'>View All</button>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 gap-8'>
              <div className='col-span-2 relative' >
                <div className='flex flex-col justify-end'>
                    <img src={bg1} alt="" />
                   <div className='absolute p-6  text-white space-y-2 bg-gray-900'>
                   <h1 className='font-bold text-xl'>LuLu Group Strengthens Dubai Presence With Grand Opening of Hyperrmarket in the iconic Dubai Mall</h1>
                   <div className='flex justify-between '><p>09-10-2023</p><p>news</p></div>
                   </div>
                </div>
              </div>
              <div className='bg-white'>
                <img className='h-[50%]  w-[100%]' src={bg2} alt=""/>
                <div className='p-5 space-y-5 '>
                <div className='flex justify-between text-gray-400'><p>09-10-2023</p><p>news</p></div>
                 <h1 className=' text-md font-medium text-zinc-600'>LuLu Group Strengthens Dubai Presence With Grand Opening of Hyperrmarket in the iconic Dubai Mall</h1>
                </div>
              </div>
              <div className='bg-white'>
                <img className='h-[50%] w-[100%]' src={bg3} alt=""/>
                <div className='p-5 space-y-5 '>
                <div className='flex justify-between text-gray-400'><p>09-10-2023</p><p>news</p></div>
                 <h1 className=' text-md font-medium text-zinc-600'>LuLu Group Strengthens Dubai Presence With Grand Opening of Hyperrmarket in the iconic Dubai Mall</h1>
                </div>
              </div>
              <div className='bg-white'>
                <img className='h-[50%]  w-[100%]' src={bg4} alt=""/>
                <div className='p-5 space-y-5 '>
                <div className='flex justify-between text-gray-400'><p>09-10-2023</p><p>news</p></div>
                 <h1 className=' text-md font-medium text-zinc-600'>LuLu Group Strengthens Dubai Presence With Grand Opening of Hyperrmarket in the iconic Dubai Mall</h1>
                </div>
              </div>
              <div className='bg-white'>
                <img className='h-[50%]  w-[100%]' src={bg5} alt=""/>
                <div className='p-5 space-y-5 '>
                <div className='flex justify-between text-gray-400'><p>09-10-2023</p><p>news</p></div>
                 <h1 className=' text-md font-medium text-zinc-600'>LuLu Group Strengthens Dubai Presence With Grand Opening of Hyperrmarket in the iconic Dubai Mall</h1>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Content3
