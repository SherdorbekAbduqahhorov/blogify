import React from 'react'
import Navbar from '../../components/Navbar'
import Main from '../../components/Main'
import WhyBlogify from '../../components/WhyBlogify'
import Footer from '../../components/Footer'
import LatestPostes from '../../components/LatestPostes'
function HomePages() {
  return (
    <div>
        <Navbar/>
        <Main/>
        <WhyBlogify/>
        <LatestPostes/>
        <Footer/>
       
    </div>
  )
}

export default HomePages