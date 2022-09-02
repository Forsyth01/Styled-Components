import React, {useContext, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import { NoteContext } from './NoteContext';


export const NoteDetails = () => {
  const [notes] = useContext(NoteContext)
  const {id} = useParams()
  
  console.log(notes)

  return (
  
      <div className="text-white ">
         
          {/* <h1>Hello </h1>
          <h1>{notes.title}</h1>
          {notes.map((note)=>{
            <div className="">
              <h1>{note.title}</h1>
            </div>
          })} */}
        </div>
  )
}
