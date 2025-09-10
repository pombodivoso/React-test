import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [visibility, setVisibility] = useState(true)

  return (
    <>
    { visibility &&
      <h2 O TEXTO AGORA ESTÁ VISÍVEL/>
    }

    <button onClick={() => {setVisibility(visibility == true? false : true)}}>Alterar a visibilidade</button>
      <h1>Parte 4 - React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          <h2>+</h2>
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          <h2>-</h2>
        </button>
        <h2> Contagem atual {count}</h2>
      </div>
      <input type="text" onChange={(e) => setText(e.target.value)} placeholder='Digite aqui: ' />
      <h2>{text}</h2>
    </>
  )
}

export default App
