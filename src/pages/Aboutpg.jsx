import React from 'react';
function Aboutpg() {
    return ( <>
    <div className='h-full w-screen bg-orange-300 '>
    <div style={{ backgroundImage: 'url("/images/gallery1.jpg")',backgroundSize: 'cover', backgroundPosition: 'center'}}  >
      
      <h2 className='text-5xl font-extrabold text-center text-white py-32'>About Us</h2>
          </div>
          
        <div className="md:flex pb-10">

<div className="md:w-6/12 text-center "><h3 className="text-slate-800 font-bold text-2xl md:text-4xl py-10"><u> Our Vision</u></h3>
<p className='md:px-24 px-6 text-orange-900 text-lg font-bold md:font-extrabold'>
"At BurgerBlitz, we're redefining the burger experience with premium ingredients and bold flavors. Our mission is to create a welcoming community hub where every bite is a moment to savor. From classic recipes to innovative combinations, we cater to diverse tastes with passion and excellence. With a commitment to quality and hospitality, BurgerBlitz aims to be the go-to destination for burger enthusiasts everywhere. Join us in crafting unforgettable moments, one delicious burger at a time."</p>
</div>

<div className="md:w-6/12 text-center "><h3 className="text-slate-800 font-bold text-2xl md:text-4xl py-10"> <u> Our History</u></h3>
<p className='md:px-24 px-10 text-orange-900 text-lg font-bold md:font-extrabold'>
"BurgerBlitz began as a humble food truck in 2010, serving up gourmet burgers to hungry crowds with a passion for quality and flavor. Over the years, our dedication to excellence and innovation propelled us to establish our first brick-and-mortar location in 2015, where we continued to delight guests with our signature creations. As our reputation grew, so did our family of burger aficionados, inspiring us to expand our presence across cities and communities."</p>
</div>
        </div>

        <div className=" text-center "><h3 className="text-slate-800 font-bold text-2xl md:text-4xl py-10"> <u>Our Team</u></h3>
<p className='md:px-24 px-10 text-orange-900 text-lg font-bold md:font-extrabold'>
    
"At BurgerBlitz, our team is a passionate collective of culinary artists dedicated to crafting exceptional burgers that delight the senses. Led by our experienced chefs, each member brings expertise and creativity to the kitchen, "
</p>
</div>

<div className="md:flex  pt-14 ">

<div className="md:w-6/12 text-center py-10 bg-orange-100 ">
 <img src="/images/chef2.png" alt="" className='md:w-7/12 w-7/12 mx-auto border-red-500 border-4 '/>

</div>

<div className="md:w-6/12 px-6 md:px-16 bg-black text-white"><h3 className="text-slate-800 text-center font-serif text-2xl md:text-4xl py-10"> <span className="text-yellow-400">Mike</span> <span className='text-white'>Griffin</span></h3>
<p className='md:px-24 px-10  text-lg font-bold '>
Mike Griffin, our chef at BurgerBlitz, blends decades of culinary mastery with a passion for quality, crafting burgers that ignite taste buds with unforgettable flavors and meticulous attention to detail.
</p>
</div>
        </div>

        <div className="md:flex py-2">



        <div className="md:w-6/12 px-6 md:px-16 bg-black text-white"><h3 className="text-slate-800 text-center font-serif text-2xl md:text-4xl py-10"> <span className="text-yellow-400">Sophia</span> <span className='text-white'>Rodriguez</span></h3>
<p className='md:px-24 px-10  text-lg font-bold '>

Sophia Rodriguez, our chef at BurgerBlitz, seamlessly combines culinary expertise with a commitment to excellence, crafting burgers that tantalize taste buds with innovative flavors and precision.
</p>
</div>

<div className="md:w-6/12 text-center py-10 bg-orange-100 ">
 <img src="/images/chef1.png" alt="" className='md:w-7/12 w-7/12 mx-auto border-red-500 border-4 '/>

</div>


        </div>



    </div>
    </> );
}

export default Aboutpg;