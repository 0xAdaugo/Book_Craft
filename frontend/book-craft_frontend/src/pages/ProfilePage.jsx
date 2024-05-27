import profilePic from "../assets/profilePic.jpg"

const ProfilePage = () => {

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
    <div className="m-10 shadow-sm">
        <div className="flex justify-center">
            <img className="rounded-full w-[15%] h-[15%] border-white" src={profilePic} alt="" />
        </div>

        <div className="">
            <h1 className="text-3xl font-display text-center underline p-10">Your Details</h1>
            <p className="p-3 font-bold pl-28">Username: {userDetails[0].username}</p>
            <p className="p-3 font-bold pl-28">Name: {userDetails[0].name}</p>
            <p className="p-3 font-bold pl-28">Email: {userDetails[0].email}</p>
        </div>
    </div>
);
}

export default ProfilePage;