import { useState } from "react"
import React from 'react'
import { useRef } from "react"
import { Link } from "react-router-dom"
import { MdKeyboardBackspace } from "react-icons/md";

function LoginPage() {
  let emailRef=useRef("")
  let passwordRef=useRef("")

  async function hendleSubmit(e){
    e.preventDefault()
    console.log('sumit boldi');
    console.log({
      email:emailRef.current.value,
      password:passwordRef.current.value
    });
    
    try {
      let res=await fetch('https://alijonov0901.pythonanywhere.com/auth/login/',{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          email:emailRef.current.value,
      password:passwordRef.current.value
        })
      })
      if(!res.ok){
        throw new Error('api da muamo')
      }
      let data=await res.json()
      console.log(data);
      
    } catch (error) {
      console.log(error);
      
    }


  }
  return (
    <div>
        <div className=" divcsntr flex justify-around items-center ">
          <div className="w-full max-w-[960px] flex flex-col justify-center items-center">
            <form onSubmit={hendleSubmit} className='flex flex-col gap-5px p-[20px]'>
              <img className="w-[100px] h-[28px] mb-[32px]"  src="./imgss/blogify.svg" alt="" />
              <Link
                  to={'/PostsPage'}
                  className="flex items-center py-[10px] mb-[32px]"
                >
                  <MdKeyboardBackspace /> Back to Posts
                </Link>
              <div className="divBorder">
                <h2 className="text-[30px] font-bold">Welcome Back</h2>
            <p className="text-[#6B7280] mb-[24px]">Enter your credentials to access your account</p>
                <label className='flex flex-col'>
                <span>Email</span>
                <input 
                className='imputlogin' 
                type="email" 
                name='email' 
                placeholder='email' 
                ref={emailRef}
                />
              </label>
              <label className='flex flex-col'>
                <span>Password</span>
                <input
                className="imputlogin"
                type="password"
                name='password' 
                placeholder='******'
                ref={passwordRef}
                />
              </label>
              <button className="buttonlogin">Login</button>
              <p className="ploginsignin text-[#6B7280] flex justify-center items-center">Don't have an account?  <a className="text-[#4346EF]" href="#">Sign up</a></p>
              </div>
            </form>
          </div>


          <div className="bg-[#F1F1FE] py-[80px] px-[20px] w-full flex flex-col items-center justify-center text-center">
            <img className=" imglogin shadow-[box-shadow: 0px 25px 50px -12px #00000040;]" src="./imgss/loginimg.svg" alt="" />
            <h2 className="text-[30px] font-bold mb-[16px]">Start Your Journey</h2>
            <p className="text-[#6B7280]">Join thousands of creators sharing their stories on Blogify</p>
          </div>
        </div>
    </div>
  )
}

export default LoginPage