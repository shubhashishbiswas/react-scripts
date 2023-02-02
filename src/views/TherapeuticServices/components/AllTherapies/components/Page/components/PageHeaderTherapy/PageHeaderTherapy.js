import React from 'react';
import { useEffect } from 'react';
import { alpha, useTheme } from '@mui/material/styles';


import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Tags from './components/Tags';

const PageHeaderTherapy = () => {
  const theme = useTheme();

  const styles = (bgImage) => ({
    position: 'absolute',
    objectFit: 'cover',
    /* support for plugin https://github.com/bfred-it/object-fit-images */
    fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${bgImage})`,
    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
  });


  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };
    jarallaxInit();
  });


  return (
    <Box
      sx={{
        position: 'relative',
        boxShadow: 0,
        padding: 0,
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          top: 0,
          right: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4,
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >

      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        height={{sm:'100vh', lg:'70vh'}}
        display={'flex'}
        alignItems={'center'}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            'https://napacenter.org/wp-content/uploads/2018/10/Autism-Therapy.jpg',
          )}
        />
        <Box display='flex' justifyContent='center' alignitems='center' alignContent='center' height={1} width={1}>
          <Box 
            padding={2}
            width={1}
            sx={{
              bgcolor: 'rgba(0, 0, 0,0.5)'
            }}
            display='flex' justifyContent='center' alignContent={'center'} alignItems={'center'}
          >
            <Container>
              <Box>
                <Typography
                  color={theme.palette.text.semilight}
                  sx={{
                    textTransform: 'uppercase',
                    fontWeight: 'medium',
                  }}
                  gutterBottom
                  align={'center'}
                  
                >
                  OFFERING
                </Typography>

                <Typography
                  color= {theme.palette.text.light}
                  variant="h4"
                  align={'center'}
                  paddingcenter='2vw'
                  data-aos={'fade-up'}
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    marginTop: theme.spacing(1),
                  }}
                >
                  Child Development Therapy
                </Typography>

                <Typography
                  color= {theme.palette.text.light}
                  variant="h6"
                  align={'center'}
                  paddingLeft='2vw'                
                  data-aos={'fade-up'}
                >
                  Early intervention is as critical as the right one
                </Typography>
                
                <Box 
                  alignItems={'space-between'}
                  paddingLeft='2vw' 
                  justifyContent={'center'}
                  margin={{sm:2, md:0, lg:2}}
                  display={{xs:'none', md:'flex'}}
                >
                  <Tags />
                </Box>
                
                <Box display="flex" justifyContent={'center'} marginTop={2} paddingLeft='2vw'>
                  <Button variant="contained" size="large" href={'/Contact'}>
                    Start now
                  </Button>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { PageHeaderTherapy };