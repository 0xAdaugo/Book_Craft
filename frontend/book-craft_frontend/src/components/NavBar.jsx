import React, {useState} from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
// import BookCraft from "../assets/BookCraft.png";
// import BookCrafts from "../assets/BookCrafts.png";

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: "Home", path: "/" },
        { id: 2, text: "About", path: "/about" },
        { id: 3, text: "Profile", path: "/profile" },
        { id: 4, text: "Puzzles", path: "/puzzles" },
    ];

    return (
    <div className="bg-black flex justify-between items-center h-24 mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#00ACD0]">
            BOOKCRAFT
        </h1>
        {/* <img className="w-auto h-full" src={BookCrafts} alt="" /> */}
        {/* <img className="w-auto h-full" src={BookCraft} alt="logo" /> */}

        <ul className="hidden md:flex">
            {navItems.map(item => {
                return <li
                    key={item.id}
                    className="p-4 hover:bg-[#00ACD0] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
                        <Link to={item.path}>
                           {item.text} 
                        </Link>
                </li>
            })}
        </ul>

        <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>

        <ul className={ nav ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
        : "ease-in-out W-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"}>
            <h1 className="w-full text-3xl font-bold text-[#00ACD0] m-4">BOOKCRAFT </h1>
            {navItems.map(item => {
                return <li
                onClick={handleNav}
                key={item.id}
                className="p-4 border-b rounded-xl hover:bg-[#00ACD0] duration-300 hover:text-black cursor-pointer border-gray-600">
                    <Link to={item.path}>
                        {item.text}
                    </Link>
                    
                </li>
            })}
        </ul>
    </div>
    );
};

export default NavBar;