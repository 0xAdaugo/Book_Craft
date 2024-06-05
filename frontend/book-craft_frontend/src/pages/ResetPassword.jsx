import React from 'react'

const ResetPassword = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>
      <h1 className='text-3xl font-bold text-center text-[#004aad] mb-3'>Reset Your Password</h1>
      <div className='w-3/4 h-3/4 bg-gray-100 shadow-2xl flex justify-center items-center border-2 border-[#00ACD0] shadow-[#00ACD0]'>
        <form className="space-y-4 md:space-y-6 p-8" action="#">
          <p className='mt-10 font-bold text-lg text-gray-800 md:text-xl lg:text-2xl'>Forgot your password? <br/> Reset it here</p>
          <div>
            <label className='mt-10 block text-md font-medium text-gray-900 text-center' htmlFor="email">Email</label>
            <input placeholder='exampleemail@gmail.com' type="email" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 md:p-4 md:w-full hover:scale-105" />
        </div>
        <div className='flex items-center justify-center'>
          <button type="submit" className="w-1/2 text-black bg-[#004aad] hover:bg-[#477ec6] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm p-4 text-center hover:scale-105">Sign in</button>
        </div>
        </form>
      </div>
      
    </div>
  )
}

export default ResetPassword
