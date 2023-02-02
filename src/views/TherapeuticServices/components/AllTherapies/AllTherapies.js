import React from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


import Page from './components/Page';

import { ABATherapyDescription } from './components/ABATherapy';
import { ABATherapySummary } from './components/ABATherapy';
import { ABATherapyVideoScroll } from './components/ABATherapy';

import { SpeechLangTherapyDescription } from './components/SpeechLangTherapy';
import { SpeechLangTherapySummary } from './components/SpeechLangTherapy';
import { SpeechLangTherapyVideoScroll } from './components/SpeechLangTherapy';

import { FeedingTherapyDescription } from './components/FeedingTherapy';
import { FeedingTherapySummary } from './components/FeedingTherapy';
import { FeedingTherapyVideoScroll } from './components/FeedingTherapy';

import { OccupationalTherapyDescription } from './components/OccupationalTherapy';
import { OccupationalTherapySummary } from './components/OccupationalTherapy';
import { OccupationalTherapyVideoScroll } from './components/OccupationalTherapy';

import { CouplesTherapyDescription } from './components/CouplesTherapy';
import { CouplesTherapySummary } from './components/CouplesTherapy';
import { CouplesTherapyVideoScroll } from './components/CouplesTherapy';



const AllTherapies = () => {

  const theme = useTheme();

  return (
    <Box >
      <Page> 
        <Box sx={{ boxShadow: 0 }} marginTop={'25px'} marginX={0}>
          {/* START SUBHEADER */}
          <Box paddingY={'20px'}>
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
                Selecting the right therapy service is never an easy decision. We've been there.
                <br />
                Our therapy services catalogue & resource library will help you get a better experience than we did. 
              </Typography>
            </Container>
          </Box>
          {/* END SUBHEADER */}


          <Box id='ANCHOR_Therapy_ABATherapy'>
            <ABATherapySummary />
            <ABATherapyDescription />
            <ABATherapyVideoScroll />
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

          
          <Box id='ANCHOR_Therapy_SpeechTherapy'>
            <SpeechLangTherapySummary />
            <SpeechLangTherapyDescription />
            <SpeechLangTherapyVideoScroll />
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
          
          <Box id='ANCHOR_Therapy_FeedingTherapy'>
            <FeedingTherapySummary />
            <FeedingTherapyDescription />
            <FeedingTherapyVideoScroll />
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

          <Box id='ANCHOR_Therapy_OccuTherapy'>
            <OccupationalTherapySummary />
            <OccupationalTherapyDescription />
            <OccupationalTherapyVideoScroll />
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

          <Box id='ANCHOR_Therapy_CouplesTherapy'>
            <CouplesTherapySummary />
            <CouplesTherapyDescription />
            <CouplesTherapyVideoScroll />
          </Box>
        </Box>
      </Page>
    </Box>
  );
};

export { AllTherapies };
