import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { MdKeyboardBackspace } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";
import RelatedProducts from './RelatedProducts'


function DetailPage() {
    let { id } = useParams()
    let [detail,getDetail]=useState(null)
    console.log(detail);
    
    useEffect(()=>{
        async function getDetails() {
            try {
                let res= await fetch(`https://alijonov0901.pythonanywhere.com/api/v1/articles/${id}`)
                if(!res.ok){
                    throw new Error('api dam muamo bor')
                }
                let data= await res.json()
                getDetail(data)
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }

        getDetails()
    },[id])
  return (
    <div>
        <Navbar/><br /><br /><br /><br />
      
          <Link
    to={'/Postspage'}
    className='newcontainer flex items-center  gap-[5px] py-[12px] px-[24px]'
  >
    <MdKeyboardBackspace /> Back to Posts
  </Link><br /><br />
<section className='newcontainer w-full flex flex-col items-center justify-center'>

  <div className='w-full max-w-[832px] flex flex-col '>
    <p className='py-[3px] px-[10px] bg-[#4346EF] text-white w-fit rounded-4xl'>
      {detail?.category?.name}
    </p>
    <h1 className='hzzzz text-[60px] font-bold'>
      {detail?.title}
    </h1>
    <div className='flex items-center gap-[16px]'>
      <p className='flex items-center gap-[8px] text-[#6B7280]'>
        <LuUserRound /> {detail?.author?.first_name}
      </p>
      <p className='flex items-center gap-[8px] text-[#6B7280]'>
        <MdOutlineDateRange /> {detail?.updated_at?.slice(0,10)}
      </p>
    </div>
    <img src={detail?.image} alt={detail?.title} className='mt-[16px] mb-[16PX] rounded-b-[12PX]' />
    <p>{detail?.content}
    </p>
  </div>    
</section>
<section className='newcontainer '>
    
    <RelatedProducts/>
</section>

        <Footer/>
    </div>
  )
}

export default DetailPage