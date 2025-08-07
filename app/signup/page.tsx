import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function SignupPage() {
  return (
    <div className="p-5 max-w-7xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#1887b6]">Sign Up for Millsberry</h1>
        <div>
          <p className="text-center mb-8 text-gray-600">Welcome to Millsberry! Join our virtual community today.</p>
          <form className="max-w-md mx-auto mt-5">
            <div className="mb-4">
              <label htmlFor="username" className="block mb-1.5 font-bold text-gray-700">Username:</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                required 
                className="w-full px-2.5 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1887b6] focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1.5 font-bold text-gray-700">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full px-2.5 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1887b6] focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1.5 font-bold text-gray-700">Password:</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                required 
                className="w-full px-2.5 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1887b6] focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirm-password" className="block mb-1.5 font-bold text-gray-700">Confirm Password:</label>
              <input 
                type="password" 
                id="confirm-password" 
                name="confirm-password" 
                required 
                className="w-full px-2.5 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1887b6] focus:border-transparent"
              />
            </div>
            <button 
              type="submit" 
              className="w-full px-3 py-3 bg-[#1887b6] text-white border-none rounded cursor-pointer text-base font-bold hover:bg-[#156a8a] transition-colors"
            >
              Create Account
            </button>
          </form>
          <p className="text-center mt-6 text-gray-600">
            Already have an account? <Link href="/" className="text-[#1887b6] hover:underline">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  )
} 