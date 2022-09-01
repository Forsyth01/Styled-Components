import { Link } from "react-router-dom";
import { useState } from "react";
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'


const Signup = () => {
    const auth = getAuth();
    // const provider = new GoogleAuthProvider()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((res)=>{     
        })
        .then(()=>{
            alert('Logged In')
        })
        .catch((err) =>{
        setError(err.message)
        });
    }

    return ( 
        <div className="login">
        <div className="m-auto w-[85%]">
        <Link to = "/"> back</Link>
       
        <form className="md:w-[50%] m-auto" onSubmit={handleSubmit}>
            
            <div className="my-3">
            <label >Name</label>
            <input 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email" 
            className=" outline-hidden  border-none rounded w-full "/>

            <div className="my-3">
            <label >Password</label>
            <input 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password" 
            className="outline-hidden border-none rounded w-full  m-auto"/>
            </div>
            </div>
            <button className="bg-gray-300 py-3 hover:bg-gray-200 hover:scale-[102%] px-4 rounded-xl " type="submit">Login</button>
            <p>{error}</p>

        </form>
        </div>
    </div>
     );
}
 
export default Signup;