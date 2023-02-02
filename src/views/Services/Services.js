import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';

import {
  Hero,
  FeaturesEssentials,
  SliderALLEssentialsServices,
  LeaderQuote,
  FeaturesCares,
  SliderALLCaresServices,
} from './components';

const Services = () => {
  const theme = useTheme();

  return (
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
        <Box paddingLeft={4} paddingRight={4}>
          <Hero />
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

      <Box paddingBottom={{lg:2}} >
        <Box
          sx={{
            position: 'relative',
            '&::after': {
              position: 'absolute',
              content: '""',
              width: '20%',
              zIndex: 1,
              top: 0,
              left: 0,
              height: '100%',
              backgroundSize: '17px 18px',
              backgroundImage: `radial-gradient(${alpha(
                theme.palette.primary.dark,
                0.4,
              )} 20%, transparent 20%)`,
              opacity: 0.2,
            },
          }}
        >
          <Box position={'relative'} zIndex={2}>
            <Container>
              <FeaturesEssentials />
            </Container>  
          </Box>
        </Box>
      </Box>
      
      
      <Box >
        <Container>
          <SliderALLEssentialsServices />
        </Container>
      </Box>
      
      
      <Box bgcolor={'secondary.main'} paddingLeft={4} paddingRight={4} paddingTop={2} paddingBottom={0} marginBottom={0}>
        <LeaderQuote />
      </Box>
      {/* < paddingTop={{ md: 8 }}> */}
      <Box>
        <Box bgcolor={'alternate.main'}>
          <Container>
            <FeaturesCares />
          </Container>
          <Container>
            <SliderALLCaresServices />
          </Container>
        </Box>
      </Box>
    </Main>
  );
};

export { Services };
