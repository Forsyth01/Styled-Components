import React, { useContext, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { NoteContext } from './NoteContext';
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../src/firebase'



export const NoteDetails = () => {

    const [noteDetails, setNoteDetails] = useState([])
    const {id} = useParams()


        const docRef = doc(db, "Notes", id)
        onSnapshot( docRef, (doc) => {
            setNoteDetails(doc.data(), doc.id)
        })


    return (
        <div className="text-white">
            <h1 className="text-4xl-font-bold">{noteDetails.title}</h1>
            <h1 className="text-xl-font-bold">{noteDetails.note}</h1>
        </div>
    )
}
