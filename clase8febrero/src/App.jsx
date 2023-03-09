import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Componente1 from './components/Componente1'
import Componente5 from './components/Componente5'
import { InfoContextProvider } from './contexts/InfoContext'
import { ContextNewProvider } from './contexts/ContextNew'
import { ColorContextProvider } from './contexts/ColorContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ContextNewProvider>
        <InfoContextProvider>
          <ColorContextProvider>
          <Componente1/>
          <Componente5/>
          </ColorContextProvider>
          
        </InfoContextProvider>
      </ContextNewProvider>
      
    </div>
  )
}

export default App
