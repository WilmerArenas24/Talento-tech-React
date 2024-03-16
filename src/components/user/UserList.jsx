import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function UserList() {
    
    const users = useSelector(state => state.users);
    console.log(users);

    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">Name</th>
                    <th scope="col" className="px-6 py-3">LastName</th>
                    <th scope="col" className="px-6 py-3">Email</th>
                    <th scope="col" className="px-6 py-3">Identification</th>
                    <th scope="col" className="px-6 py-3">Avatar</th>
                    <th scope="col" className="px-6 py-3">Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id} className="bg-white dark:bg-gray-800">
                        <td scope="col" className="px-6 py-3">{user.name}</td>
                        <td scope="col" className="px-6 py-3">{user.lastname}</td>
                        <td scope="col" className="px-6 py-3">{user.email}</td>
                        <td scope="col" className="px-6 py-3">{user.id}</td>
                        <td scope="col" className="px-6 py-3">
                            <img className="w-40"
                                src={user.avatar}
                                alt={user.name + ' ' + user.lastname}
                            />
                        </td>

                        <td className="border-y-2 px-4 py-2 border-indigo-600">
                            <div className="flex items-center">
                                <Link to={`/user/${user._id}`} 
                                    className="inline-block px-4 py-2 mr-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                    Edit
                                </Link>
                                <button type="button" 
                                    className="inline-block px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
