import React  from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Models from './pages/Models'
import DiabetesForm from './pages/DiabetesForm'
import HeartForm from './pages/HeartForm'
import StrokeForm from './pages/StrokeForm'
import Navbar from './components/Navbar'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='flex justify-center items-center h-[calc(100vh - 6rem)]'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='models' element={<Models />} />
          <Route path='diabetesform' element={<DiabetesForm />} />
          <Route path='heartform' element={<HeartForm />} />
          <Route path='storkeform' element={<StrokeForm />} />

        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
