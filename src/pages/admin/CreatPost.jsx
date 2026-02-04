import React, {useRef} from 'react'

function CreatPost() {
let token = JSON.parse(localStorage.getItem("token"))
  let titleRef=useRef()
  let contentRef=useRef()
  let categoryRef=useRef()
  let imgRef=useRef()
  const hendleSubmit=async (e)=>{
   e.preventDefault()
    let formData=new FormData();
     formData.append('title',titleRef.current.value,) 
      formData.append('content',contentRef.current.value,) 
      formData.append('category',categoryRef.current.value,) 
     formData.append('image',imgRef.current.files[0],) 
   console.log(formData);
   try {
    let res=await fetch("https://alijonov0901.pythonanywhere.com/api/v1/articles/",{
      method:'POST',
      headers: {
        Authorization:`Bearer ${token.access}` 
      },
      body:formData
    })
    if(!res.ok){
      throw new Error('yuborishda hatolik')
    }
    let data=await res.json()
    console.log(data);
    
     } catch (error) {
    console.log(error);
    
   }
   
  }
  return (
    <form onSubmit={hendleSubmit} className='divCreat1'>
      <div className='mb-[32px] mt-[32px]'>
        <h1 className='text-[30px] font-bold'>Create New Post</h1>
        <p className=' text-[#6B7280]'>Fill in the details to create a new blog post</p>
      </div>
      <div className='flex gap-[24px]'>
        <div className='flex flex-col p-[25px] gap-[16px] w-full min-w-[590px] border-2 border-[#E5E7EB] rounded-[12px]'>
          <label>
            <p className='text-[#0F1729]'>Post Title</p>
            <input ref={titleRef} className='inputceat' type="text" placeholder='Enter post title' />
          </label>
          <label>
            <p className='mb-[12px]'>Content</p>
            <textarea ref={contentRef} className='textAreaCreat  focus:outline-none focus:border-black' placeholder='Write your post content here..'></textarea>
          </label>
        </div>
        <div className='flex flex-col gap-[24px]'>
          <div className='w-[283px] h-[174px] border-2 border-[#E5E7EB] rounded-[12px] p-[24px]'>
          <h1 className='text-[30px] font-bold'>Post Settings</h1>
          <label>
            <p className='mb-[12px]'>Category</p>
            <select ref={categoryRef} className="select">
  <option value="1">Technology</option>
  <option value="2">Productivity</option>
  <option value="3">Design</option>
  <option value="4">Business</option>
  <option value="5">Lifestyle</option>
</select>
          </label>
        </div>
        <div className='w-[283px] h-[304px] border-2 border-[#E5E7EB] rounded-[12px] p-[24px]'>
          <h1 className='text-[30px] font-bold mb-[16px]'>Featured Image</h1>
            <label className="flex flex-col items-center justify-center w-[232px] h-[192px]  border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer bg-white text-gray-700 text-center">
              <img className='w-[40px] h-[40px]' src="/imgss/send.svg" alt="" />
             <span>Click to upload or drag and drop</span>
             <p>PNG, JPG or WEBP</p>
             <input ref={imgRef} type="file" accept="image/*" className="hidden" />
            </label>

        </div>
        <div className='flex gap-[12px]'>
          <button className='crearbutn'>Publish Post</button>
          <button className='creatbutwhite'>Cancel</button>
        </div>
        </div>
      </div>
    </form>
  )
}

export default CreatPost