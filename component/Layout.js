import React, { useEffect, useState, Suspense } from 'react';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './footer/footer' 
import Navbar from './navbar/navbar' 
import Container from '@mui/material/Container';


export default function Layout({children,nav}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div>
      
      
      <CssBaseline />
        <Navbar searchTerm={searchTerm} handleOnChange={handleOnChange} nav={nav}/>
        
           {children}
       
        
	      <Footer />
      
      
    </div>
  );
}