import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { } from 'react-icons/di';
import image from '../images/images1.png'

function Header() {
    const [clicked,setClicked] = useState(true)
    const handleMenu = ()=>{
        if(clicked === true) {setClicked(false)}
        if(clicked === false){
            setClicked(true)
        }
    }
    const navitems = [
        {
            name:"HOME",
            slug:"/",
        },
        {
            name:"CONTACT",
            slug:"/contact",
        },
        {
            name:"ABOUT",
            slug:"/about",
        },
        {
            name:"MENU",
            slug:"/menu",
        },
        {
            name:"GALLERY",
            slug:"/gallery",
        },

    ]
    return ( 
        <nav className='bg-orange-200 shadow-md shadow-orange-700 sticky  '>
             
        <div className='flex md:justify-between '>

            <span className='py- pl-5'><NavLink to="/"><img src={image} alt="" className='w-6/12' /></NavLink></span>

            <div className='flex   '>
                <ul className={`md:flex  mt-16  md:m-0     md:w-auto absolute right-0 md:right-16 ${clicked ? "mt-[-370px]":""} z-10 bg-orange-200`}>
                    {navitems.map((item)=>(<NavLink to={item.slug} key={item.name} onClick={()=>handleMenu()} ><li className=" w-screen md:w-auto px-7 text-center  font-mono py-6 hover:text-orange-500"><b>{item.name}</b></li></NavLink>))}

                    {/* {navitems.map((item)=>(<li key={item.name} className=" w-screen md:w-auto px-7 text-center  py-3 hover:bg-slate-300">{item.name}</li>))} */}
                                                            
                   
                </ul>
                <ul className='flex absolute text-2xl  right-0'>
                {/* <NavLink to="/cart" className="px-2 py-3 " ><li><IoCartOutline /></li></NavLink> */}
                <li onClick={()=>handleMenu()} className='md:hidden py-5 text-4xl px-2 md:px-6'> { clicked ? <IoMenuSharp/>:<IoCloseSharp/>} </li>
                </ul>
            </div>
        </div>

        </nav>
     );
}

export default Header;