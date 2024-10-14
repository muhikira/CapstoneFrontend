import React from 'react'
import Hearder from '../components/Hearder'
import Footer from '../components/Footer'
import '../style/Content.css'


import {Outlet} from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <Hearder/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
