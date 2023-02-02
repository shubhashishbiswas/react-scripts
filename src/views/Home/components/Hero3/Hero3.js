/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LaptopSkeletonIllustration from 'svg/illustrations/LaptopSkeleton';
import imageHero2 from './media/flipped-header-placeholder.png'; 
import Button from '@mui/material/Button';
import Slider from 'react-slick';

const Hero3 = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const words = [
    'Autism?',
    'Asperger\'s?',
    'ADHD?',
    'Stunted Growth?',
    'Speech delay?'
  ];

  const sliderOpts = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: isMd ? 1 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  };


  const LeftSide = () => (
    <Box data-aos={isMd ? 'fade-right' : 'fade-up'} >
      <Box marginBottom={2}>
        <Typography marginTop={{xs:4, sm:4, md:4, lg:4 }} variant="h3" color={theme.palette.text.light} sx={{ fontWeight: 500 }}>
          Concerned about your child's          
          development with {' '}
        </Typography>
        <Box width={{xs:'80vw', sm:'60vw', md: '50vw'}} height={{xs:'10vw', sm: '10vw', md: '5vw'}} bgcolor={'transparent'} margin={0} padding={0}>
          <Slider {...sliderOpts}>
            {words.map((item, i) => (
              <Box key={i} margin={0} padding={0}>
                <Box
                  display={'block'}
                  width={1}
                  margin={0}
                  padding={0}
                  height={1}
                  sx={{
                    textDecoration: 'none',
                    transition: 'all .2s ease-in-out',
                    
                  }}
                >
                  <Typography
                    color={theme.palette.secondary.light}
                    variant={'h3'}
                    sx={{ 
                      fontWeight: 600
                    }}                        
                  >
                    {item}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
      <Box>
        <Typography component="p" color={theme.palette.text.light}>
          As parents, we want a happy & healthy child. SimSouls is a team of parents, therapists, neuroscientists, and doctors bonded by one purpose:
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color={theme.palette.text.light}
          sx={{
            fontWeight: 500,
            textAlign: 'left',
            fontStyle: 'italic',
          }}
        >
              “Every neuro diverse child deserves a full life.” 
        </Typography>
      </Box>
      <Box marginY={{md:2}}>
        <Button  variant="outlined" color="alternate" size="large" href= {'/Services'}>
          How we help
        </Button>
      </Box>
      
    </Box>
  );

  return (
    <Grid container spacing={4} paddingBottom={4} marginBottom={0}>
      <Grid item container alignItems={'center'} xs={12} md={6} >
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <LeftSide />  
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            position: 'relative',
            marginX: 'auto',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              marginX: 'auto',
            }}
          >
            <Box>
              <Box
                position={'relative'}
                zIndex={2}
                maxWidth={1}
                height={'auto'}
                sx={{ verticalAlign: 'middle' }}
              >
                <LaptopSkeletonIllustration />
              </Box>
              <Box
                position={'absolute'}
                top={'8.4%'}
                left={'12%'}
                width={'76%'}
                height={'83%'}
                border={`1px solid ${theme.palette.alternate.dark}`}
                zIndex={3}
              >
                <Box
                  component={'img'}
                  loading="eager"
                  src={imageHero2}
                  alt="Image Description"
                  width={1}
                  height={1}
                  sx={{
                    objectFit: 'cover',
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero3;
