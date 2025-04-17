import React from 'react'
import Header from './Components/header'
import {Routes,Route} from 'react-router-dom'
import Visualise from './Components/Visualise'
import Connect from './Components/Connect'
import Notfound from './Components/Notfound'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/visualise' element={<Visualise/>}/>
      <Route path='/connect' element={<Connect/>}/>
      <Route path='/notfound' element={<Notfound/>}/>
    </Routes>
  )
}

export default App