import { useDispatch } from "react-redux";
import { addUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

export default function UserForm(){

    const dispatch = useDispatch();
    const navigate = useNavigate(); // instanciamos la variable de useNavigate

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newUser ={
            name: e.target.name.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            id: e.target.id.value, // Aquí deberías cambiar e.target.id.value a e.target.id.value
            password: e.target.password.value
        }
        dispatch(addUser(newUser))
        navigate('/user') // hacemos la redireccion
    }

    return (
        <div className="max-w-md mx-auto px-5 py-5">
            <form action="" onSubmit={handleSubmit} className="bg-white rounded px-8 pt-6 pb-8 shadow-2xl">

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Name</label>
                    <input type="text" name="name" placeholder="Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">LastName</label>
                    <input type="text" name="lastname" placeholder="LastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="text" name="email" placeholder="Email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Identification</label>
                    <input type="text" name="id" placeholder="Identification" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Password</label>
                    <input type="text" name="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 rounded text-blue-50 font-bold py-2 px-4">Save</button>
                </div>

            </form>
        </div>
    );
}
