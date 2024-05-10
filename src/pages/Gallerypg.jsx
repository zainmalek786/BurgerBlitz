import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendData } from '../redux/reduxSlice';
import { IoCloseSharp } from "react-icons/io5";
function Gallerypg() {
   const selectedSrc = useSelector( state => state.reduxSlice.cardArray)
   const dispatch = useDispatch()
   
   const [clicked,setClicked] = useState(false)
   const manageClick =(imgurl)=>{
    setClicked(!clicked)
    dispatch(sendData(imgurl))
    
   }
const card = [
    {
        url :'/images/res1.jpg',
        id : 1
    },
    {
        url :'/images/res2.jpeg',
        id : 2
    },
    {
        url :'/images/res3.jpeg',
        id : 3
    },
    {
        url :'/images/res4.jpeg',
        id : 4
    },
    {
        url :'/images/res5.jpeg',
        id : 5
    },
    {
        url :'/images/res6.jpeg',
        id : 6
    },
    {
        url :'/images/res7.jpeg',
        id : 7
    },
    {
        url :'/images/res8.jpeg',
        id : 8
    },
    {
        url :'/images/res9.jpeg',
        id : 9
    },
    {
        url :'/images/res10.jpeg',
        id : 10
    },
    {
        url :'/images/res11.jpeg',
        id : 11
    },
    {
        url :'/images/res12.jpeg',
        id : 12
    },
    {
        url :'/images/res13.jpeg',
        id : 13
    },
    {
        url :'/images/res14.jpeg',
        id : 14
    },
    {
        url :'/images/res15.jpeg',
        id : 15
    },
    {
        url :'/images/res16.jpeg',
        id : 16
    },
    {
        url :'/images/res17.jpeg',
        id : 17
    },
    {
        url :'/images/res18.jpeg',
        id : 18
    },
    {
        url :'/images/res19.jpeg',
        id : 19
    },
    {
        url :'/images/res20.jpeg',
        id : 20
    },
 
  
  
]
    return ( <>

    <div style={{ backgroundImage: 'url("/images/gallery1.jpg")',backgroundSize: 'cover', backgroundPosition: 'center'}}  >
      
<h2 className='text-5xl font-extrabold text-center text-white py-32'> Take a look inside</h2>
    </div>
    


    <div className='h-full w-screen  bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700  '><div className="grid  pr-5 mx-10  py-20  gap-[30px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }} >
    {/* <h1>{selectedSrc[0].cardSrc}</h1> */}
    {card.map((item)=>{ return <div className=' ' onClick={()=>(manageClick(item.url))}><img src={item.url} className=' h-full w-full bg-black' /> </div>})}
    
    </div>
    

    <div className={` h-screen w-screen ${clicked ? "flex flex-col ":"hidden"} bg-orange-400 bg-opacity-90   fixed top-0 left-0  justify-center`}  >
       <div className=''>
        <IoCloseSharp className='bg-slate-50 text-4xl absolute right-20 top-10 ' onClick={()=>(manageClick())}/>
        <img src={selectedSrc[0].cardSrc} alt="" className='mx-auto h-72 border border-10 border-orange-700 ' /></div>
        </div>
    
    
    </div>
    

    

    </> );
}

export default Gallerypg;