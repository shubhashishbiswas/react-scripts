import React from 'react';
import Box from '@mui/material/Box';
// import featurepic from './media/featurepic.jpg';
import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';

/* import Typography from '@mui/material/Typography'; */
// import Divider from '@mui/material/Divider';

/*
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
*/

/* import Container from 'components/Container'; */

/* import { VerticalStepper2 } from '../../../../blocks-reused/VerticalStepper2';   */
import { VerticalStepper2 } from './components';  


{/*
const mock = [
  {
    label: 'Phone',
    value: '+39 659-657-0133',
    icon: (
      <svg  
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'hi@maccarianagency.com',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: 'Via Venini 33, 20147',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];
*/}

const Questions2 = () => {
  
  {/* 
  const theme = useTheme();
  */}

  return (

    <Box position={'relative'} marginBottom={0}>
      <Grid>
        <Grid item md={4} data-aos={'fade-up'} padding={1}>          
        
          <Box display='flex'>
            <Box
              sx={{
                width: 1,
                height: 1,
                overflow: 'hidden',
              }}
            >
              <Box
                display={'flex'}
                flexDirection={{ xs: 'column', md: 'row' }}
                position={'relative'}
              >
                <Box
                  display={'flex'}
                  /* alignItems={'center'} */
                  width={1}
                  order={{ xs: 2, md: 1 }}
                  
                  justifyContent='flex-start'
                >
                  <Box width={1} display='flex' marginBottom={2} justifyContent='flex-start'>
                    <VerticalStepper2 />
                  </Box>
                </Box>
              </Box>
              

              {/*
              <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
                <Box
                  display={'flex'}
                  flexDirection={{ xs: 'column', md: 'row' }}
                  position={'relative'}
                >
                  <Box
                    display={'flex'}
                    width={1}
                    order={{ xs: 2, md: 1 }}
                  >
                    <Box marginBottom={2} alignItems={'center'}>
                      <VerticalStepper2 />
                    </Box>
                  </Box>
                </Box>
              </Container>
              */}


            </Box>

            <Box
              component={'img'}
              src={'https://149814860.v2.pressablecdn.com/wp-content/uploads/2021/07/12.-Unstuck-with-calming.png'}
              
              boxShadow= {24}
              sx={{
                maxWidth: { xs: 250, sm: 250, md:380, lg:400 }, 
                marginTop: 'auto',
                marginBottom: 'auto',
                height: 'auto',
                alignContent: 'center',
                right: 0, 
                display: { xs: 'none', md: 'block' },
                borderRadius: '50% 50% 50% 50%',
              }}
            />
            
          </Box>
        </Grid>
      </Grid>
    </Box>

  );
};

export { Questions2 };

