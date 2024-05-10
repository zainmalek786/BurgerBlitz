import React from 'react';
import Button from '../components/Button'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

function Contactpg() {
    return ( <>
    <div className='h-full w-screen bg-orange-400 '>
    <div style={{ backgroundImage: 'url("/images/gallery1.jpg")',backgroundSize: 'cover', backgroundPosition: 'center'}}  >
      
      <h2 className='text-5xl font-extrabold text-center text-white py-32'>Contact Us</h2>
          </div>
          
        <div className="md:flex"> 
        <div className="md:w-6/12 bg-orange-400 ">
        <div className='flex md:text-2xl pt-12 pl-10 font-serif'><div className='md:text-4xl pr-3'><b><IoPhonePortraitOutline/></b></div> <div><b>+00 2834 3444 32</b></div> </div>
        <div className='flex md:text-2xl pt-12 pl-10 font-serif'><div className='md:text-4xl pr-3'><b><IoMailOpenOutline/></b></div> <div><b>Burerblitz@gmail.com</b></div> </div>
        <div className='flex md:text-2xl py-12 pl-10 font-serif'><div className='md:text-4xl pr-3'><b><IoLocationOutline/></b></div> <div><b>Khayaban-e-Bukhari, 110/3 25th St, Phase 6, 110/3 25th St, Karachi, Pakistan</b></div> </div>
        </div>
        <div className="md:w-6/12 bg-orange-200 text-center">
   <h3 className='font-bold text-3xl py-5'> Send Us </h3>

<input type="text" placeholder='Name' className='border-none rounded-none h-10 w-[230px] mt-5' />
<br />
<input type="text" placeholder='Email' className='border-none rounded-none h-10 w-[230px] mt-5' />
<br />
<input type="text" placeholder='Type your Meassage...' className='border-none rounded-none h-36 w-[230px] mt-5' />
<br />
<Button value='Submit' className='my-5'/>
        </div>
        </div>

        <div className="h-full pt-7 ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57937.83595517205!2d67.07343792167968!3d24.825749200000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33bd03678ba35%3A0xff8caf222b332962!2sShinwari%20Tarka%20Restaurant%20and%20B.B.Q!5e0!3m2!1sen!2s!4v1715283618206!5m2!1sen!2s" className='w-screen h-[500px]' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
    </div>
    </> );
}

export default Contactpg;