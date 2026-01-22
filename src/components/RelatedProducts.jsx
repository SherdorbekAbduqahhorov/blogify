import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostesCard from './PostesCard'

function RelatedProducts() {
  let [posts, setPosts] = useState([])
  let { id } = useParams()   // faqat shu yerda 1 marta

  useEffect(() => {
    async function getRelateds() {
      try {
        let res = await fetch(
          `https://alijonov0901.pythonanywhere.com/api/v1/articles/`
        )
        if (!res.ok) {
          throw new Error('api dam muamo bor')
        }
        let data = await res.json()
        setPosts(data)
      } catch (error) {
        console.log(error)
      }
    }

    getRelateds()
  }, [])

  let numericId = Number(id)

  const postsToShow =
    posts.length > 0
      ? [
          posts[numericId % posts.length],
          posts[(numericId + 1) % posts.length],
        ]
      : []

  return (
    <div className='flex gap-[72px] justify-center mt-[72px] flex-wrap'>
        
      {postsToShow.map(post => (
        <PostesCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default RelatedProducts
