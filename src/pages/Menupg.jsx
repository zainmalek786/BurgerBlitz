import React, { useState,useEffect } from 'react';
import MenuCard from '../components/MenuCard';
import { IoSearchCircle } from "react-icons/io5";


function menupg() {
    const [value,setValue] = useState("")
    const [filteredMenuItems,setFilteredMenuItems] = useState([])
    const handleChange = (e) => {
        setValue(e.target.value)
       }


       const menuItems = [
        {
            itemName : "Beef Vaggie Burger",
            category : "burger",
            imgSrc : "/images/res13.jpeg",
            price : "9$"
        },
        {
            itemName : "Beef Chese Burger",
            category : "burger",
            imgSrc : "/images/res14.jpeg",
            price : "4$"
        },
        {
            itemName : "Messy Meat Burger",
            category : "burger",
            price:"5$",
            imgSrc : "/images/res15.jpeg",
            
        },
        {
            itemName : "Smoky tang Burger",
            category : "burger",
            price:"5$",
            imgSrc : "/images/res16.jpeg",
            
        },
        {
            itemName : "Fire Bird Burger",
            category : "burger",
            price:"5$",
            imgSrc : "/images/res20.jpeg",
            
        },
        {
            itemName : "Chilli Blast",
            category : "burger",
            price:" 6$",
            imgSrc : "/images/burger.png",
            
        },
        {
            itemName : "Grilled Chicken Burger",
            category : "burger",
            price:"5$",
            imgSrc : "/images/burger1.png",
            
        },
        {
            itemName : "Chick n Crisp",
            category : "burger",
            price:" 4$",
            imgSrc : "/images/res16.jpeg",
            
        },
        {
            itemName : "Wild Fries",
            category : "snacksanddrinks",
            price:"6$",
            imgSrc : "/images/wildfries.jpeg",
            
        },
        {
            itemName : "Chese burger Fries",
            category : "snacksanddrinks",
            price:"3$",
            imgSrc : "/images/chesefries.jpeg",
            
        },
        {
            itemName : "Zesty BBQ Fries",
            category : "snacksanddrinks",
            price:"9$",
            imgSrc : "/images/bbqfries.jpeg",
            
        },
        {
            itemName : "Soft Drinks",
            category : "snacksanddrinks",
            price:"2$",
            imgSrc : "/images/drink.jpeg",
            
        },
        {
            itemName : "Mineral Water",
            category : "snacksanddrinks",
            price:"5$",
            imgSrc : "/images/water.jpeg",
            
        },
        {
            itemName : "Fresh Lime",
            category : "snacksanddrinks",
            price:"1$",
            imgSrc : "/images/lime.jpeg",
            
        },
        {
            itemName : "Nuggets",
            category : "rollnchick",
            price:"4$",
            imgSrc : "/images/nugget.jpeg",
            
        },
        {
            itemName : "Crispy Wings",
            category : "rollnchick",
            price:"3$",
            imgSrc : "/images/wings.jpeg",
        },
        {
            itemName : "Peri Bites",
            category : "rollnchick",
            price:"4$",
            imgSrc : "/images/bites.jpeg",
        },
        {
            itemName : "Chicken Roll",
            category : "rollnchick",
            price:"2",
            imgSrc : "/images/chichkenroll.jpeg",
        },
        {
            itemName : "Zinger Roll",
            category : "rollnchick",
            price:"3$",
            imgSrc : "/images/zingerroll.jpeg",
        },
        {
            itemName : "Zinger Mayo Roll",
            category : "rollnchick",
            price:"5$",
            imgSrc : "/images/mayoroll.jpeg",
        },
        {
            itemName : "Beef Roll",
            category : "rollnchick",
            price:"5$",
            imgSrc : "/images/beefroll.jpeg",
        },
        
       ]

       useEffect(() => {
       const filteredItems = menuItems.filter( item => {
            return item.itemName.toLowerCase().includes(value.toLowerCase())
        })
         setFilteredMenuItems(filteredItems)
       }, [value]);


    return (  <>

    <div className={`h-full min-h-screen w-screen bg-gradient-to-br from-orange-400  to-orange-600  `}>

    <div style={{ backgroundImage: 'url("/images/gallery1.jpg")',backgroundSize: 'cover', backgroundPosition: 'center'}}  >
      
      <h2 className='text-5xl font-extrabold text-center text-white py-32'>Our Menu</h2>
          </div>
          

   <div className=' w-[330px] mx-auto rounded-3xl flex pt-10 '> <input type="text" value={value} onChange={handleChange} className=' rounded-2xl h-10 border-none max-[300px] w-[300px]' placeholder='Search Here' /></div>

<div className={` w-screen   ${value? 'hidden' : ' md:flex'}`} >

<div className="md:w-4/12 pt-14 ">
<h2 className="twinkle-star-regular text-5xl text-r text-center font-extrabold"> <u>Burgers</u></h2>
{menuItems.map((item)=>{
    
    return item.category == "burger" ? <MenuCard itemName={item.itemName} imgSrc={item.imgSrc} price={item.price}  /> : null })}
</div>

<div className="md:w-4/12 pt-14 ">
<h2 className="twinkle-star-regular text-5xl text-r text-center font-extrabold"> <u>Chicken & Rolls</u></h2>
{menuItems.map((item)=>{
    
    return item.category == "rollnchick" ? <MenuCard itemName={item.itemName} imgSrc={item.imgSrc} price={item.price}  /> : null })}
</div>


<div className="md:w-4/12 pt-14 ">
<h2 className="twinkle-star-regular text-5xl text-r text-center font-extrabold"> <u>Snacks & Drinks</u></h2>
{menuItems.map((item)=>{
    
    return item.category == "snacksanddrinks" ? <MenuCard itemName={item.itemName} imgSrc={item.imgSrc} price={item.price}  /> : null })}
</div>

</div>
<h1 className={` ${ value ? "": "hidden"} py-10 text-center text-2xl font-bold text-orange-300`}>Results for " {value} "</h1>
<div className={`w-screen ${value ? "grid" : "hidden"}  gap-[40px] pt-14` } style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr)) ' }} >

    {filteredMenuItems.map((item)=>{
        return <MenuCard itemName={item.itemName} price={item.price}  /> 
    })}

</div>

   
    </div>
    </>);
}

export default menupg;