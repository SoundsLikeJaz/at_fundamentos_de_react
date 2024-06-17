import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ex01 from './pages/Ex01'
import Ex02 from './pages/Ex02'
import Login from './components/login/Login'
import LoginFB from './components/login/LoginFB'
import CriarConta from './components/login/CriarConta'
import CriarContaFB from './components/login/CriarContaFB'
import Ex07 from './pages/Ex07'
import Ex08 from './pages/Ex08'
import Ex09 from './pages/Ex09'
import Ex10 from './pages/Ex10'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ex01 />
      {/* <Ex02 /> */}
      {/* <Login /> */}
      {/* <LoginFB /> */}
      {/* <CriarConta /> */}
      {/* <CriarContaFB /> */}
      {/* <Ex07 /> */}
      {/* <Ex08 /> */}
      {/* <Ex09 /> */}
      {/* <Ex10 /> */}
    </>
  )
}

export default App
