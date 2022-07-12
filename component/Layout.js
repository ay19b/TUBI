import React from 'react';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './footer/footer' 
import Navbar from './navbar/navbar' 


export default function Layout({children }) {
  


  return (
    <div>
      
      
        <CssBaseline />
        <Navbar />
        {children}
	      <Footer />
      
      
    </div>
  );
}