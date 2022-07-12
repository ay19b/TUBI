import React from 'react'
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


function Navbar({searchTerm,handleOnChange,handleOnSubmit}) {
  const classes = useStyles();


  return (
    <nav className={classes.navbar}>
      
       <Grid container spacing={2} className={classes.listNav}>
        <Grid item xs={8} sm={4} className={classes.leftSide}>
          <NextLink href="/" passHref>
               <Image src={Logo} />
          </NextLink>
          <div>browser</div>
        </Grid>
        <Grid item xs={4} sm={4} onSubmit={handleOnSubmit}>
           <TextField
             id="outlined-hidden-label-small"
             size="small"
             variant="outlined"
             value={searchTerm}
             onChange={handleOnChange}
             placeholder="Find movies,TV shows and more"
             InputProps={{
             startAdornment: <InputAdornment position="start">
                               <HiSearch className={classes.iconSearch}/>
                             </InputAdornment> 
              }} 
           />
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