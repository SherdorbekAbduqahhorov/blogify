import React,{useState,useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import PostHero from '../../components/PostHero'
import { data } from 'react-router-dom'
import { toast } from 'react-toastify'
import PostesCard from '../../components/PostesCard'
import { v4 as uuidv4 } from 'uuid';

function PostsPage() {
  const [posts,setPosts]=useState([])
  let [inputValue, setInputValue]=useState("")
  console.log(inputValue);
  
  useEffect(()=>{

    async function getPosts() {
      try {
        let res=await fetch('https://alijonov0901.pythonanywhere.com/api/v1/articles/')
        if (!res.ok){
          throw new Error('apida muamo bor')
        }

        let data= await res.json()
        console.log(data);
        setPosts(data)
        toast('apida muamo bor')
      } catch (error) {
        toast(error.massage)
        console.log(error);
      }
    }
getPosts()

  },[])
  return (
    <div>
      <Navbar inputValue={inputValue} setInputValue={setInputValue}/><br /><br />
      <div>
        <PostHero/>
        <section className='mt-[32px]'>
          <div className='newcontainer flex flex-wrap justify-center align-center gap-[38px]'>
            {posts && posts.map((item)=>{
                return <PostesCard key={uuidv4()} post={item}/>
            })}
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default PostsPage