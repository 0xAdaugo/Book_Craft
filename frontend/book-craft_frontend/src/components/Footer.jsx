import { Link } from "react-router-dom";



const Footer = () => {
    const footerItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "/about" },
    { id: 3, text: "Profile", path: "/profile" },
];
    
    return <div className="p-2 mx-auto bg-black text-white shadow-lg flex items-center space-x-4 absolute bottom-0 left-0 w-full justify-center">
        <ul className="font-bold text-center">
            {footerItems.map(items => {
                return <li className="p-4 hover:bg-[#00ACD0] rounded-xl m-2 cursor-pointer duration-300 hover:text-black" key={items.id}><Link to={items.path}>{items.text}</Link></li>
            })}
        </ul>
    <p className="">Copyright © Book-Craft 2024</p>
    </div>
}

export default Footer;