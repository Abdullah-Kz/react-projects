import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.js'
import Banner from './Components/Banner.js'
import Aboutandservices from './Components/aboutandservices.js'
import Portfolioandcontact from './Components/Portfolioandcontact.js'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<Banner />} />
        <Route path='services' element={<Aboutandservices />} />
        <Route path ='portfolio' element={<Portfolioandcontact />} />
</Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
