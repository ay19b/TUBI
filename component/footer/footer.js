import React from "react";
import useStyles from './style';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import {GrFacebookOption} from 'react-icons/gr'
import {AiFillYoutube} from 'react-icons/ai'
import Logo from '../../public/logo.png'
import NextLink from 'next/link'
import Image from 'next/image';

const Footer = () => {
 
  const classes = useStyles();
  
  return (
    <div>
      <Container>
	  <Grid container spacing={2} className={classes.headFooter} >
        <Grid item xs={8} sm={4} className={classes.titleFooter} >
		  <NextLink href="/" passHref>
               <Image src={Logo} />
          </NextLink>
		  <Divider className={classes.divider}/>
        </Grid>
        <Grid item xs={4} sm={4}>
           <div className={classes.icons} >
             <li className={classes.item}><Typography variant='h6' className={classes.icon}><BsTwitter /></Typography></li>
             <li className={classes.item}><Typography variant='h6' className={classes.icon}><GrFacebookOption /></Typography></li>
             <li className={classes.item}><Typography variant='h6' className={classes.icon}><FiInstagram /></Typography></li>
             <li className={classes.item}><Typography variant='h6' className={classes.icon}><AiFillYoutube/></Typography></li>
           </div>
		   <Divider className={classes.divider}/>
        </Grid>
       </Grid>
       <Grid container spacing={2}>
           <Grid item sm={6} xs={12} md={3}>
				     <ul className={classes.listItem}>
					   <Typography variant="subtitle1" className={classes.headerList}>COMPANY</Typography>
					   <li className={classes.item}><Typography variant="caption">About Us</Typography></li>
					   <li className={classes.item}><Typography variant="caption">Careers</Typography></li>
					   <li className={classes.item}><Typography variant="caption">Contact</Typography></li>
					 </ul>
				  </Grid>
				  
				  <Grid item sm={6} xs={12} md={3}>
				     <ul className={classes.listItem}>
					   <Typography variant="subtitle1" className={classes.headerList}>SUPPORT</Typography>
					   <li className={classes.item}><Typography variant="caption">Contact Support</Typography></li>
					   <li className={classes.item}><Typography variant="caption">Help Center</Typography></li>
					   <li className={classes.item}><Typography variant="caption">Supported Devices</Typography></li>
					   <li className={classes.item}><Typography variant="caption">Activate Your Device</Typography></li>
					 </ul>
				  </Grid>
				  
				  <Grid item sm={6} xs={12} md={3}>
				     <ul className={classes.listItem}>
					   <Typography variant="subtitle1" className={classes.headerList}>PARTNERS</Typography>
					   <li className={classes.item}><Typography variant="caption">Advertise with Us</Typography></li>
					   <li className={classes.item}><Typography variant="caption">Partner with Us</Typography></li>
					 </ul>
				  </Grid>
				  
				  <Grid item sm={6} xs={12} md={3}>
				     <ul className={classes.listItem}>
					   <Typography variant="subtitle1" className={classes.headerList}>GET THE APPS</Typography>
					   <li className={classes.item}><Typography variant="caption">iOS</Typography></li>
					   <li className={classes.item}><Typography variant="caption">Android</Typography></li>
					   <li className={classes.item}><Typography variant="caption">Roku</Typography></li>
					   <li className={classes.item}><Typography variant="caption">Amazon Fire</Typography></li>
					 </ul>
				  </Grid>

          <Grid item sm={6} xs={12} md={3}>
				    <ul className={classes.listItem}>
					   <Typography variant="subtitle1" className={classes.headerList}>PRESS</Typography>
					   <li className={classes.item}><Typography variant="caption">Press Releases</Typography></li>
					   <li className={classes.item}><Typography variant="caption">Tubi in the News</Typography></li>
					  </ul>
				  </Grid>

          <Grid item sm={6} xs={12} md={3}>
				     <ul className={classes.listItem}>
					   <Typography variant="subtitle1" className={classes.headerList}>LEGAL</Typography>
					   <li className={classes.item}><Typography variant="caption">Privacy Policy (Updated)</Typography></li>
					   <li className={classes.item}><Typography variant="caption">Terms of Use (Updated)</Typography></li>
					   <li className={classes.item}><Typography variant="caption">Do Not Sell My Personal Information</Typography></li>
					 </ul>
				  </Grid>
				</Grid>
        <Divider className={classes.divider}/>

        <div className={classes.lastFooter}>
			   <Typography variant='subtitle2'>Copyright © 2022 Tubi, Inc.</Typography>
               <Typography variant='subtitle2'>Tubi is a registered trademark of Tubi, Inc.
                  All rights reserved.
               </Typography>
               <Typography variant='subtitle2'>Made with in San Francisco</Typography>
				</div>
      </Container> 
    </div>
  );
};

export default Footer;