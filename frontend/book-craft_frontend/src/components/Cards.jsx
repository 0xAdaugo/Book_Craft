import React from 'react';
import file from '../assets/library_1.jpg'

const Cards = () => {
  return (
    <div className='w-full py-40 px-4'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={file} alt="puzzle card" />
            <h2 className='text-2xl font-bold text-center py-8'>Wordsearch</h2>
            <p className='text-center text-4xl font-bold'>1 week free</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>10 puzzles </p>
                <p className='py-2 border-b mx-8'>1 Granted user</p>
                <p className='py-2 border-b mx-8'>Save up to 10 pages</p>
            </div>
            <button className='w-40 bg-[#00ACD0] rounded-md font-medium my-3 mx-auto text-black p-2 border-2 border-black'>Create</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={file} alt="card image" />
            <h2 className='text-2xl font-bold text-center py-8'>Crossword</h2>
            <p className='text-center text-4xl font-bold'>1 week free</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>10 puzzles </p>
                <p className='py-2 border-b mx-8'>1 Granted user</p>
                <p className='py-2 border-b mx-8'>Save up to 10 pages</p>
            </div>
            <button className='w-40 bg-[#00ACD0] rounded-md font-medium my-3 mx-auto text-black p-2 border-2 border-black'>Create</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={file} alt="card image" />
            <h2 className='text-2xl font-bold text-center py-8'>Sudoku</h2>
            <p className='text-center text-4xl font-bold'>1 week free</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>10 puzzles </p>
                <p className='py-2 border-b mx-8'>1 Granted user</p>
                <p className='py-2 border-b mx-8'>Save up to 10 pages</p>
            </div>
            <button className='w-40 bg-[#00ACD0] rounded-md font-medium my-3 mx-auto text-black p-2 border-2 border-black'>Create</button>
        </div>
        {/* Component Version */}
        {/* <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={props.image} alt="card image" />
            <h2 className='text-2xl font-bold text-center py-8'>{props.heading}</h2>
            <p className='text-center text-4xl font-bold'>{props.price}</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>{props.paragraph1}</p>
                <p className='py-2 border-b mx-8'>{props.paragraph2}</p>
                <p className='py-2 border-b mx-8'>{props.paragraph3}</p>
            </div>
            <button className='w-40 bg-[#00ACD0] rounded-md font-medium my-3 mx-auto text-black p-2 border-2 border-black'>{props.buttonText}</button>
        </div> */}
        
      </div>
    </div>
  )
}

export default Cards
