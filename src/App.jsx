import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Navbar from '././components/Navbar'
import Footer from './components/Footer'
import Handle404 from './pages/Handle404'

const App = () => {
  return (
    <div className='font'>
      
    <Router>
      <Navbar /> {/* Add Navbar here */}
      <Routes>
        <Route path='*' element={ <Handle404 /> } />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contacts />} />
      </Routes>

      <Footer />
    </Router>
    </div>
  )
}

export default App;
