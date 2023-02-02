import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { PopupWithDiscount } from './components/PopupWithDiscount';

const videoList = [
  {
    thumb: 'tn1' , 
    link: 'https://www.youtube.com/embed/M6JIiwQ9wSs',
  },
  {
    thumb:'tn2', 
    link: 'https://www.youtube.com/embed/dXLDm9ON2DM',
  },
  {
    thumb:'tn3' , 
    link: 'https://www.youtube.com/embed/_zcQJqDdrtI',
  },  
  {
    thumb: 'tn4' , 
    link: 'https://www.youtube.com/embed/xRUOmJyn-io',
  },  
];


const OccupationalTherapyVideoScroll = () => {
  const theme = useTheme();
  
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  
  
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });



  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: isMd ? 1 : (isSm ? 1 : (isXs ? 1 : 1)),
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box
      paddingBottom={0}

      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      alignContent={'center'}
      justifyContent={'center'}
      bgcolor={'transparent'}
      marginY={0}
      paddiggY={0}


      /* marginTop={'10vh'} */
      sx={{
        position: 'relative',
        boxShadow: 0,
        /* paddingBottom: 6, */
        paddingBottom: 0,
      }}
    >
      <Box position={'relative'} zIndex={2}  >
        
        
        <Box marginTop={4} marginBottom={0}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'secondary'}
            align={'left'}
            paddingLeft='2vw'
          >
            FEATURED SERVICE RESOURCES 
          </Typography>
          <Typography
            variant="h4"
            align={'left'}
            paddingLeft='2vw'
            /* gutterBottom */
            sx={{
              fontWeight: 700,
              marginTop: theme.spacing(1),
            }}
          >
            Our recommended videos
          </Typography>
        </Box>

        <Box maxWidth={'70vw'} marginX={'auto'} paddingX={'auto'} marginY={0} paddingY={0}  >
          <Box
            marginX={'auto'} paddingX={'auto'} marginY={0} paddingY={0} 
            sx={{
              
              height: { xs: 'auto', md: 1 },
              '& .slick-slide img': {
                objectFit: 'cover',
              },
              '& .slick-list, & .slick-slider, & .slick-track, & .slick-slide > div': {
                height: { xs: 'auto', md: 1 },
              },
              
              '& .slick-dots': {
                
                marginTop: '0px',
                top: {xs:'84%' , sm: '90%', md: '87%'},
                height:'25px',
              },


              '& .slick-prev': {
                
                zIndex: 3, 
                
                bottom: 0,
                
                top: '100%',
                left: '0%',
                marginLeft: 0,
                marginRight: '32px',
                
                right: 0,
                transform: `translate(-100%, calc(-100% - ${theme.spacing(2)}))`,
                /* marginLeft: theme.spacing(-2), */
                
                /* marginTop: {xs:'150px', sm:'200px', md:'300px', lg:'300px'},*/
                marginTop: {xs:'15px', sm:'15px', md:'15px', lg:'15px'},
                width: 62,
                /* width: 32, */
                height: '100%',
                '&:before': {
                  fontSize: {xs:26, sm:26, md:52, lg:52},
                  color: theme.palette.primary.main,
                },
              },

              '& .slick-next': {
                
                zIndex: 3,
                bottom: 0,
                
                top: '100%',
                left: '100%',
                /* marginLeft:'25px',*/
                marginLeft: '62px',
                
                right: 0,
                transform: `translate(-100%, calc(-100% - ${theme.spacing(2)}))`,
                /* marginLeft: theme.spacing(-2), */
                
                /* marginTop: {xs:'150px', sm:'200px', md:'300px', lg:'300px'},*/
                marginTop: {xs:'15px', sm:'15px', md:'15px', lg:'15px'},
                /* width: 32, */
                width: 62,
                height: '100%',
                '&:before': {
                  fontSize: {xs:26, sm:26, md:52, lg:52},
                  color: theme.palette.primary.main,
                },
              },
            }}
          >
            <Slider {...sliderOpts}>
              {videoList.map((item, i) => (
                <Box>
                  <PopupWithDiscount index={i} srcLink={item.link} />
                </Box>
                
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { OccupationalTherapyVideoScroll };