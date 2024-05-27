import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
    <div className="w-full mx-auto h-screen text-center flex flex-col justify-center text-red-700 font-display">
        <h1 className="text-3xl">Seems you're in undefined territory...</h1>
        <p className="underline p-10"><Link to={"/"}>Click here to go back to safety</Link></p>
    </div>
    );
}

export default NotFoundPage;