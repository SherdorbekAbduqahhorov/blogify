import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import PostesCard from './PostesCard'
import { v4 as uuidv4 } from 'uuid';

function LatestPostes() {
    let [Posts, setPosts]= useState([])
    useEffect(()=>{
        async function getPosts(){
            try {
        let res= await fetch('https://alijonov0901.pythonanywhere.com/api/v1/articles/')
        if (!res.ok){
            throw new Error("hatolik")
        }

        let data = await res.json();
        setPosts(data)
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}
getPosts() 
    },[])
    



  return (
    <section className='section1 bg-[#F3F4F64D]'>
            <div className='divLatestPage newcontainer flex justify-between'>
                <div className=' latestmedisadiv mt-[128px]'>
                    <h2 className='text-[36px] font-bold'>Latest Posts</h2>
                    <p className=' text-[#6B7280] mb-[48px]'>Check out our most recent articles</p>
                </div>
                <Link to="/PostsPage"><button className='latestmedisadivbut buttonltestPost mt-[148px] text-[#0F1729]'>Veiw All ➜</button></Link>
            </div>

            <div className='newcontainer flex justify-center gap-[32px] flex-wrap'>
                {Posts && Posts.slice(1, 4).map((post)=>{
                        return  <PostesCard key={uuidv4()} post={post}/>
                    })}
            </div>
    </section>
  )
}

export default LatestPostes