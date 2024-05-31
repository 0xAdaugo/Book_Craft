import React from 'react';
import BookCraft from '../assets/BookCraft.png';

const Analytics = () => {
  return (
    <div className='w-full py-16 px-4'>
        <div className='mx-auto max-w-7xl grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4 rounded-2xl' src={BookCraft} alt="" />
          <div className='flex flex-col justify-center p-4'>
            <p className='font-bold bg-black text-[#C0f0f7] rounded-lg'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#852500]'>Manage Data Analytics Centrally</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore ratione, facere illo voluptatum veniam quaerat iusto laboriosam nemo, dolor blanditiis dignissimos sed voluptate et expedita non minus perspiciatis excepturi at doloribus obcaecati ullam. Sapiente consequuntur laboriosam, minus minima veniam, odio voluptas quas eius aspernatur labore officiis quod. Dolorem dolor ut unde reiciendis voluptatibus, rem, quo modi cupiditate, repellat praesentium eveniet ab delectus. Consequuntur asperiores minima quaerat ad ea illo quos neque illum a laudantium dicta quas temporibus sit, quidem consectetur amet dolorem alias aperiam laboriosam sequi dolorum ut placeat quae iure. Molestias, nisi distinctio. Fugit porro maxime earum repellendus ratione.
            </p>
            <button className='w-52 bg-[#00ACD0] rounded-md font-medium my-6 mx-auto text-black p-4 border-2 border-[#852500]'>Get Started</button>
          </div>
        </div>
    </div>
  )
}

export default Analytics
