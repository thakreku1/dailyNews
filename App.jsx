import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'

const App = () => {
  const [category, setCatagoey]=useState("general")
  return (
    <div>
      <Navbar setCatagoey={setCatagoey}/>
      <NewsBoard category= {category}/>
    </div>
  )
}

export default App
