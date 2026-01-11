import React from 'react'
import HomePages from './pages/public/HomePages'
import { createBrowserRouter,RouterProvider  } from 'react-router-dom'
import PostsPage from './pages/public/PostsPage'
import LoginPage from './pages/public/LoginPage'

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
      path:"/LoginPage",
      element:<LoginPage/>
    },

  ])
  return (
    <div> 
      <RouterProvider router={routers}/>
    </div>
  )
}

export default App