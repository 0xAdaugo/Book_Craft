import { Link } from 'react-router-dom'

import React from 'react'

const Login = () => {
  return (
    <div className='h-screen w-full p-auto flex justify-center items-center flex-col'>
      <h1 className='text-3xl font-bold text-center text-[#004aad] mb-3'>Log In</h1>
      <div className='w-3/4 h-3/4 border-2 border-[#00ACD0] shadow-2xl shadow-[#00ACD0] bg-white flex justify-center items-center flex-col'>
      <form className="space-y-4 md:space-y-6" action="#">
        <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
          </div>
          <div>
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input type="password" name="password" id="password" placeholder="•••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
          </div>
          <div className="flex items-center justify-between">
              <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="" />
                  </div>
                  <div className="ml-2 text-sm">
                    <label for="remember" className="text-gray-500">Remember me</label>
                  </div>
              </div>
              <Link className="text-sm font-medium text-primary-600 hover:underline m-4">Forgot password?</Link>
          </div>
          <button type="submit" className="w-full text-black bg-[#004aad] hover:bg-[#477ec6] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
          <p className="text-sm font-light text-gray-500">
              Don't have an account yet? <Link className="font-medium text-primary-600 hover:underline">Sign up</Link>
          </p>
        </form>

      </div>
    </div>
  )
}

export default Login
