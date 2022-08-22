import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import {HiSearch} from "react-icons/hi";
import useStyles from './style';
import Logo from '../../public/logo.png'
import NextLink from 'next/link'
import Image from 'next/image';
import { useRouter } from "next/router";
import classn from './nav.module.css';

function Navbar() {
  const classes = useStyles();
  const router = useRouter();
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showLinks, setShowLinks] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [nav, setNav] = useState(false);
  

  const toggleLinks = () => {
      setShowLinks(!showLinks);
  };

  
 const changeBackground=()=>{
    if(window.scrollY>=60){
      setNavbar(true)
      setNav(false)
    }else{
      setNavbar(false)
      setNav(true)
    }
  }

useEffect(() => {
  changeBackground()
  window.addEventListener('scroll',changeBackground) 
  if(showLinks){
    setNavbar(false)
  }
})

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSearch(false);
    router.push(`/search/${searchText}`);
  };

 
  return (
    <nav className={!navbar?classes.navbar :classes.active}>
      
       <Grid container spacing={2} className={!navbar?classes.listNav: classes.listNavActive}>
        <Grid item xs={8} sm={4} className={classes.leftSide}>
          <NextLink href="/" passHref>
               <Image src={Logo} />
          </NextLink>
          <div>browser</div>
        </Grid>
        <Grid item xs={4} sm={4}>
        <form onSubmit={handleSubmit}>
           <TextField
             id="outlined-hidden-label-small"
             size="small"
             variant="outlined"
             value={searchText}
             onChange={(e) => setSearchText(e.target.value)}
             placeholder="Find movies,TV shows and more"
             InputProps={{
             startAdornment: <InputAdornment position="start">
                               <HiSearch className={classes.iconSearch}/>
                             </InputAdornment> 
              }} 
           />
          </form> 
        </Grid>
        <Grid item xs={4} sm={4} className={classes.rightSide}>
          <Button  className={classes.btnRgst}>Register</Button>
          <Button className={classes.btnSng}>Sign in</Button>
        </Grid>
       </Grid>
      
    </nav>

  )
}

export default Navbar