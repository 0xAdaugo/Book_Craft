// import { Link } from "react-router-dom";
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
    return (
    <div className="mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-black">
        <div>
            <h1 className="w-full text-3xl font-bold text-[#00ACD0]">BOOKCRAFT</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, vel sequi? Illum, delectus eveniet? Magni rerum consequuntur quisquam iure accusamus.</p>
            <div className="flex justify-between md:w-[75%]">
                <FaDribbbleSquare size={30}/>
                <FaFacebookSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaInstagramSquare size={30}/>
                <FaTwitterSquare size={30}/>
            </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
            <div>
                <h6 className="font-medium text-gray-400">Solutions</h6>
                <ul>
                    <li className="py-2 text-sm">Analytics</li>
                    <li className="py-2 text-sm">Marketing</li>
                    <li className="py-2 text-sm">Commerce</li>
                    <li className="py-2 text-sm">Insights</li>
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-gray-400">Solutions</h6>
                <ul>
                    <li className="py-2 text-sm">Analytics</li>
                    <li className="py-2 text-sm">Marketing</li>
                    <li className="py-2 text-sm">Commerce</li>
                    <li className="py-2 text-sm">Insights</li>
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-gray-400">Solutions</h6>
                <ul>
                    <li className="py-2 text-sm">Analytics</li>
                    <li className="py-2 text-sm">Marketing</li>
                    <li className="py-2 text-sm">Commerce</li>
                    <li className="py-2 text-sm">Insights</li>
                </ul>
            </div>
        </div>
    <p className="">Copyright © Book-Craft 2024</p>
    </div>
    )
}

export default Footer;