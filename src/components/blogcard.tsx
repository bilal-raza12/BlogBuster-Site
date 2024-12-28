import Image from "next/image"
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link"
export interface IBlogCard {
    slug:string,
    imageURL:string,
    title:string,
    description: string,
    author: string,
    publishdate: string,
}





const BlogCard = ({slug , title , imageURL , description , publishdate , author}:IBlogCard) => {
  return (
    <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
       <Image src={imageURL} alt={title} width={400} height={250} className="h-48 rounded-lg object-cover w-full"></Image>
        <h2 className="mt-2 text-xl font-bold">{title}</h2>
        <p className="text-sm text-blue-300 mt-2">By {author} on {publishdate}</p>
        <p className="mt-2 text-xs mb-2 leading-tight">{description}</p>
        <div className="flex gap-3 justify-center">
  

        <Link href={`/blog/${slug}`} className="text-blue-500 text-xs ">Read More</Link>
        <div className="w-6 h-6"><BsArrowRight className="text-blue-500"/></div>
        </div>
  
    </div>
  )
}

export default BlogCard