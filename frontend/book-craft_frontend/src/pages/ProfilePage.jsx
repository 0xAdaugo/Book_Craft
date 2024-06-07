import profilePic from "../assets/profilePic.jpg";
import { FaPlus } from "react-icons/fa";
//import { useState, useEffect } from "react";

const ProfilePage = () => {

    //const [user, setUser] = useState({username: "", name: "", email: ""});

    //useEffect(() => {}, []);
    const userDetails = [
        {
        id: 1,
        username: "johndoey",
        name: "John Doe",
        email: "johndoe123@gmail.com"
    }, {
        id: 2,
        username: "janedoey",
        name: "Jane Doe",
        email: "janedoe123@gmail.com"
    }
];

    return (
    <div className="m-10 shadow-sm h-screen block overflow-auto">
        <div className="flex justify-center items-center flex-col col-span-2">
            <div className="contents border-8 border-red-500">
                <img className="rounded-3xl w-[25%] h-[15%] border-8 border-white" src={profilePic} alt="" />
            </div>
            
            <label className="" htmlFor="picture" alt="Upload Picture"><FaPlus className="bg-white rounded-full w-28 lg:w-40 shadow-lg border-2 border-black hover:scale-105" size={30} />
                <input className="hidden" type="file" name="" id="picture" />
            </label>
        </div>

        <div className="h-[50%]">
            <h1 className="text-3xl font-display text-center underline p-10">Your Details</h1>
            <p className="p-3 font-bold pl-28">Username: {userDetails[0].username}</p>
            <p className="p-3 font-bold pl-28">Name: {userDetails[0].name}</p>
            <p className="p-3 font-bold pl-28">Email: {userDetails[0].email}</p>
        </div>
    </div>
);
}

export default ProfilePage;
