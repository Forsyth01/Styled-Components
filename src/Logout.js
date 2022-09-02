import React from 'react'
import {signOut, getAuth} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

export const Logout = () => {
    const navigate = useNavigate()
    const auth = getAuth();
    function Logout(){

        signOut(auth)
        .then((res)=>{
            
        })
        .then(()=>{
            navigate('/login')
        })
       
    }

  return (
    <button onClick={Logout} className="text-gray-200 cursor-pointer hover:text-yellow-100 tracking-wide ">Logout</button>
  )
}
