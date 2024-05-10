import React from 'react';
import Hero from '../components/Hero';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from '../components/Review';
import Button from '../components/Button';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
function Homepg() {

    const reviewItem = [
        {
            name : "Emily Cooper",
            imgSrc:"/images/review1.jpeg",

        },
        {
            name : "Lily Anderson",
            imgSrc:"/images/review2.jpeg",

        },
        {
            name : "Abdul Maalik",
            imgSrc:"/images/review3.jpeg",

        },
        {
            name : "Hitesh ",
            imgSrc:"/images/review4.jpeg",

        },
        {
            name : "Mitchel Taylor",
            imgSrc:"/images/review5.jpeg",

        },
        {
            name : "Hannah kazrk",
            imgSrc:"/images/review6.jpeg",

        },
    ]
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 700,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    //   };


    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768, // Adjust this breakpoint according to your design
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
    return ( <>
    <div className='w-screen h-full pb-10 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 '>
    
    <Hero/>

    </div>
    <div className='bg-orange-200 py-10'>
    <h1 className="twinkle-star-regular text-center md:text-6xl text-3xl pt-5 pb-10 text-orange-800 "> <b>Featured Dishes </b></h1>
    <div className=' sm:flex text-center content-center mx-auto px-10 '>


        <div className="mx-auto rounded-lg w-48  bg-slate-200 shadow-lg p-3 shadow-orange-900  md:my-5">
            <div className=" p-3"><img src="/images/res20.jpeg" alt="" className='rounded-lg w-36'/></div>
            <h5 className='font-extrabold text-orange-900 py-1 text-xl'> <u>Beef Burger</u></h5>
            <p className=' text-sm'>Succulent beef patty, savory cheese, irresistible indulgence.</p>
        </div>

        <div className=" mx-auto rounded-lg w-48  bg-slate-200 shadow-lg p-3 shadow-orange-900  md:my-5">
            <div className=" p-3"><img src="/images/res13.jpeg" alt="" className='rounded-lg w-36'/></div>
            <h5 className='font-extrabold text-orange-900 py-1 text-xl'> <u>Chili Blast</u></h5>
            <p className=' text-sm'>Succulent beef patty, savory cheese, irresistible indulgence.</p>
        </div>

        <div className=" mx-auto rounded-lg w-48  bg-slate-200 shadow-lg p-3 shadow-orange-900  md:my-5">
            <div className=" p-3"><img src="/images/res15.jpeg" alt="" className='rounded-lg w-36'/></div>
            <h5 className='font-extrabold text-orange-900 py-1 text-xl'> <u>Messy Meat</u></h5>
            <p className=' text-sm'>Succulent beef patty, savory cheese, irresistible indulgence.</p>
        </div>
    </div></div>


    <div className=' h-full pb-10 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 py-10 '>
    <h1 className="twinkle-star-regular text-center md:text-6xl text-3xl pt-5 pb-10 text-orange-200 "> <b>Customers' Review</b></h1>
<Slider {...settings} >

{reviewItem.map((item)=>( <Review name={item.name} imgSrc={item.imgSrc} />))}
</Slider>
</div>
<div className=" bg-orange-200 py-14 text-center ">


<h1 className="twinkle-star-regular text-center md:text-6xl text-3xl pt-5 py-10 text-orange-800 "> <b>Contact Us </b></h1>
<p className='text-orange-950'>Contact us for reserving your seats in our resturent for wonderfull and amazing experience and enjoy our delicious meals</p>

<NavLink to='/contact' >
<Button value='Contact Us' className='my-10'/>
</NavLink>
</div>


  
    </> );
}

export default Homepg;