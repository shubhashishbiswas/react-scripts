import React, { useState } from 'react';
// import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

import { PopupBox } from './components';

import Container from 'components/Container';
import Youtube_logo from './media/Youtube_logo.png';


// import maxresdefault from './media/maxresdefault.jpg';

import tn1 from './media/tn1.jpg';
import tn2 from './media/tn2.jpg';
import tn3 from './media/tn3.jpg';
import tn4 from './media/tn4.jpg';


const PopupWithDiscount = ({index, srcLink }) => {
  
  const [open, setOpen] = useState(false);

  var currentTn = '';

  switch ({index})  {
    case 0:
      currentTn = {tn1};
      break;
    case 1:
      currentTn = {tn2};
      break;
    case 2:
      currentTn = {tn3};
      break;
    case 3:
      currentTn = {tn4};
      break;
    default:
      currentTn = '';
  }

  console.log(currentTn);


  return (
    <Container display={'flex'} justifyContent={'center'} alignItems={'center'} alignItems={'center'} paddingX={'auto'}
    >
      <Box borderRadius={'20px'}
      >
        <Box width={1}>
          <Box 
            display={'flex'} justifyContent={'center'} alignItems={'center'} alignItems={'center'} paddingX={'auto'}
            sx={{
              /* bgcolor: alpha(theme.palette.primary.light, 0.1), */
              /* backgroundImage: `url(${currentTn})`, */
              backgroundImage: index === 0 ? `url(${tn1})` : ( index === 1 ? `url(${tn2})` : (index === 2 ? `url(${tn3})` : `url(${tn4})`)),
              backgroundRepeat:'no-repeat',
              backgroundSize: 'cover',
              /*
              width:'50vw', 
              height:'33.7vw', 
              paddingLeft: '12vw',
              */
              
              
              width:{xs:'70vw', sm:'70vw', md:'50vw'}, 
              height:{xs:'39.37vw', sm:'39.37vw', md:'28vw'},
      

              borderRadius:{xs:'2vw', sm:'2vw', md:'1.5vw'}, 
            }}
            onClick={() => setOpen(true)}
          >
            <Box
              display={'flex'} justifyContent={'center'} alignItems={'center'} alignItems={'center'} padding={'auto'} 
              sx={{
                /* bgcolor: alpha(theme.palette.primary.light, 0.1), */
                backgroundImage: `url(${Youtube_logo})`,
                backgroundRepeat:'no-repeat',
                backgroundSize: 'contain',
                
                width:{xs:'6.2vw', sm:'6.2vw', md:'6vw'}, 
                height:{xs:'7.9vw', sm:'7.9vw', md:'3.36vw'},
                
                marginLeft: {xs:'4vw', sm:'3vw', md:'2vw'},
              }}
            >
              <Button
                color={'primary'}
                size={'large'}
                fullWidth
                display={'flex'}
                sx={{
                  /* bgcolor: alpha(theme.palette.primary.light, 0.1), */
                  fontWeight: 700,
                  width:'9.0vw', 
                  height:'5vw', 
                  alignSelf:'center',
                }}
                onClick={() => setOpen(true)}
              >
              </Button>
            </Box>  
          </Box>
          
          <PopupBox srcTitle="YouTube video player" srcLink={srcLink} open={open} onClose={() => setOpen(false)} />
        </Box>
      </Box>
      
    </Container>
  );
};

PopupWithDiscount.propTypes = {
  index: PropTypes.number.isRequired,
  srcLink: PropTypes.string.isRequired,
};



export { PopupWithDiscount };
