import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import StoryDetail from './Pages/StoryDetail'
import './App.css'

function App() {
 

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/story/:id" element={<StoryDetail />}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
