import { useState } from 'react'

export const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const isDisabled = () => !username || !password

  const handleLogin = (e: { preventDefault: () => void }) => {
    setError('')
    setSuccess('')
    e.preventDefault()
    fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setSuccess('Success Logging In')
      })
      .catch((err) => {
        setError('Error Logging In')
      })
  }

  return (
    <div className="mx-auto mt-20 w-full max-w-xs">
      <form className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="username">
            Username
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          {error && <p className="text-xs italic text-red-500">{error}</p>}
          {success && <p className="text-xs italic text-green-500">{success}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none ${
              isDisabled() && 'cursor-not-allowed opacity-50'
            }`}
            type="button"
            onClick={handleLogin}
            disabled={isDisabled()}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
