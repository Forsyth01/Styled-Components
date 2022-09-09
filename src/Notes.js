import SearchIcon from '@mui/icons-material/Search'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai'
import { useEffect, useState, useContext } from 'react'
import { NoteContext } from './NoteContext';
import { getAuth } from 'firebase/auth'
import { db } from '../src/firebase'
import { getDocs, deleteDoc, doc, onSnapshot, collection, query, orderBy } from 'firebase/firestore'



const Notes = () => {

    // const [notes, setNotes] = useContext(NoteContext)
    const auth = getAuth();

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

    function handleDelete(id) {
        const docRef = doc(db, "Notes", id)
        deleteDoc(docRef)
    }


    return (
        <div className="addnote">

            {/* {notes.map((note) => {
                <div
                    className="">
                    {note.creator.id === auth.currentUser.uid && <div className="bg-gray-900 p-3 h-fit rounded-xl hover:scale-[101%] duration-700 w-[100%]">
                        <Link to={`/notes/${note.id}`}>
                            <h1 className="text-xl mb-4 text-white font-bold">{note.title}</h1>
                            <p className="text-gray-300">{note.note}</p>
                        </Link>
                        <div className="flex justify-between items-center">
                            <div className="text-yellow-700">
                                <p>{note.createdAt}</p>
                            </div>
                            <div className="text-yellow-70">
                                <i onClick={() => handleDelete(note.id)}> <AiOutlineDelete className='text-2xl hover:text-yellow-600' /></i>
                            </div>
                        </div>
                    </div>}
                </div>
            })} */}
            
            <div className="grid cursor-pointer break-words whitespace-pre-wrap overflow-hidden md:grid-cols-3 grid-cols-2 xl:grid-cols-4 gap-5 m-auto my-10 ">
                {notes.map((note) => {
                    return (
                        <div className="bg-gray-900 p-3 rounded-xl h-fit ">
                            <div className="">
                                <Link to={`/notes/${note.id}`}>
                                    <h1 className="font-bold uppercase mb-3">{note.title}</h1>
                                    <h1 className="mb-3">{note.note}</h1>
                                </Link>

                                <div className="flex justify-between items-center">
                                    <div className="text-yellow-700">
                                        <i className=''>date</i>
                                    </div>
                                    <div className="text-yellow-70">
                                        <i onClick={() => handleDelete(note.id)}> <AiOutlineDelete className='text-xl hover:text-yellow-600' /></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="add  absolute right-[10%] bottom-[10%]">
                <Link to="/addnote"> <AiOutlinePlus className=' sticky bg-yellow-700 text-gray-100 p-2 hover:bg-yellow-600 rounded-full text-5xl' /></Link>
            </div>

        </div>
    );
}

export default Notes;