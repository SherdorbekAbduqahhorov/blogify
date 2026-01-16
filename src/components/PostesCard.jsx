import React from 'react'
import { FiCalendar } from "react-icons/fi";

function PostesCard({post}) {
  let {updated_at,id, title,content,image}=post
  return (
    <div className='divLatesbekent'>
      <img src={image} alt="" />
      <div className='divpedd'>
      <p className='plates1 flex '><FiCalendar/>{updated_at.slice(0, 10)}</p>
      <h1 className='text-[20px] font-bold mb-[4px]'>{title}</h1>
      <p className=' text-[#6B7280] mb-[16px]'>{content}</p>
      <a className='text-[#4346EF] pt-[2px]' href="">Read more ➜</a>
      </div>
    </div>
  )
}
export default PostesCard