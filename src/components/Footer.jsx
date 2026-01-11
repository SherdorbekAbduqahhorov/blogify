import React from 'react'
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer>
        <div className='divchiziq'></div>
        <div className='divfooter1 newcontainer '>
            <div className='w-full max-w-[400px] mb-[30px]'>
                <img src="./imgss/blogify.svg" alt="" />
                <p className='text-[#6B7280] mt-[16px]'>Create, read, and inspire. Discover amazing stories
written by talented creators from around the world.</p>
            </div>
            <div className='m-auto'>
                <h3 className='text-[24px] font-[600]'>Quick Links</h3>
                <Link className='alarhah text-[#6B7280]' to="/">Home</Link><br />
                <Link className='alarhah text-[#6B7280]' to="/PostsPage">Posts</Link><br />
                <Link className='alarhah text-[#6B7280]' to="/LoginPage">Login</Link><br />
            </div>
            <div className='divavto ml-[15px]'>
                <h3 className='text-[24px] font-[600]'>Connect</h3>
                <div className='flex gap-[20px] mt-[10px]'>
                    <FiTwitter/>
                    <FiGithub/>
                    <LuLinkedin/>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer