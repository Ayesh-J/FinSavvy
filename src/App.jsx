import { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Dashboard from './components/Dashboard'
import Contact from './components/Contact'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/About' element={<About/>}/> 
        <Route path='/Services' element={<Services/>}/> 
        <Route path='/Dashboard' element={<Dashboard/>}/> 
        <Route path='/Contact' element={<Contact/>}/> 

 
       </Routes>

    </>
  )
}

export default App
