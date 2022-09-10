import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai'
import { useEffect, useState, useContext } from 'react'
import { NoteContext } from './NoteContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, deleteDoc, doc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore'
import { db } from '../src/firebase'
import Navbar from './Navbar';
import Notes from './Notes';

export const Home = () => {
    const [notes, setNotes, isLoading] = useContext(NoteContext)

    return (
        <div className="addnote">
            <Navbar />
            <div className="search contain flex items-center">
                <SearchIcon className='absolute mx-2' />
                <input type="search" className="bg-gray-900 w-full rounded-full p-3 outline-none px-10"
                    placeholder="Search notes"
                />
            </div>
            {isLoading && <div>Loading...</div>}
            <Notes />
            <div className="add  absolute right-[10%] bottom-[10%]">
                <Link to="/addnote"> <AiOutlinePlus className=' sticky bg-yellow-700 text-gray-100 p-2 hover:bg-yellow-600 rounded-full text-5xl' /></Link>
            </div>
        </div>
    );
}
