"use client"
import {useState} from 'react'
import Image from 'next/image'
import { FaUserAlt } from "react-icons/fa";
export interface IBlogPost {
  slug:string
    title:string,
    content:string,
    author: string,
    publishdate: string,
    imageURL:string,
}
const BlogPost = ({title , author , publishdate , imageURL , content}:IBlogPost) => {
  const [comments , setComments] = useState<{name:string , comment:string}[]>([]);
  const [newComments , setNewComments] = useState<string>("");
  const [name,setName] = useState<string>();
  const handleComments = () => {
    if(newComments.trim()) {
        setComments([...comments, {name,comment:newComments}]);
        setName("");
      setNewComments("");
      
    }
  }
    return (

    <article className='prose lg:prose-lg mx-auto bg-[#ffffff]'>
         <Image src={imageURL} alt={title} width={800} height={900} className='md:w-full w-[300px] h-[300px] md:h-[400px] object-cover rounded-md'></Image>
         <h1 className='sm:text-3xl text-xl font-extrabold mt-2'>{title}</h1>
         <h2 className='text-sm text-blue-500 mt-2'>By {author} on {publishdate}</h2>
         <div className="mt-6 text-xs sm:text-sm ">{content}</div>
         <div className="mt-8">
          <h2>Comments {comments.length}</h2>
          <div className="mt-4">
            <input type="text" className='block w-full p-2 mb-2 border border-black rounded-lg' placeholder='Your name..' value={name} onChange={(e) => setName(e.target.value)}/>
            <textarea className='block w-full p-4 border-[1px] border-black rounded-lg ' rows={4} value={newComments} onChange={(e) => setNewComments(e.target.value)} placeholder='Add your comment here...'></textarea>
            <button className='bg-blue-500 mt-4 rounded-md hover:bg-blue-700 text-white px-4 py-2' onClick={handleComments}>Add comment</button>
          </div>
          <div className="mt-6">
            {comments.map((c,i) => (
              <div className=' bg-white w-[300px] sm:w-[400px] border-[1px] shadow-lg p-4 mb-4'>

              <div className='flex gap-3 '>
                <div className='w-10 h-10'><FaUserAlt className='text-blue-800 w-8 h-8'/></div>
                <h1 className='font-semibold text-xl'>{c.name}</h1>
              </div>
              <div  className='mb-4 h-auto  '>
                
                <h1 className='text-xs'>"{c.comment}"</h1>
              </div>
              </div>
              
            ))}
          </div>



           
         
         </div>
    </article>
  )
}

export default BlogPost