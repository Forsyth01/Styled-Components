import React from 'react'
import { useParams,Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import{db} from '../src/firebase'
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore'

export const NoteDetails = () => {
  const colRef = collection (db, 'Notes',)
  const [notes, setNotes] = useState([])
  const [isLoading, setIsloading] = useState(true)

  useEffect(()=>{
    getDocs(colRef)
    const notess = async ()=>{
        const data = await getDocs(colRef);
        setNotes(data.docs.map((doc)=> ({...doc.data(), id:doc.id})))
        setIsloading(false)
    };
    notess(); 
},[]) 
  
   const {id} = useParams()
  return (
    // <div className='text-white'>NoteDetails - {id}</div>
    <div className=" grid cursor-pointer break-words whitespace-pre-wrap overflow-hidden md:grid-cols-4 grid-cols-2  gap-5 m-auto my-10 ">
    {notes.map((note) =>{
    return (
     <div 
     className="bg-gray-900 p-3 h-fit rounded-xl hover:scale-[101%] duration-700 w-[100%]"> 
     <Link to = {`/notes/${note.id}`}>
     <h1 className="text-xl mb-4 text-white font-bold">{note.title}</h1>
     <p className="text-gray-300">{note.note}</p>
      </Link>
     <div className="flex justify-between items-center">
            
         </div>
     </div>
 )
})} 

</div>
   
  )
}
