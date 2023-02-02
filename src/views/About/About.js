import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';



import { MissionVisionSlides } from './components'; 
import { FeaturedProducts } from './components'; 
import { Team } from './components'; 
import { FAQContent } from './components'; 
import { Partners2 } from './components';  


const About = () => {
  const theme = useTheme();

  return (
    <Main>
      <MissionVisionSlides />
  
      <Box paddingTop={2} paddingBottom={2}>
        <Container>
          {/* SECTION TITLE START */}
          <Box 
            marginBottom={4}    
            width={1}
            height={1}            
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            alignContent={'center'}
            boxShadow={0}
          >
            <Typography
              variant="h5"
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium',
                
              }}
              gutterBottom
              color={'primary'}
              align={'center'}
              marginTop={12}
            >
              OUR TEAM
            </Typography>
            <Typography
              variant="h4"
              align={'center'}
              data-aos={'fade-up'}
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              Our care team brings together expertise, experience and empathy
            </Typography>
            
          </Box>
          {/* SECTION TITLE END */}
          <Team />
        </Container>
      </Box>

      {/* ************************************************* */}
      {/* ************************************************* */}
      
      <Box bgcolor={'secondary.main'} paddingLeft={4} paddingRight={4} paddingTop={2}>
        <FeaturedProducts />
      </Box>
      
      <Box>
        <Box bgcolor={theme.palette.alternate.main}>
          <Container padding={'0 !important'} maxWidth='1200px' >

            {/* SECTION TITLE START */}
            <Box 
              marginBottom={2}    
              width={1}
              height={1}            
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              alignContent={'center'}
              boxShadow={0}
            >
              <Typography
                variant="h5"
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 'medium',
                  
                }}
                gutterBottom
                color={theme.palette.primary.main}
                align={'center'}
                marginTop={12}
              >
                OUR DIFFERENCE
              </Typography>
              <Typography
                variant="h4"
                align={'center'}
                color={theme.palette.text.primary}
                data-aos={'fade-up'}
                gutterBottom
                sx={{
                  fontWeight: 700,
                }}
              >
                Why Choose Us?
              </Typography>
              
              <Typography
                variant="h6"
                align={'center'}

                color={theme.palette.text.primary}
                data-aos={'fade-up'}
              >
                While many clinics are available, most are inherently focused on quick fixes,
                <br/>
                instead of taking a holistic approach towards the well-being of a child. 
                <br/>
                <br/>
                Simple Souls was founded to do better.  
              </Typography>

            </Box>
            {/* SECTION TITLE END */}

            <FAQContent />
          </Container>
        </Box>
      </Box>
      {/* ************************************************* */}
      {/* ************************************************* */}

      <Box bgcolor={'alternate.main'}>
        {/* <Container paddingY={'0 !important'}> */}
        <Box display='flex' justifyContent='center' alignItems='center' paddingY={6} maxwidth={400}>
          <Container>
            <Partners2 />
          </Container>
        </Box>
      </Box>
      
    </Main>
  );
};

export { About };