import { useState } from 'react';

function Profile({ user }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold">{user.name}</h1>
      <img
        className="w-[90px] h-[90px] rounded-full"
        src={user.imageUrl}
        alt={'photo of ' + user.name}
      />
    </div>
  );
}

export default function Example() {
  const saludar = () => {
    alert('Hola mundo');
  };

  const mostrarTexto = (e) => {
    console.log(e.target.value);
  };

  const [count, setCount] = useState(0);
  const users = [
    {
      name: 'Elvis',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/singer-elvis-presley-news-photo-1590531497.jpg',
    },
    {
      name: 'Brad Pitt',
      imageUrl: 'https://goldenglobes.com/wp-content/uploads/2023/10/brad-pitt_03_paramount-pictures.jpg',
    },
    {
      name: 'Madonna',
      imageUrl: 'https://indierocks.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/bfi_thumb/Ray_Of_Light-8n2vcxs4y78mb0xd3trppqm9x24twmnz6nx6do7a5x8g1fk15p7g2lhswqh2bk.jpg',
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="mr-8">
        {users.map((user, index) => (
          <div key={index} className="flex flex-col items-center mb-8">
            <Profile user={user} />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={saludar}>
          Enviar
        </button>
        <input className="border-2 border-gray-400 py-2 px-4 rounded mt-4" type="text" onChange={mostrarTexto} />
        <br />

        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count + 1)}>
          Sumar
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count - 1)}>
          Restar
        </button>
        <p>El contador va en: {count}</p>
      </div>
    </div>
  );
}
