import React, { useContext, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
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
        <div className="text-gray-200">
            <div className="m-auto w-[80%] pt-10 break-words whitespace-pre-wrap">
            <h1 className="text-3xl font-bold normal-case pb-3">{noteDetails.title}</h1>
            <h1 className="text-xl-">{noteDetails.note}</h1>
            </div>
        </div>
    )
}
