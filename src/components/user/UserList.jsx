import { useSelector } from "react-redux";

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
                                alt={user.name + ' ' + user.LastName}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
