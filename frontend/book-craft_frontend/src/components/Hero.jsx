import { ReactTyped } from 'react-typed'

const Hero = () => {
    return (
        <div className="w-full mx-auto h-screen text-center flex flex-col justify-center text-[#004aad] font-display">
            <ReactTyped className='ease-in-out duration-500 mt-[-20%] text-2xl lg:text-3xl' startWhenVisible typeSpeed={120} backSpeed={130} strings={["Welcome to"]} />
            <p className="p-4 text-3xl uppercase md:text-4xl mb-10 shadow">Bookcraft</p>
            <h1 className='text-3xl mt-6 md:text-4xl lg:text-5xl'>We revolutionize</h1>
            <h1 className='text-2xl'>the way you create</h1> 
            <ReactTyped className='text-3xl bg-black text-[#C0f0f7] lg:text-4xl' loop typeSpeed={30} backSpeed={100} strings={["BOOK COVERS", "LOW CONTENT BOOKS", "PUZZLE BOOKS"]} />
            
        </div>
    )
}

export default Hero;