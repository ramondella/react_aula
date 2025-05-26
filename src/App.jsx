// components
import FirstComponent from "./components/FirstComponent"
import TemplateExpressions from "./components/TemplateExpressions"
import MyComponet from "./components/MyComponet"
import Events from "./components/Events"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Challenge from "./components/Challenge"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Primeiro Projeto em React!</h1>
     <FirstComponent />
     <TemplateExpressions />
     <MyComponet />
     <Events />
     <Challenge />
    </>
  )
}

export default App
