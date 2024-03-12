
import './App.css'

function App() {

  const saludar = () => {
    alert('Hola mundo')
  }

  const mostrarTexto = (e) => {
    console.log(e.target.value)
  }



  return (
        <>
          <h1>Hola mundo</h1>
          <button onClick={() => saludar()}>Enviar</button>
          <input type="text" onChange={mostrarTexto} />
        </>
  )
}

export default App
