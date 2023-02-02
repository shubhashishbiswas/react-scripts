import React from 'react';
import { useEffect } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const ParentCoachingSummary = () => {
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
        height={{sm:'70vh', lg:'50vh'}}
        display={'flex'}
        alignItems={'center'}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            'https://raisingchildren.net.au/__data/assets/image/0029/69095/Genetic-counselling-narrow.jpg',
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
                  align={'left'}
                  
                >
                  OFFERING
                </Typography>

                <Typography
                  color= {theme.palette.text.light}
                  variant="h4"
                  align={'left'}
                  paddingcenter='2vw'
                  data-aos={'fade-up'}
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    marginTop: theme.spacing(1),
                  }}
                >
                  A personal coach for you helps 
                  <br />your child fight the odds better. 
                </Typography>

                <Typography
                  color= {theme.palette.text.light}
                  variant="h6"
                  align={'left'}
                  data-aos={'fade-up'}
                >
                  Explore our personalized parental coaching services
                </Typography>
                
                
                <Box display="flex" justifyContent={'left'} marginTop={2} >
                  
                  <Button variant="contained" size="large" href= {'/Contact'}
                    endIcon={
                      <Box component={'svg'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </Box>
                    }
                  >
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

export { ParentCoachingSummary };