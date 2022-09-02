import React, {createContext, useState, useEffect} from 'react'
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore'
import{db} from '../src/firebase'


export const NoteContext = createContext();

export const NoteProvider = props => {
    
    const [notes, setNotes] = useState([])
    const colRef = collection (db, 'Notes')
    const [isLoading, setIsloading] = useState(true)
       
    useEffect(()=>{
        const notess = async ()=>{
            const data = await getDocs(colRef);
            setNotes(data.docs.map((doc)=> ({...doc.data(), id:doc.id})))
            setIsloading(false)
        };
        notess(); 
    },[]) 

    function handleDelete(id) {
        const docRef = doc(db, "Notes", id)
         deleteDoc(docRef)
      }

  return (
    <div>
        <NoteContext.Provider value={[notes, setNotes, isLoading, setIsloading,handleDelete]}>
            {props.children}
        </NoteContext.Provider>
    </div>
  )
}
