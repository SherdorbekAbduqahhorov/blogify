import React from 'react'

function WhyBlogify() {
  return (
    <div className='whydiv1 newcontainer'>
        <div className='divh1p'> 
            <h2 className='text-[36px] font-bold leading-[44px] mb-[10px] mt-[128px]'>Why Choose Blogify?</h2>
            <p className='text-[18px] text-[#6B7280] mb-[64px]'>Built with modern technologies and best practices to provide the best blogging
experience.</p>
        </div>
        <div className='flex gap-[32px] flex-wrap justify-center mb-[128px]'>
            <div className='divqchn'>
                <img className='w-[48px] h-[48px]' src="./imgss/flesh.svg" alt="" />
                <h3 className='text-[20px] font-[600]'>Fast</h3>
                <p className='text-[#6B7280] w-full max-w-[307px]'>Lightning-fast performance with modern
web technologies for the best reading
experience.</p>
            </div>
            <div className='divqchn'>
                <img className='w-[48px] h-[48px]' src="./imgss/qalqon.svg" alt="" />
                <h3 className='text-[20px] font-[600]'>Secure</h3>
                <p className='text-[#6B7280] w-full max-w-[307px]'>Your data is protected with industry-
standard security practices and
encryption.</p>
            </div>
            <div className='divqchn'>
                <img className='w-[48px] h-[48px]' src="./imgss/nastroyka.svg" alt="" />
                <h3 className='text-[20px] font-[600]'>Easy to Manage</h3>
                <p className='text-[#6B7280] w-full max-w-[307px]'>Intuitive admin dashboard makes content
management effortless and enjoyable.</p>
            </div>
        </div>
    </div>
  )
}

export default WhyBlogify