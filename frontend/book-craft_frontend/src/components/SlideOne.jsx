import { ReactTyped } from 'react-typed';
import { Parallax } from 'react-parallax';
import library_1 from '../assets/library-2.jpg';

const SlideOne = () => (
    <Parallax className='relative h-screen font-display' blur={10} bgImage={library_1} bgImageAlt="library" strength={200}>
        <div className='flex items-center justify-center absolute h-screen w-full flex-col uppercase m-6'>
            <h1 className='text-3xl text-white mb-10'>Remember,</h1>
            <ReactTyped className='text-3xl text-white lg:text-4xl mb-5' startWhenVisible typeSpeed={30} backSpeed={100} strings={["Creating books doesn't have to be such a hassle."]} />
            <ReactTyped className='text-3xl text-white lg:text-4xl' startDelay={800} typeSpeed={60} backSpeed={100} strings={["Take the stress off yourself and make your books right here"]} />
        </div>
    </Parallax>
);

export default SlideOne;