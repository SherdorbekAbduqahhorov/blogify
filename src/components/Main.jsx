import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <main className=''>
        <section className='sectionbg'>
            <div className=' divimg newcontainer flex justify-between '>
            <div className='divh1p py-[138px] mt-[30px]'>
                <h1 className=' text-[60px] font-[700] leading-[64px]'>Create, Read,<br /><span className='text-[#8524E5]'>Inspire.</span></h1>
                <p className='text-[20px] text-[#6B7280] w-full max-w-[480px] mb-[32px] mt-[24px]'>Discover stories written by amazing people. Share
your knowledge and inspire others with your unique
perspective.</p>
                <div className='flex gap-[20px]'>
                    <Link to={'/PostsPage'}><button className='butExplore'>Explore Posts ➜</button></Link>
                    <button className='butGet'>Get Started</button>
                </div>
            </div>
            <img className='imgbig mt-[60px]' src="./imgss/img1.png" alt="" />
        </div>
        </section>
    </main>
  )
}

export default Main