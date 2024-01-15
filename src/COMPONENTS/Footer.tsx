import React from 'react'
import phone from '../assets/icons/phone-call (1).png'
import message from '../assets/icons/email (1).png'
import career from '../assets/icons/man-in-suit-and-tie.png'
import facebook from '../assets/icons2/facebook-app-symbol.png'
import twitter2 from '../assets/icons2/twitter.png'
import u from '../assets/icons2/youtube.png'
import l from '../assets/icons2/linkedin (1).png'

function Footer() {
  return (
    <div>
      <div className='bg-[#2B2B2F] px-20'>
        <div className='flex justify-between py-10 text-white pr-40 border-b border-zinc-700' >
            <div className='flex items-center gap-3'><img src={phone} alt="" /><p>+97124182000</p></div>
            <div className='flex items-center gap-3'><img src={message} alt="" /><p>headoffice@ae.lulumea.com</p></div>
            <div className='flex items-center gap-3'><img src={career} alt="" /><p>careers</p></div>
        </div>
        <div className='flex p-7'><h1 className='w-[33%] text-xl font-bold text-white'>CONNECT</h1><h1 className='text-xl font-bold text-white'>USEFUL LINKS</h1></div>
        <div className='flex justify-between text-gray-500 py-8'>
            <div className='space-y-10'>
                
                <div className='flex space-x-5'>
                    <img src={facebook} alt="" />
                    <img src={twitter2} alt="" />
                    <img src={u} alt="" />
                    <img src={l} alt="" />
                </div>
            </div>
            <div className='space-y-10'>
                
                <div><p>Home</p>
                <p>Projects</p></div>
            </div>
            <div><p>About LuLu Group</p><p>News</p></div>
            <div><p>Business Sector</p></div>
        </div>
        
      </div>
      <div className='flex justify-between p-8 text-sm text-zinc-700 bg-[#19191C] px-20'>
            <p>Copyright © 2023 Lulu Group International. All Rights Reserved</p>
            <div className='flex gap-5'>
                <p>sitemap</p>
                <p>Privacy Policy & Terms and Condition</p>
                <p>Website by Sysberries</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
