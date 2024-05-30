import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full bg-black text-white grid md:grid-cols-2'>
        <div className='m-5 p-5'>
            <h1 className='text-3xl'>Want tips and tricks to optimize your flow?</h1>
            <p>Signup to our newsleter and stay up to date</p>
        </div>
        <div className='m-5 p-5'>
            <input className='p-2 m-2 rounded-md text-black w-full' type="email" placeholder='Enter your email' />
            <button className='w-40 bg-[#00ACD0] rounded-md font-medium my-3 mx-auto text-black p-2 border-2 border-black'>Notify me</button>
            <p>We care about the protection of your data. Read our <span className='underline text-green-800'>Privacy Policy</span></p>
        </div>
      
    </div>
  )
}

export default NewsLetter
