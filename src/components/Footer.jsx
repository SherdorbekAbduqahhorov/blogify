import React from 'react'
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className='mt-[108px]'>
        <div className='divchiziq'></div>
        <div className='divfooter1 newcontainer '>
            <div className='w-full max-w-[400px]'>
                <img src="./imgss/blogify.svg" alt="" />
                <p className='text-[#6B7280]'>Create, read, and inspire. Discover amazing stories
written by talented creators from around the world.</p>
            </div>
            <div className=''>
                <h3 className='text-[24px] font-[600]'>Quick Links</h3>
                <Link className='alarhah text-[#6B7280]' to="/">Home</Link><br />
                <Link className='alarhah text-[#6B7280]' to="/PostsPage">Posts</Link><br />
                <Link className='alarhah text-[#6B7280]' to="/LoginPage">Login</Link><br />
            </div>
            <div className='divavto'>
                <h3 className='text-[24px] font-[600]'>Connect</h3>
                <div className='flex gap-[20px] mt-[10px]'>
                    <FiTwitter/>
                    <FiGithub/>
                    <LuLinkedin/>
                </div>
            </div>
        </div>
        <p className='text-[#6B7280] flex justify-center align-center mb-[40px]'>© 2026 Blogify. All rights reserved.</p>
    </footer>
  )
}

export default Footer