import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Subjects from './pages/Subjects'

import { Route, Routes } from 'react-router-dom'
import Chapter from './pages/Chapter'
import Videos from './pages/Videos'
import VideoStream from './components/VideoListing.jsx/VideoStream'
import AllSubjects from './pages/AllSubjects'
import VideoPlay from './pages/VideoPlay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<AllSubjects/>}></Route>
      <Route  path='/subject/:id' element={<Subjects/>}></Route>
      <Route path='/chapter' element={<Chapter/>}></Route>
      <Route path='/videos/:url' element={<Videos/>}></Route>
      <Route path='/stream/:link' element={<VideoPlay/>}></Route>
    </Routes>

    </>
  )
}

export default App
