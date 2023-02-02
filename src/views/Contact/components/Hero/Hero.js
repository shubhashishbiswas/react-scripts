/* eslint-disable react/no-unescaped-entities */
import React from 'react';
/* import { useFormik } from 'formik'; */
import { useEffect } from 'react';

/* import * as yup from 'yup'; */
import { alpha, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box'; 
import Typography from '@mui/material/Typography'; 
/* import Card from '@mui/material/Card'; */
/* import Button from '@mui/material/Button'; */
/* import TextField from '@mui/material/TextField'; */
import Button from '@mui/material/Button';

import Container from 'components/Container';

/* 
const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
});

*/

const Hero = () => {
  const theme = useTheme();

  /* 
  const initialValues = {
    name: '',
    email: '',
  };
  
  const onSubmit = (values) => {
    return values;
  };

    const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  */

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
            'https://cdn.create.vista.com/api/media/medium/417635546/stock-photo-worried-mother-looking-diseased-daughter?token=',
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
                  Contact Us
                </Typography>

                <Typography
                  color= {theme.palette.text.light}
                  variant="h6"
                  align={'center'}
                  paddingLeft='2vw'                
                  data-aos={'fade-up'}
                >
                  We will be happy to just talk
                </Typography>
                
                <Box display="flex" justifyContent={'center'} marginTop={2} paddingLeft='2vw'>
                  <Button variant="contained" size="large">
                    Start now
                  </Button>
                </Box>
              </Box>
            </Container>

            {/* 
            <Typography
              variant="h4"
              align={'center'}
              gutterBottom
              sx={{
                fontWeight: 900,
                color: theme.palette.common.white,
                textTransform: 'uppercase',
              }}
            >
              SERVICE OFFERING HEADER
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.primary"
              align={'center'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Right therapy can work wonders for your child
            </Typography>
            */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
