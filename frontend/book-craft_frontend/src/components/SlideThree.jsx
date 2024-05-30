import { ReactTyped } from 'react-typed';
import { Parallax } from 'react-parallax';
import library_3 from '../assets/library-3.jpg';

const SlideThree = () => (
    <Parallax className='relative h-screen' blur={10} bgImage={library_3} bgImageAlt="library" strength={200}>
        <div className='flex items-center justify-center absolute h-screen w-full'>
            {/* <span className='text-white p-4 uppercase'>Whatever We Put In The Parallax</span> */}
            <ReactTyped className='text-3xl text-white lg:text-4xl mb-24 pl-12' startWhenVisible typeSpeed={30} backSpeed={100} strings={["Creating books doesn't have to be such a hassle."]} />
            <ReactTyped className='text-3xl text-white lg:text-4xl mt-12 pr-12' startDelay={800} typeSpeed={60} backSpeed={100} strings={["Take the stress off yourself and make your books right here"]} />
        </div>
    </Parallax>
);

export default SlideThree;