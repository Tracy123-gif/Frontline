import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import About from './pages/About'
import Navbar from './components/Navbar'
import Contacts from './pages/Contacts'

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Add Navbar here */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contacts />} />
      </Routes>
    </Router>
  )
}

export default App;
