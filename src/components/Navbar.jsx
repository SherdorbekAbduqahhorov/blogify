import React from 'react'
import { Link } from 'react-router-dom';

import { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { HiOutlineXMark } from "react-icons/hi2";

    function Navbar() {
    const [open,setOpen] =useState(false)
  return (
    <header>
        <nav className='navbar py-[18px] w-full bg-[white] fixed top-0 right-0 left-0 z-50 '>
            <div className=' newcontainer flex justify-between text-center '>
                <img src="../imgss/blogify.svg" alt="" />
                <div className='divblogify'>
                    <Link className='home' to="/">Home</Link>
                    <Link className='poste' to="/PostsPage">Posts</Link>
                    <Link to={'/login'}><button className='buttonnav'>Login</button></Link>
                    
                </div>
                <div onClick={()=>{setOpen(!open)}} className='md:hidden'>
                    {open ? <HiOutlineXMark className='w-[30px] h-[30px] hover:[transform:scale(1.3)]'/>:<FaBars className="w-[30px] h-[30px] text-[#8524E5] cursor-pointer hover:[transform:scale(1.2)]" /> }
                </div>
            </div>
            {open && <div className='divclosnav newcontainer'>
                <Link className='home ' to="/">Home</Link>
                <Link className='poste' to="/PostsPage">Posts</Link>
             <Link to={'/login'}><button className='but1'>Login</button></Link>
            </div>}
        </nav>
    </header>
  )
}

export default Navbar