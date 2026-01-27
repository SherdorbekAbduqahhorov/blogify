import React from 'react'
import { Link,NavLink} from 'react-router-dom'
import { RiDashboardLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";


function SaidbarAdmim() {
  return (
    <div className='h-screen flex flex-col justify-between max-w-[25%] min-w-[225px] border-r-2 border-gray-200 '>
        <div className='p-[24px] border-b border-[#c2cad8]'>
            <Link to="/login">
            <img src="./imgss/blogify.svg" alt="" />
            </Link>
            <p className='text-[14px] text-[#6B7280] mt-[4px] mb-[4px]'>Admin Panel</p>
        </div>
        
<div className='px-[16px] mt-[16px]'>
  <NavLink
  to="/admin"
  end  // 🔹 shu muhim!
  className={({ isActive }) =>
    `flex items-center gap-[12px] py-[12px] px-[16px] w-full rounded-[12px] ${
      isActive ? "bg-[#4346EF1A] text-[#4346EF]" : "hover:border hover:text-[#4346EF]"
    }`
  }
>
  <RiDashboardLine className='w-[20px] h-[20px]'/>
  <p>Dashboard</p>
</NavLink>

</div>

<div className='px-[16px] mt-[16px] grow'>
  <NavLink
    to="/admin/creatPost"
    className={({ isActive }) =>
      `flex items-center gap-[12px] py-[12px] px-[16px] w-full rounded-[12px] ${
        isActive ? "bg-[#4346EF1A] text-[#4346EF]" : "hover:border hover:text-[#4346EF]"
      }`
    }
  >
    <FaPlus className='w-[20px] h-[20px]'/>
    <p>Create Post</p>
  </NavLink>
</div>
        <div className='p-[16px] border-t border-gray-300'>
           <Link to={"/login"}><button className='flex items-center gap-[12px] py-[24px] px-[13px] cursor-pointer'><MdOutlineLogout className='w-[20px] h-[20px]'/> Logout</button></Link> 
        </div>
    </div>
  )
}

export default SaidbarAdmim