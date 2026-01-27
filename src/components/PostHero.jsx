import React,{useState} from 'react'
import { IoMdSearch } from "react-icons/io";

function PostHero(inputValue,setInputValue) {
  console.log(inputValue);
  
  return (
    <section className='srctionExplore mt-[25px]'>
          <div className='newcontainer srctionExplore'>
          <h1 className='mt-[96px] text-[60px] font-bold'>Explore Our Posts</h1>
          <p className='text-[#6B7280] text-[20px]'>Discover amazing content from talented writers across various topics </p>
          <div className='inputDiv'>
            <IoMdSearch className='h-[30px] w-[30px] text-[#838b9c]'/>
            <input
            onInput={(e)=> setInputValue(e.target.value)}
            className='text-[#626770] w-full' type="text "placeholder='Search posts' /></div>
          </div>
    </section>
  )
}

export default PostHero