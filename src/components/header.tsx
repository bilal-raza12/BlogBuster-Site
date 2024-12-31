"use client"
import { FaBars , FaTimes } from "react-icons/fa"
import { useState } from "react"
import Link from "next/link"
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  return (
    <header className="w-full md:px-4 px-2 shadow-lg md:py-3 py-2  sticky top-0 bg-white z-40">
          <nav className=" flex items-center justify-between">
          <h1 className="md:text-5xl text-3xl font-bold border-tr-black"><span className="text-blue-400">B</span>log<span className="text-blue-400">B</span>uster</h1>
          <button className="w-6 h-6 md:hidden inline-flex" onClick={() => handleToggle()}>
            {toggle ? <FaTimes className="mt-[1.5px] ml-[2px]"/> : <FaBars className="mt-[1.5px] ml-[2px]"/>}
          </button>
          {toggle && (
            <ul className=" flex flex-col z-30 items-end space-y-5  mx-auto w-[220px] h-[100vh] bg-blue-500 absolute top-[40px] right-0 pt-4">
            <li className="mx-auto hover:text-blue-400 "> <Link href={"/"}>Home</Link> </li>
              <li className="mx-auto hover:text-blue-400 "><Link href={"/about"}>About us</Link></li>
              <li className="mx-auto hover:text-blue-400 "><Link href={"/contact"}>Contact us</Link></li>

            </ul> 
          )}
            <ul className="flex space-x-9 hidden lg:inline-flex">
              <Link href={"/"}><li className="cursor-pointer hover:text-blue-400">Home</li></Link>
              
             <Link href={"/about"}><li className="cursor-pointer hover:text-blue-400">About us</li></Link>
              <Link href={"contact"}><li className="cursor-pointer hover:text-blue-400">Contact us</li></Link>

            </ul>

            
            </nav>

            <div className="border-[1px] border-opacity-[10%] md:mt-5 mt-3 "></div>
            
    </header>
  )
}

export default Header