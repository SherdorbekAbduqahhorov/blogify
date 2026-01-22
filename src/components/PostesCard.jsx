import React from 'react'
import { FiCalendar } from "react-icons/fi";
import { Link } from 'react-router-dom';

function PostesCard({post}) {
  let {updated_at,id, title,content,image,category}=post
  return (
    <div className='divLatesbekent'>
      <img src={image} alt="" />
      <p className='categort'>{category.name}</p>
      <div className='divpedd'>
      <p className='plates1 flex '><FiCalendar/>{updated_at.slice(0, 10)}</p>
      <h1 className='text-[20px] font-bold mb-[4px]'>{title}</h1>
      <p className=' text-[#6B7280] mb-[16px]'>{content}</p>
      <Link className='text-[#4346EF] pt-[2px] items-center mt-[24px] mb-[24px]' to={`/DetailPage/${id}`}>Read more ➜</Link>
      </div>
    </div>
  )
}
export default PostesCard