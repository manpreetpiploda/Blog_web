import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Signup from './pages/Signup'
import VerifyEmail from './pages/VerifyEmail'
import WritePost from './pages/WritePost'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/verify-email' element={<VerifyEmail/>}/>

        <Route path='/write-post' element={<WritePost/>}/>
        
      </Routes>
    </>
  )
}

export default App
