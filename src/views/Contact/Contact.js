import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography'; 

import { LeaderQuote, QuickQueryForm } from './components';
import { Services } from './components';
import { Hero } from './components';
import { Contact as ContactComponent} from './components';
import { Questions2 } from './components';


const Contact = () => {
  
  return (
    <Main bgcolor={'background.paper'}>
      
      {/* START OF CONTACT PAGE */}
      <Hero />
      
      <Box bgcolor={'alternate.main'}>
        <Container paddingX={6} >
          <Services />          
        </Container>
      </Box>

      <Box  bgcolor={'#252626'} paddingLeft={2}>
        <ContactComponent />        
      </Box>
      

      <Box bgcolor={'alternate.main'} paddingX={'10vw'} paddingBottom={'10vh'}>
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
            variant="h6"
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium'
            }}
            gutterBottom
            color={'primary'}
            align={'center'}
            marginTop={12}
          >
            SHARE YOUR DETAILS
          </Typography>
          
          <Typography
            variant="h4"
            align={'center'}
            data-aos={'fade-up'}
            gutterBottom
            sx={{
              fontWeight: 700
            }}
          >
            How can we help in your child’s journey?
          </Typography>
          
        </Box>

        <Questions2 />

      </Box>
      
      <Box bgcolor={'secondary.main'}>
        <Container>
          <LeaderQuote />
        </Container>
      </Box>
      

      <Box>
        <Box >
          
          <Container>
            <QuickQueryForm />
          </Container>
          
        </Box>
      </Box>
      {/*END OF CONTACT PAGE */}

    </Main>
  );
};

export default Contact;