import React from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";

function Footer() {
    return ( <>
    <footer className=' bg-orange-100 md:py-11 w-screen  bottom-0 z-0 '>
        <div className="md:w-7/12 w-full md:flex flex-row items-center  md:mx-auto ">
<div className="w-1/4 text-center pt-5 mx-auto "> 
<h3 className='font-mono '><b>LOCATION</b></h3>
<p className='text-gray-600 text-sm w-full'>
Khayaban-e-Bukhari, 110/3 25th St, Phase 6, 110/3 25th St, Karachi, Pakistan
</p>
</div>

<div className="w-1/4 text-center pt-5 mx-auto"> 
<h3 className='font-mono '><b>WORKING HOURS</b></h3>
<p className='text-gray-600 text-sm'>
Mon-Fri 9am-10pm
</p>
<p className='text-gray-600 text-sm mx-auto'>
Saturday 7am-10pm
</p>

<p className='text-gray-600 text-sm'>
Sunday Closed
</p>
</div>

<div className="w-1/4 text-center pt-5 mx-auto"> 
<h3 className='font-mono '><b>ORDER NOW</b></h3>
<p className='text-gray-600 text-sm'>
Contact on this number for orders <br />
+92 0044 554
</p>
</div>

<div className="w-1/4 text-center py-5 mx-auto"> 
<h3 className='font-mono '><b>FOLLOW US</b></h3>
<p className='text-gray-600 text-sm'>
Follow us on social media
</p>

<div className='flex text-center text-gray-600 text-2xl justify-evenly pt-3'>
<IoLogoFacebook />
    <IoLogoInstagram />
<IoLogoTwitter />
<IoLogoYoutube />
</div>
</div>
        </div>
    </footer>
    </> );
}

export default Footer;