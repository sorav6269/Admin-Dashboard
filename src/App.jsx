import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'
import Sidebar from './component/layout/Sidebar'
import { Router,Routes, Route, Form } from 'react-router-dom'
import Display from './component/User/Display'
import Adduser from './component/User/Adduser'
import {Toaster} from "react-hot-toast"
import Viewtender from './component/User/Viewtender'
import Edittender from './component/User/Edittender'

function App() {
  

  return (
    <>
<Header/>
<Sidebar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Display' element={<Display/>}/>
  <Route path='/Adduser' element={<Adduser/>}/>
  <Route path='/Viewtender/:id' element={<Viewtender/>}/>
  <Route path='/Edittender/:id' element={<Edittender/>}/>
</Routes>
 <Footer/>
 <Toaster/>
    </>
  )
}

export default App
