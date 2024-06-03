// import { Link } from "react-router-dom";
import {} from 'react-icons/ai';
import Hero from "../components/Hero";
import SlideOne from '../components/SlideOne';
// import SlideTwo from '../components/SlideTwo';
// import SlideThree from '../components/SlideThree';
// import Textbox from '../components/Textbox';
import Analytics from '../components/Analytics';
import NewsLetter from '../components/NewsLetter';
import Cards from '../components/Cards';
// import file from '../assets/library_1.jpg'

const HomePage = () => {
    return (
        <>
        <Hero />
        <SlideOne />
        {/* <Textbox /> */}
        {/* <SlideTwo /> */}
        {/* <SlideThree /> */}
        <Analytics />
        <NewsLetter />
        <Cards
            // image={file}
            // heading="Sudoku"
            // price="$200"
            // paragraph1="500 GB of storage"
            // paragraph2="1 Granted user"
            // paragraph3="Send up to 2gb"
            // buttonText="Start Trial"
        />
        {/* <Textbox /> */}
        
    </>
    )
}

export default HomePage;
