import React from 'react'
import HomePages from './pages/public/HomePages'
import { createBrowserRouter,RouterProvider  } from 'react-router-dom'
import PostsPage from './pages/public/PostsPage'
import LoginPage from './pages/admin/LoginPage'
import DetailPage from './components/DetailPage'
import AuthLayout from './components/AuthLayout'

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <HomePages/>
    },
    {
      path:"/PostsPage",
      element:<PostsPage/>
    },  
    {
      path:"/DetailPage/:id",
      element:<DetailPage/>
    },
    {
      path:'/login',
      element:<AuthLayout/>,
      children:[
        {
          index:true,
          element:<LoginPage/>
        }
      ]
    }
  ])
  return (
    <div> 
      <RouterProvider router={routers}/>
    </div>
  )
}

export default App