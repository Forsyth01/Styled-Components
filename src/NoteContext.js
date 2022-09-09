import React, { createContext, useState, useEffect } from 'react'
import { getDocs, deleteDoc, doc, onSnapshot, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../src/firebase'


export const NoteContext = createContext();
export const NoteProvider = props => {

    const [notes, setNotes] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const colRef = collection(db, "Notes")
    const q = query(colRef, orderBy('createdAt', 'desc'))

    useEffect(() =>
        onSnapshot(q, (snapshot) => {
            setNotes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            setIsloading(false)
        })
        , [])


    return (
        <div>
            <NoteContext.Provider value={[notes, setNotes, isLoading, setIsloading]}>
                {props.children}
            </NoteContext.Provider>
        </div>
    )
}
