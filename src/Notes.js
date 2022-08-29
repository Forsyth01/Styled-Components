import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom';
import {AiOutlineDelete, AiOutlinePlus} from 'react-icons/ai'
import {useEffect, useState} from 'react'
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore'
import{db} from '../src/firebase'

const Notes = () => {
    const colRef = collection (db, 'Notes')
    const [notes, setNotes] = useState([])

    useEffect(()=>{
        getDocs(colRef)
        
        const notess = async ()=>{
            const data = await getDocs(colRef);
            setNotes(data.docs.map((doc)=> ({...doc.data(), id:doc.id})))
        };
        notess(); 
        
    },[]) 

    // const handleDelete = ()=>{
    //     const colRef = doc("Notes" )
    //     deleteDoc(colRef)
    //     .then(()=>{
    //         alert("deleted")
    //     })
    //     console.log(colRef)
    //     // addDoc(colRef, {
    //     //     title: title,
    //     //     note: details
    //     //  })
    // }
    
function handleDelete(){
    const docRef = doc(db, "Notes", notes.id)
    deleteDoc(docRef)
    .then(()=>{
        alert('sucess')
    })
}
    return ( 
        <div className="addnote">
            <div className="search contain flex items-center">
                 <SearchIcon className='absolute mx-2'/> 
              <input type="search" className="bg-gray-900 w-full rounded-full p-3 outline-none px-10"
              placeholder="Search notes"
              />
            </div>
            
            <div className="  grid md:grid-cols-4 grid-cols-3  gap-5 w-auto my-10">
               {notes.map((note)=>{
               return (
                <div 
                className="bg-gray-900 lets p-3 rounded-xl hover:scale-[101%] duration-700" > 
                <h1 className="text-xl mb-3 text-white">{note.title}</h1>
                <p className="text-gray-300">{note.note}</p>
                
                <span className="flex py-2 justify-between">
                        <div className="text-yellow-700">
                            <p>Time</p>
                        </div>
                        <div className="text-yellow-700">
                          <i onClick = {handleDelete}> <AiOutlineDelete className='text-2xl hover:text-yellow-600'/></i> 
                        </div>
                    </span>
                </div>
            )
        })} 

        </div>
            

            <div className="add sticky bottom-[10%]  ">
               
                <Link to = "/addnote"> <AiOutlinePlus className=' absolute right-[5%]  bg-yellow-700 text-gray-100 p-2 hover:bg-yellow-600 rounded-full text-5xl'/></Link>
            </div>
        </div>
     );
}
 
export default Notes;