import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: ""
  });
  const { email, password } = inputValue;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleError = (error) => toast.error(error, {position: "top-center"});
  const handleSuccess = (msg) => toast.success(msg, {position: "top-center"});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/login",
      {
        ...inputValue,
      },
      { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };
  return (
    <div className='h-screen w-full p-auto flex justify-center items-center flex-col'>
      <h1 className='text-3xl font-bold text-center text-[#004aad] mb-3'>Log In</h1>
      <div className='w-3/4 md:w-1/2 h-3/4 border-2 border-[#00ACD0] shadow-2xl shadow-[#00ACD0] bg-white flex justify-center items-center flex-col'>
      <form className="space-y-4 md:space-y-6 md:w-1/2 h-1/2" onSubmit={handleSubmit} action="#">
        <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input onChange={handleChange} value={email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required={true} />
          </div>
          <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input onChange={handleChange} value={password} type="password" name="password" id="password" placeholder="•••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required={true} />
          </div>
          <div className="flex items-center justify-between">
              <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required={true} />
                  </div>
                  <div className="ml-2 text-sm">
                    <label htmlFor="remember" className="text-gray-500">Remember me</label>
                  </div>
              </div>
              <Link className="text-sm font-medium text-primary-600 hover:underline m-4">Forgot password?</Link>
          </div>
          <button type="submit" className="w-full text-black bg-[#004aad] hover:bg-[#477ec6] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
          <p className="text-sm font-light text-gray-500">
              Don't have an account yet? <Link to={"/register"} className="font-medium text-primary-600 hover:underline">Register</Link>
          </p>
        </form>

      </div>
      <ToastContainer />
    </div>
  )
}

export default Login
