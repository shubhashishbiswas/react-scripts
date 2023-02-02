import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import Typography from '@mui/material/Typography';


import Page from './components/Page';

import { FSSAutismAssessment } from './components';
import { FSSAutismScreeningSummary } from './components';
import { FSSChildDevScreening } from './components';
import { FSSDevSkillDeficiencyScreening } from './components';
import { FSSFuncBehaviorAssessment } from './components';


const AllAssessments = () => {
  
  const theme = useTheme();

  return (
    <Box>
      <Page > 
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
                Diagnosis is perhaps the most under-rated part in a child's development journey. We as parents sense and appreciate it now, looking back.
                Our diagnostics services catalogue & resource library will help you get a better experience than we did.
                <block></block>
              </Typography>
              

            </Container>
          </Box>
          {/* END SUBHEADER */}
          
          <FSSChildDevScreening />            
          
          <Box id='ANCHOR_Diagnostics_Autism'>
            <FSSAutismScreeningSummary />
            <FSSAutismAssessment />
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

          <Box id='ANCHOR_Diagnostics_FuncBehavior'>
            <FSSFuncBehaviorAssessment />
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

          <Box id='ANCHOR_Diagnostics_SkillDef'>
            <FSSDevSkillDeficiencyScreening />
          </Box>



        </Box>
      </Page>
    </Box>
  );
};

export { AllAssessments };
