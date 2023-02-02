import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { NavItem } from './components';
import Typography from '@mui/material/Typography';
import  { useState, useEffect } from 'react';

import simsoulsLogoColor from '../media/simsoulsLogoColor.png';





const Topbar = ({ onSidebarOpen, pages, colorInvert = true }) => {
  const theme = useTheme();
  
  
  const {
    
    linktreeFLAT: linktreeFLATPages,
  } = pages;
  
  const serviceNavListStatic = [
    {
      hasLink: 1,
      hasTabs: 0,
      isTabLink: 0,
      title: 'Services Overview',
      href: '/Services',
    },
    {
      hasLink: 1,
      hasTabs: 0,
      isTabLink: 1,
      title: 'Diagnostic Services',
      href: '/DiagnosticsServices',
    },
    {
      hasLink: 1,
      hasTabs: 0,
      isTabLink: 1,
      title: 'Therapy Services',
      href: '/TherapyServices',
    },
    {
      hasLink: 1,
      hasTabs: 0,
      isTabLink: 1,
      title: 'Parent Ed',
      href: '/ParentsServices',
    },
  ];
  
  

  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);
  
  
  {/* const hasActiveLink = () => items.find((givenhref) => givenhref === activeLink);  */}
  
  const linkColor = colorInvert ? theme.palette.text.light : 'common.white';

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
      margin={0}
      bgcolor={theme.palette.primary.main}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Sim Souls"
        width={{ xs: 150, md: 180 }}
      >
        <Box
          component={'img'}       
          src={simsoulsLogoColor}
          height={1}
          width={1}
        />
      </Box>
      
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        
        <Box marginLeft={1} marginRight={1}>
          <NavItem
            title={'Services'}
            id={'services-pages'}
            items={serviceNavListStatic}
            colorInvert={colorInvert}
          />
        </Box>
        

        <Box marginLeft={1} marginRight={1}>
          <Button
            component={'a'}
            href='/Resources'
            fullWidth
            sx={{
              justifyContent: 'flex-start',
              color:
                activeLink === '/Resources'
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
              backgroundColor:
                activeLink === '/Resources'
                  ? alpha(theme.palette.primary.main, 0.1)
                  : 'transparent',
              fontWeight: activeLink === '/Resources' ? 600 : 400,
            }}
          >
            <Typography
              fontWeight={ activeLink === '/Resources' ? 700 : 400} 
              color={linkColor}
            >
             
              FAQs

            </Typography>
          </Button>
        </Box>

        

        <Box marginLeft={1} marginRight={1}>
          <Button
            component={'a'}
            href='/Resources'
            fullWidth
            sx={{
              justifyContent: 'flex-start',
              color:
                activeLink === '/Resources'
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
              backgroundColor:
                activeLink === '/Resources'
                  ? alpha(theme.palette.primary.main, 0.1)
                  : 'transparent',
              fontWeight: activeLink === '/Resources' ? 600 : 400,
            }}
          >
            <Typography
              fontWeight={ activeLink === '/Resources' ? 700 : 400} 
              color={linkColor}
            >
              
              Resources

            </Typography>
          </Button>
        </Box>


        <Box marginLeft={1} marginRight={1}>
          <Button
            component={'a'}
            href='/Contact'
            fullWidth
            sx={{
              justifyContent: 'flex-start',
              color:
                activeLink === '/Contact'
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
              backgroundColor:
                activeLink === '/Contact Us'
                  ? alpha(theme.palette.primary.main, 0.1)
                  : 'transparent',
              fontWeight: activeLink === '/Contact' ? 600 : 400,
            }}
          >
            <Typography
              fontWeight={ activeLink === '/Contact' ? 700 : 400} 
              color={linkColor}
            >
              
              Contact Us

            </Typography>
          </Button>
        </Box>

        <Box marginLeft={1} marginRight={1}>
          <Button
            component={'a'}
            href='/Careers'
            fullWidth
            sx={{
              justifyContent: 'flex-start',
              color:
                activeLink === '/Careers'
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
              backgroundColor:
                activeLink === '/Careers'
                  ? alpha(theme.palette.primary.main, 0.1)
                  : 'transparent',
              fontWeight: activeLink === '/Careers' ? 600 : 400,
            }}
          >
            <Typography
              fontWeight={ activeLink === '/Careers' ? 700 : 400} 
              color={linkColor}
            >

              Careers

            </Typography>
          </Button>
        </Box>

        <Box marginLeft={1} marginRight={1}>
          <Button
            component={'a'}
            href='/About'
            fullWidth
            sx={{
              justifyContent: 'flex-start',
              color:
                activeLink === '/About'
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
              backgroundColor:
                activeLink === '/About'
                  ? alpha(theme.palette.primary.main, 0.1)
                  : 'transparent',
              fontWeight: activeLink === '/About' ? 600 : 400,
            }}
          >
            <Typography
              fontWeight={ activeLink === '/About' ? 700 : 400} 
              color={linkColor}
            >

              About Us

            </Typography>
          </Button>
        </Box>
        
        
        
        <Box marginLeft={1} marginRight={1} display={'none'}>
          <NavItem
            title={'Pages'}
            id={'linktreeFLAT-pages'}
            items={linktreeFLATPages}
            colorInvert={colorInvert}
          />
        </Box>

      </Box>

      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.primary.main, 0.1),
          }}
        >
          <MenuIcon sx={{ color: 'white' }} fontSize="large" />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
