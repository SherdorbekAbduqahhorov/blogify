import React from 'react'
import { Outlet } from 'react-router-dom'
import SaidbarAdmim from './SaidbarAdmim'

function Adminleyout() {
  return (
    <div className='flex'>
        <div>
            <SaidbarAdmim/>
        </div>
        <div><Outlet/></div>  
    </div>
  )
}

export default Adminleyout 