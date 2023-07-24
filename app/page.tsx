'use client'

import { useState } from 'react'

// import { LoginForm } from '../components/LoginForm'
// import { UserList } from '../components/UserList'
// import { UserProfile } from '../components/UserProfile'

export default function Home() {
  const [showText, setShowText] = useState(false)
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="my-6 text-4xl font-bold text-gray-900">Home Page</h1>
      <button className="mb-6 rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700">Click Me</button>
      <div className="mb-4">
        <label htmlFor="randomText" className="block text-sm font-medium text-gray-700">
          Enter Random Text:{' '}
        </label>
        <input
          id="randomText"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="specificText" className="block text-sm font-medium text-gray-700">
          Enter Specific Text:
        </label>
        <input
          id="specificText"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <input
          placeholder="Search..."
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <input
          value="Szymon"
          onChange={() => {}}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-6">
        {showText && <span className="text-xl">This is the text!</span>}
        <button
          onClick={() => {
            setTimeout(() => {
              setShowText(!showText)
            }, 1100)
          }}
          className="mt-2 rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
        >
          Show Text
        </button>
      </div>
      {/*
      <UserProfile displayName={'sadsdadsadsa'} username="szymon" email="szymon@szymon.com" isEmailVerified={false} />
      <UserList />
      <LoginForm /> */}
    </main>
  )
}
