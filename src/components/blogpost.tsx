"use client"
import {useState} from 'react'
import Image from 'next/image'
export interface IBlogPost {
  slug:string
    title:string,
    content:string,
    author: string,
    publishdate: string,
    imageURL:string,
}
const BlogPost = ({title , author , publishdate , imageURL , content}:IBlogPost) => {
  const [comments , setComments] = useState<string[]>([]);
  const [newComments , setNewComments] = useState<string>("");
  const handleComments = () => {
    if(newComments.trim()) {
        setComments([...comments, newComments]);
      setNewComments("");
    }
  }
    return (

    <article className='prose lg:prose-lg mx-auto'>
         <Image src={imageURL} alt={title} width={800} height={900} className='w-full h-[400px] object-cover rounded-md'></Image>
         <h2 className='text-sm text-blue-500'>By {author} on {publishdate}</h2>
         <div className="mt-6 text-sm">{content}</div>
         
    </article>
  )
}

export default BlogPost