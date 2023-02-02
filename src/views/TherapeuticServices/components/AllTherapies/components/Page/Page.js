import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import {  PageHeaderTherapy } from './components';


const pages = [
  {
    id: 'ABATherapy',
    href: '#ANCHOR_Therapy_ABATherapy',
    title: 'ABA Therapy',
    imageIcon: 'https://images.news18.com/ibnlive/uploads/2021/09/childautism-163048404816x9.png'
  },
  
  {
    id: 'SpeechLanguageTherapy',
    href: '#ANCHOR_Therapy_SpeechTherapy',
    title: 'Speech / Language Therapy',
    imageIcon: 'https://www.monash.edu/__data/assets/image/0008/1906712/banner-functional-behaviour-assessment.jpg'
  },

  {
    id: 'FeedingTherapy',
    href: '#ANCHOR_Therapy_FeedingTherapy',
    title: 'Feeding Therapy',
    imageIcon: 'https://childdevelopment.com.au/wp-content/uploads/fine-motor-visual-perception.jpg'
  },
  {
    id: 'OccupationalTherapy',
    href: '#ANCHOR_Therapy_OccuTherapy',
    title: 'Occupational Therapy',
    imageIcon: 'https://www.topoccupationaltherapyschool.com/wp-content/uploads/2016/08/Occupational-Therapy-for-Kids.jpg'
  },
  
  {
    id: 'CouplesTherapy.',
    href: '#ANCHOR_Therapy_CouplesTherapy',
    title: 'Couples Therapy',
    imageIcon: 'https://www.ryananswers.com/wp-content/uploads/2021/12/couples-counseling-maintenance.jpg'
  },
];

const Page = ({ children }) => {
  
  const theme = useTheme();
  
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);


  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box bgcolor={theme.palette.background.paper} >

      {/*TOP HEADER*/}
      
      <Box position={'relative'} zIndex={2} bgcolor={theme.palette.background.paper}>
        <Box marginBottom={4} paddingBottom='2vh' zIndex={2} marginX={'-20px'} >
          <PageHeaderTherapy />
        </Box>

        
      </Box>
      
      {/* SIDEBAR */}
      <Box paddingTop={'0 !important'} marginTop={-8} bgcolor={theme.palette.background.page} paddingRight='1vw' boxShadow={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2.1} >

            <Box 
              sx={{
                top: {xs:'10vh', md:'0vh'}, 
                height: {xs:'auto', md:'1300vh'},
                position: 'relative',
                display: { xs: 'none', sm: 'none', md: 'block' }, 
              }}
            >
              
              <Box
                marginTop= {3} 
                sx={{ 
                  top: {xs:'5vh', md:'12vh'}, 
                  height: {xs:'auto', md:'auto'},
                  position: {xs:'fixed', md:'sticky'},
                  
                  display: { xs: 'none', sm: 'none', md: 'block' },
                  
                  bgcolor: {xs:theme.palette.background.page, md:'none'},
                  zIndex: {xs:5, md:0},
                  
                }}
              >
                <Card marginTop={6}>

                  <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                    <List component="nav" aria-label="main mailbox folders">
                      
                      
                      {pages.map((item, i) => (
                        <Box>
                          <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                            key={item.id}
                            alignItems="flex-start"

                            href={item.href}
                            
                          >   
            
                            <ListItemAvatar>
                              <Avatar alt="Remy Sharp" src={item.imageIcon} />
                            </ListItemAvatar>
                            
                            <ListItemText >
                              <Typography
                                variant="subtitle2"
                                color={
                                  activeLink === item.href
                                    ? 'white'
                                    : 'black'
                                }
                              >
                                {item.title}
                              </Typography>
                            </ListItemText>

                          </ListItemButton>
                          {pages.length === (i + 1) ?  null : <Divider variant="inset" component="li" />}
                        </Box>
                      ))}                      
                    </List>

                    
                  </Box>
                </Card>
              </Box>
            </Box>  
          </Grid>
          <Grid item xs={12} md={9.9}>
            <Card sx={{ boxShadow: 2, padding: 0 }}>{children}</Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
