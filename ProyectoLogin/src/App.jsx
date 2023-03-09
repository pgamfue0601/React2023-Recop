import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { LoginContext } from './contexts/LoginContext'


function App() {
  const miLogin = useContext(LoginContext);
  return (
      <div className="App">
        <Link to='/login'>Iniciar sesión</Link>
        {miLogin.login && <h1>"Has iniciado sesión correctamente"</h1>}
      </div>
  )
}

export default App
