import { useState } from 'react';
import './App.css'

function Profile({user}){

  return (
    <>
    <h1>{user.name}</h1>
    <br />
    <img 
    className='avatar'
    src={user.imageUrl}
    alt={'photo of '+user.name}
    style={{
      width: user.imageSize,
      height: user.imageSize
    }}

     />
    </>
  )
}

function App() {

  const saludar = () => {
    alert('Hola mundo')
  }

  const mostrarTexto = (e) => {
    console.log(e.target.value)
  }

  // Cambiando el estado de las variables
const [count, setCount] = useState(0);
// pasar parametros como componente reutilizable
const user = {
  name: 'Elvis',
  imageUrl:'https://hips.hearstapps.com/hmg-prod/images/singer-elvis-presley-news-photo-1590531497.jpg',
  imageSize:90,
};

// pasar parametros como componente reutilizable
const user2 = {
  name: 'Brad Pitt',
  imageUrl:'https://goldenglobes.com/wp-content/uploads/2023/10/brad-pitt_03_paramount-pictures.jpg',
  imageSize:90,
};



  return (
        <>
          <Profile user = {user}/>
          <br />

          <Profile user = {user2}/>
          <br />
          
          <button onClick={() => saludar()}>Enviar</button>
          <input type="text" onChange={mostrarTexto} />
          <br />
          
          <button onClick={() => setCount(count+1)}>Sumar</button>
          <button onClick={() => setCount(count-1)}>Restar</button>
          <p>El contador va en: {count}</p>
          

        </>
  )
}

export default App
