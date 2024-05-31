import { ReactTyped } from 'react-typed';
import { Parallax } from 'react-parallax';
import library_2 from '../assets/library-2.jpg';

const SlideTwo = () => (
    <Parallax className='relative h-screen' blur={0} bgImage={library_2} bgImageAlt="library" strength={200}>
        <div className='flex items-center justify-center absolute h-screen w-full'>
            {/* <span className='text-white p-4 uppercase'>Whatever We Put In The Parallax</span> */}
            <ReactTyped className='text-3xl text-white lg:text-4xl' startWhenVisible typeSpeed={30} backSpeed={100} strings={["Creating books doesn't have to be such a hassle."]} />
        </div>
    </Parallax>
);

export default SlideTwo;