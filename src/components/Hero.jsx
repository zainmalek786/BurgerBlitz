import React from 'react';
// import burger from '../images/burger1.png'
import images1 from '../images/images1.png'
import Button from './Button';
function Hero() {
    return ( <>
    <div className="w-screen h-screen  bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 md:flex">

        <div className="md:w-6/12  ">
        <img src='/images/burger1.png' className='md:h-full md:w-auto w-64 mx-auto md:py-8 py-4' />

        {/* <img src=../im className='md:h-full md:w-auto w-64 mx-auto py-8 ' /> */}
        </div>
      
        <div className="md:w-6/12  text-center md:pt-24  "><h2 className='md:text-5xl text-3xl twinkle-star-regular text-orange-200 '>
            
            <b >Welcome to</b> </h2>
            <div className='mx-auto'><img src={images1} alt="" className='mx-auto md:w-auto w-60' /></div>
            <p className='md:px-16 text-orange-200 font-semibold text-sm md:text-lg'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, impedit. ipsum, dolor sit amet consectetur adipisicing elit. Cum perferendis quod impedit dolore harum inventore adipisci distinctio in excepturi tempora.</p>
            <Button value='Reserve Now' className='mt-6'/>
            </div> 

            
    </div>
    </> );
}

export default Hero;