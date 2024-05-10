import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider }  from 'react-redux'
import { store } from './redux/store.js'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Aboutpg from './pages/Aboutpg.jsx'
import Contactpg from './pages/Contactpg.jsx'
import Menupg from './pages/Menupg.jsx'
import Gallerypg from './pages/Gallerypg.jsx'
import Homepg from './pages/Homepg.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

      <Route path='about' element={<Aboutpg/>}/>
      <Route path='contact' element={<Contactpg/>}/>
      <Route path='' element={<Homepg/>}/>
      <Route path='gallery' element={<Gallerypg/>}/>
      <Route path='menu' element={<Menupg/>}/>
      
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
