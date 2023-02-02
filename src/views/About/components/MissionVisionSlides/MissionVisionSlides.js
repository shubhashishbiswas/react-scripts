import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import NoSsr from '@mui/material/NoSsr';

import Container from 'components/Container';
import {
  Mission,
  Vision,
  Purpose,
  Values,
} from './components';

const MissionVisionSlides = () => {
  
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

  const theme = useTheme();

  const styles = (bgImage) => ({
    position: 'absolute',
    objectFit: 'cover',
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

  return (
    <Box>
      
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={'jarallax-img'}
          
          sx={styles(
            'https://wallpapers.com/images/hd/coxless-eight-rowing-team-d2sntbot2fos3gss.jpg',
          )}
          
        />
        <Container>
          <Purpose />
        </Container>
      </Box>
      
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            'https://wallpapers.com/images/high/earth-surface-in-space-gps9axxa747nj3ra.jpg',
          )}
        />
        <Container>
          <Mission />
        </Container>
      </Box>
            

      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            'https://images.unsplash.com/photo-1545935950-b7a28791ad7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmlzaW9uJTIwc3RhdGVtZW50fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
          )}
        />
        <Container>
          <Vision />
        </Container>
      </Box>
      
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            'https://cdn.wallpapersafari.com/61/49/nKLxcy.jpg',
          )}
        />
        <Container>
          <Values />
        </Container>
      </Box>

    </Box>
  );
};

export { MissionVisionSlides };
