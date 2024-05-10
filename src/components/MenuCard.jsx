import React from 'react';
function MenuCard({
imgSrc = "/images/res1.jpg",
price = "5$",
itemName = "Crispy Mighty Zinger"
}) {
    return ( 
        <>
        <div className="w-[240px]  md:w-[300px] mx-auto bg-orange-100 shadow-md shadow-orange-800 border rounded-lg flex p-2 my-4 ">
        <img src={imgSrc}  className='h-16 w-18' />
        <div className="bg-orange-100 pt-1 pl-5">
            <div className=' text-slate-600 twinkle-star-regular font-bold '><h6><b>{itemName} </b></h6></div>
            <span className="  font-bold ">Price : {price}</span>
        </div>

        
        </div>
        </>
     );
}

export default MenuCard;