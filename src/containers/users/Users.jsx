import useFetch from "../../hooks/useFetch";
import { Outlet, useNavigate } from 'react-router';

const Users = () => {
  const { data: users, loading, error } = useFetch("http://localhost:3000/users");
  const navigate = useNavigate();

  if (!users) return (<p className="text-center text-gray-500">Users not found</p>);
  if (loading) return (<p className="text-center text-gray-500">Loading...</p>);
  if (error) return (<p className="text-center text-red-500">Hata: {error}</p>);

  return (
    <div className="px-4 pb-8 md:px-0 md:pb-8 lg:pb-16">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Phone</th>
              <th className="py-2 px-4 border">Address</th>
              <th className="py-2 px-4 border">Gender</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate(`${user.id}/details`)}
              >
                <td className="py-2 px-4 border text-center">{index + 1}</td>
                <td className="py-2 px-4 border">{user.name}</td>
                <td className="py-2 px-4 border">{user.email}</td>
                <td className="py-2 px-4 border">{user.phone}</td>
                <td className="py-2 px-4 border">{user.address}</td>
                <td className="py-2 px-4 border">{user.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Outlet />
    </div>
  )
}

export default Users