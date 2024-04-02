import { Link } from 'react-router-dom';
import { useDeleteUserMutation, useGetUsersQuery } from '../../features/api/apiSlice';
import Swal from 'sweetalert2';

export default function UserList(){

    const { data: users, isLoading, isError, error } = useGetUsersQuery();
    const [deleteUser] = useDeleteUserMutation();

    const handleDelete = (user) => {
        Swal.fire({
            title: `¿Estás seguro de que deseas eliminar al Usuario ${user.name} ${user.lastname}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUser(user._id)              
            }
        });
    }
    
    if (isLoading) return (
        <div className='flex justify-center items-center h-screen'>
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    );
    else if(isError) return <div>Error: {error.message} </div>;

    return (
        <div className="overflow-x-auto mt-8"> {/* Agregar margen superior */}
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-500 text-white text-sm uppercase">
                    <tr>
                        <th className="py-3 px-4 font-semibold text-left">Name</th>
                        <th className="py-3 px-4 font-semibold text-left">Last Name</th>
                        <th className="py-3 px-4 font-semibold text-left">Email</th>
                        <th className="py-3 px-4 font-semibold text-left">Identification</th>
                        <th className="py-3 px-4 font-semibold text-left">Avatar</th>
                        <th className="py-3 px-4 font-semibold text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {users.map(user => (
                        <tr key={user._id} className="hover:bg-gray-100 transition-colors duration-200">
                            <td className="py-3 px-4 border-b border-gray-200">{user.name}</td>
                            <td className="py-3 px-4 border-b border-gray-200">{user.lastname}</td>
                            <td className="py-3 px-4 border-b border-gray-200">{user.email}</td>
                            <td className="py-3 px-4 border-b border-gray-200">{user.id}</td>
                            <td className="py-3 px-4 border-b border-gray-200">
                                <img className="h-10 w-10 rounded-full" src={`http://localhost:3000/${user.avatar}`} alt="Avatar"/>
                            </td>
                            <td className="py-3 px-4 border-b border-gray-200">
                                <div className="flex space-x-2">
                                    <Link to={`/user/${user._id}`} className="text-blue-500 hover:text-blue-700">Edit</Link>
                                    <button onClick={() => handleDelete(user)} className="text-red-500 hover:text-red-700">Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
