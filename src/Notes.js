import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom';
import {AiOutlineDelete, AiOutlinePlus} from 'react-icons/ai'
import {useEffect, useState} from 'react'
import {collection, getDocs, deleteDoc, doc, orderBy, onSnapshot} from 'firebase/firestore'
import{db} from '../src/firebase'

const Notes = () => {
    const colRef = collection (db, 'Notes')
    const [notes, setNotes] = useState([])
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
        <div className="addnote">
            <div className="search contain flex items-center">
                 <SearchIcon className='absolute mx-2'/> 
              <input type="search" className="bg-gray-900 w-full rounded-full p-3 outline-none px-10"
              placeholder="Search notes"
              />
            </div>
            {isLoading && <div>Loading....</div>}
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
                        <div className="text-yellow-700">
                        <i onClick = {()=> handleDelete(note.id)}> <AiOutlineDelete className='text-2xl hover:text-yellow-60'/></i> 
                        </div>
                        <div className="text-yellow-70">
                          <i onClick = {()=> handleDelete(note.id)}> <AiOutlineDelete className='text-2xl hover:text-yellow-600'/></i> 
                        </div>
                    </div>
                </div>
            )
        })} 

            <div className="add sticky">  
                <Link to = "/addnote"> <AiOutlinePlus className=' absolute  right-[5%] bottom-[5%] bg-yellow-700 text-gray-100 p-2 hover:bg-yellow-600 rounded-full text-5xl'/></Link>
            </div>
        </div>
            

        </div>
     );
}
 
export default Notes;