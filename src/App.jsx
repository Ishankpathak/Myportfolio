import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Error from './Components/Error'
import { Routes , Route } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
