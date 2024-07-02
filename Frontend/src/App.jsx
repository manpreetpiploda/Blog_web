import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Signup from './pages/Signup'
import VerifyEmail from './pages/VerifyEmail'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/verify-email' element={<VerifyEmail/>}/>
      </Routes>
    </>
  )
}

export default App
