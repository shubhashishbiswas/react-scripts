import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Footer } from './components'; 

import { ClientReviews } from './components';
import { Hero3, Services } from './components';
import { FeaturedServiceSlider } from './components';
import { FeaturedEventsSlider } from './components';
import { LeaderQuote } from './components';
import { WhyChooseUs } from './components';

const Home = () => {
  const theme = useTheme();
  return (
    /* <Main bgcolor={'background.paper'}> */
    <Main> 

      <Box
        position={'relative'}
        sx={{
          backgroundColor:
            theme.palette.mode === 'light'
              ? theme.palette.primary.main
              : theme.palette.primary.main,
        }}
      > 
        <Box paddingLeft={4} paddingRight={4} paddingBottom={4}>
          <Hero3 />
        </Box>
        
        <Box top={'-50px'}>
          <Box
            component={'svg'}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1921 273"
            sx={{
              position: 'absolute',
              width: '100%',
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: 1,
              height: '35%',
            }}
          >
            <polygon
              fill={theme.palette.background.paper}
              points="0,273 1921,273 1921,0 "
            />
          </Box>
        </Box>
      </Box>
      
      <Container>
        <WhyChooseUs />
      </Container>
            

      <Box bgcolor={'secondary.main'} marginTop={{xs:'20vw', sm: '20vw', md:'5vw' }}>
        <Container>
          <Box></Box>
          <LeaderQuote />
        </Container>
      </Box>


      <Box paddingBottom={2} marginBottom={2} >
        <Container>
          <FeaturedEventsSlider />
        </Container>
      </Box>
      
      <Box id='dividerFinal' height={{xs:'15vh' , md:'10vw', lg:'10vw'}} marginTop={{xs:'5vh' ,sm:'5vw', lg:'5vw'}}>
        <Box
          height={{xs:'15vh' , md:'10vw', lg:'10vw'}}
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.background.white}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor:  'background.white',
          paddingTop: 2,
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        <Container>
          <Services />
        </Container>
      </Box>  
      
      <Box id='dividerFinal' height={{xs:'15vh' , md:'10vw', lg:'10vw'}} bgcolor={theme.palette.background.white}>
        <Box
          height={{xs:'15vh' , md:'10vw', lg:'10vw'}}
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
          bgcolor={theme.palette.background.white}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>

      <Box paddingBottom={2} marginBottom={2} >
        <Container>
          <FeaturedServiceSlider /> 
        </Container>
      </Box>
      
      <Box id='dividerFinal' height={{xs:'15vh' , md:'10vw', lg:'10vw'}} paddingTop={{sm:'10vw', md:'5vw'}} bgcolor={theme.palette.background.paper}>
        <Box
          height={{xs:'15vh' , md:'10vw', lg:'10vw'}}
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
          bgcolor= {theme.palette.background.paper}
        >
          <path
            fill= {theme.palette.background.white}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      
      <Box paddingY={3} 
        sx={{
          bgcolor:  'background.white',
          paddingTop: 2,
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        <Container>
          <ClientReviews />
          <Box paddingTop={12}>
            <Footer />
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default Home;


