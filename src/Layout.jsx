import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router';
function Layout() {
    return ( <>
    <div className='relative overflow-hidden'>
<Header/>
{/* className="md:pb-52 pb-[512px]" */}
<div >
<Outlet/>
</div>
<Footer/>
</div>
    
    </> );
}

export default Layout;