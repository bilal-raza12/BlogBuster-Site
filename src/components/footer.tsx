import Link from "next/link"

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 bg-white shadow-lg pt-5 border-t ">
          <p className="text-sm inline-block border-b pb-5">&copy;2021 Blog Buster. All rights reserved.</p>
           <ul className="flex  mt-4 pt-4 mb-5  gap-4">
           <Link href={"/"}><li className="hover:text-blue-500 ">Home</li></Link>
           <Link href={"/"}><li className="hover:text-blue-500 ">About us</li></Link>
           <Link href={"/"}><li className="hover:text-blue-500 ">Contact us</li></Link>
               
            </ul> 
    </div>
  )
}

export default Footer