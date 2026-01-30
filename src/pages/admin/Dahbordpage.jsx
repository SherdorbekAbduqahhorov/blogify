import React from 'react'
import { useState, useEffect } from "react";
import DashboardCard from '../../components/DashboardCard';
import DashboardJadval from '../../components/DashboardJadval';

function Dashboard() {
  let [post, setPost] = useState([]);

  useEffect(() => {
    async function getPost() {
      try {
        let res = await fetch("https:/alijonov0901.pythonanywhere.com/api/v1/articles/");
        if (!res.ok) {
          throw new Error('Apida xatolik');
        }
        let data = await res.json();
        setPost(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getPost();
  }, []);

  let info = post.reduce((acc, item) => {
    if (!acc.includes(item.category.name)) {
      acc.push(item.category.name);
    }

    return acc;
  }, []);

  console.log(info.length);

  return (
    <div className='p-[50px]'>
      <div>
        <h1 className="mb-[8px] text-[30px] font-bold text-[#0F1729]">
          Dashboard
        </h1>
        <p className="text-[16px] text-[#6B7280]">
          Welcome back! Here's an overview of your blog.
        </p>
      </div>
      <div>
        <DashboardCard post={post} info={info}/>
      </div>
      <div>
        <DashboardJadval post={post} info={info}/>
      </div>
    </div>
  );
}

export default Dashboard