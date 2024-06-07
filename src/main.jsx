import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// src/index.js or src/App.js

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

import { RouterProvider , Route  , createBrowserRouter , createRoutesFromElements} from 'react-router-dom'
import Layout from "./Components/Layout.jsx"

import {HomePage , OurProductsPage , MyCartPage , ContactUsPage , AboutUsPage , LoginPage , SignUpPage} from "./Pages"


const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route path='/' element=  {<Layout/>}>
       <Route path='' element={<HomePage/>}/>
       <Route path='products' element={<OurProductsPage/>}/>
       <Route path='cart' element={<MyCartPage/>}/>
       <Route path='contact' element={<ContactUsPage/>}/>
       <Route path='about' element={<AboutUsPage/>}/>
       <Route path='login' element={<LoginPage/>}/>
       <Route path='signup' element={<SignUpPage/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router= {router} />
      {/* <App/> */}
  </React.StrictMode>,
)
