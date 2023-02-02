import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Page from './components/Page';

import { ParentEdAndSupportSummary } from './components/ParentEdAndSupport';
import { ParentEdAndSupportDescription } from './components/ParentEdAndSupport';
import { ParentEdAndSupportVideoScroll } from './components/ParentEdAndSupport';

import { ParentCoachingDescription } from './components/ParentCoaching';
import { ParentCoachingSummary } from './components/ParentCoaching';
import { ParentCoachingVideoScroll } from './components/ParentCoaching';

import { ParentCommunityDescription } from './components/ParentCommunity';
import { ParentCommunitySummary } from './components/ParentCommunity';
import { ParentCommunityVideoScroll } from './components/ParentCommunity';

import { NannyServicesDescription } from './components/NannyServices';
import { NannyServicesSummary } from './components/NannyServices';
import { NannyServicesVideoScroll } from './components/NannyServices';


const AllParentSupport = () => {

  const theme = useTheme();

  return (
    <Box>
      <Page>  {/* <Page> */}
        <Box sx={{ boxShadow: 0 }}>
          <Box>
            <Box position={'relative'} zIndex={2} bgcolor={theme.palette.background.white}>
              {/* </Box><Box zIndex={2} marginX={'-20px'} > */}
              <Box zIndex={2} >
                {/* <PageHeaderParentEd /> */}
              </Box>
            </Box>
          </Box>

          <Box paddingY={'30px'}>
            <Container>
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 'medium',
                }}
                gutterBottom
                color={'secondary'}
                align={'left'}
              >
                OUR FOUNDERS' NOTE
              </Typography>
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 'medium',
                }}
                color={'secondary'}
                align={'left'}
              >
                
              </Typography>
              <Typography
                variant="h6"
                align={'left'}
                sx={{
                  fontWeight: 700,
                  fontStyle: 'italic'
                }}
              >
                As parents, we had to acquire the needed knowledge, support and community engagement after many cycles of hope and despair. 
                Our parental education and support services catalogue & resource library will help you get a better experience than we did. 
              </Typography>
            </Container>
          </Box>
              

          <Box id='ANCHOR_ParentServices_ParentEd'>
            <ParentEdAndSupportSummary  />
            <ParentEdAndSupportDescription  />
            <ParentEdAndSupportVideoScroll  />
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
                /* fill={theme.palette.alternate.main} */
                fill={theme.palette.dividergreyBody}
                
                d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
              ></path>
            </Box>
          </Box>
          
          
          <Box id='ANCHOR_ParentServices_Community'>
            <ParentCommunitySummary  />
            <ParentCommunityDescription  />
            <ParentCommunityVideoScroll  />
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
                /* fill={theme.palette.alternate.main} */
                fill={theme.palette.dividergreyBody}
                
                d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
              ></path>
            </Box>
          </Box>
          
          <Box id='ANCHOR_ParentServices_Coach'>
            <ParentCoachingSummary  />
            <ParentCoachingDescription  />
            <ParentCoachingVideoScroll  />
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
                /* fill={theme.palette.alternate.main} */
                fill={theme.palette.dividergreyBody}
                
                d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
              ></path>
            </Box>
          </Box>
          
          <Box id='ANCHOR_ParentServices_Nanny'>
            <NannyServicesSummary  />
            <NannyServicesDescription  />
            <NannyServicesVideoScroll  />
          </Box>
        </Box>
      </Page>
    </Box>
  );
};

export { AllParentSupport };
