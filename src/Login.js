import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'


export const Login = () => {
    const navigate = useNavigate()
    const auth = getAuth();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth, username, password)
        .then(()=>{
            alert('Logged In')
            navigate('/')
        })
        .catch((err) =>{
            setError(err.message)
        });
    }

  return (
    <header>
        <div className="">
            <div className="m-auto w-[90%]">
                {/* <h1 className="text-yellow-800 font-bold text-3xl my-10 absolute">Sign in </h1> */}
                <form onSubmit={handleSubmit} className="space-y-5 flex flex-col m-auto w-[70%] md:w-[50%] h-[90vh] justify-center ">
                
                        <div className="block">
                        <div className="text-center text-gray-300 text-2xl font-bold tracking-wide">LOG<span className='text-yellow-800'>IN</span></div>
                        <p className=" text-yellow-800 mb-5">{error}</p>
                        <input type="email" 
                        placeholder='Email'
                        className='p-3 rounded bg-gray-300 outline-none w-[100%]'
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        />
                        </div>
                        <div className="block">
                       
                        <input type="password" 
                        placeholder='Password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className='p-3 rounded bg-gray-300 outline-none  w-[100%]'
                        />
                   </div>
                    <p className="text-gray-200">Create a new account ? <Link to = "/signup" className='text-yellow-800'>sig<span className=""></span> nup</Link></p>
                   <button type='submit' className='bg-yellow-800 text-gray-200 hover:bg-yellow-700 px-3 py-3 rounded-xl w-[40%]'>Login</button>
                </form>
            </div>
        </div>
    </header>
  )
}
