import React from 'react'
import lulu from '../assets/img/Lulu-Group.webp'
import search from '../assets/img/search.png'
import face from '../assets/icons/facebook-app-symbol.png'
import x from '../assets/icons/twitter.png'
import you from '../assets/icons/youtube.png'
import link from '../assets/icons/linkedin-big-logo.png'

function Header() {
  return (
    <div>
      <div className='bg-[#FFFFFF] border-b-4 border-b-[#C4922F] flex justify-between items-center px-20'>
        <div>
            <img className='w-52' src={lulu} alt="" />
        </div>
       <div className='flex flex-col space-y-4'>
        <div className='flex items-center justify-end gap-8'>
            <img src={face} alt="" />
            <img src={x} alt="" />
            <img src={you} alt="" />
            <img src={link} alt="" />
            <h1 className='text-gray-500'>العربي</h1>
        </div>
        <div className='flex gap-10 text-xl'>
            <a className='text-[#B88B33]' href="">Home</a>
            <a href="">Corprate</a>
            <a href="">Bussiness Sector</a>
            <a href="">Media Center</a>
            <a href="">Contact us</a>
            <img src={search} alt="" />
        </div>
       </div>
      </div>
    </div>
  )
}

export default Header
