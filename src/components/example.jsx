
import { decreaseNumber, increaseNumber } from '../features/numberSlice';
import {useSelector, useDispatch} from 'react-redux';

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

function ButtonExample() {
  // const [count, setCount] = useState(0);
  const number = useSelector(state => state.number.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col items-center">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" 
        onClick={() => dispatch(increaseNumber())}>
          Sumar
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
        onClick={() => dispatch(decreaseNumber())}>
          Restar
        </button>
        <p>El contador va en: {number}</p>
      </div>
    </>
  );
}

export default function Example() {
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
      <ButtonExample />
      <ButtonExample />
      <ButtonExample />
    </div>
  );
}
