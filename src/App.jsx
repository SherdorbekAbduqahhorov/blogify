  import React from 'react';
  import HomePages from './pages/public/HomePages';
  import { createBrowserRouter, RouterProvider } from 'react-router-dom';
  import PostsPage from './pages/public/PostsPage';
  import LoginPage from './pages/admin/LoginPage';
  import DetailPage from './components/DetailPage';
  import AuthLayout from './components/AuthLayout';
  import Adminleyout from './components/Adminleyout';
  import CreatPost from './pages/admin/CreatPost';
import ProtecrotRout from './components/ProtecrotRout';
import Dashboard from './pages/admin/Dahbordpage';

  function App() {
    const routers = createBrowserRouter([
      { path: "/", element: <HomePages /> },
      { path: "/PostsPage", element: <PostsPage /> },
      { path: "/DetailPage/:id", element: <DetailPage /> },
      {
        path: "/login",
        element: <AuthLayout />,
        children: [
          { index: true, element: <LoginPage /> }
        ]
      },
      {
        path: "/admin",
        element: 
        <ProtecrotRout>
          <Adminleyout />
        </ProtecrotRout>,
        children: [
          {
            path: 'dashboard',
            element:<Dashboard/>

          }, 
          { 
            path: "creatPost",
            element: <CreatPost/> 
          }
        ]
      }
    ]);

    return (
      <div>
        <RouterProvider router={routers} />
      </div>
    );
  }

  export default App;
