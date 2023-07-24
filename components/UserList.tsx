import { useEffect, useState } from 'react'

interface User {
  id: number
  username: string
}

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div className="mx-auto mt-20 w-full max-w-2xl rounded bg-white p-6 shadow-md">
      {users.length > 0 ? (
        <div>
          <h1 className="mb-6 text-2xl font-bold">List Of Users</h1>
          {users.map((user) => (
            <div key={user.id} className="border-b border-gray-200 py-2 text-lg">
              {user.username}
            </div>
          ))}
        </div>
      ) : (
        <span className="text-lg text-gray-500">No Users</span>
      )}
    </div>
  )
}
