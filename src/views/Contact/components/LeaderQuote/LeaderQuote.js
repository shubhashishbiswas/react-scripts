/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
/* import Button from '@mui/material/Button'; */
import Typography from '@mui/material/Typography';
// import featurepic from './media/featurepic.jpg';
/* import { BorderColor } from '@mui/icons-material'; */

const LeaderQuote = () => {
  return (
    <Box position={'relative'} marginBottom={0}>
      
      <Grid container>
        
        
        <Grid item sm={12} md={12} data-aos={'fade-up'} marginLeft={2} marginRight={2}>
          <Box marginBottom={2} marginTop={2} >
            <Typography
              variant="h4"
              color="text.primary"
              
              sx={{ fontWeight: 700, color: '#222B45', textAlign: { sm: 'center', md: 'left'}, fontStyle: 'italic'  }}
              /* textAlign='right' */
              
            >
              "A child with special needs is undeniably the most innocent and the parents’ grit is impeccable. We care deeply about the little fighters, their parents and the services we offer in the communities we serve. It is personal to all of us."
            </Typography>
          </Box>
          <Box marginBottom={2} >
            <Typography
              variant="h5"
              component="p"
              color="text.primary"
              sx={{ 
                color: '#222B45',
                textAlign: { sm: 'center', md: 'left' }
              }}
              /* textAlign='right' */
            >
              Ansar Khan 
              
            </Typography>
            <Typography
              component="p"
              color="text.primary"
              sx={{ 
                color: '#222B45',
                textAlign: { sm: 'center', md: 'left' }
              }}
              /* textAlign='right' */
            
            > 
              Parent, Founder & CEO
            </Typography>
          </Box>
        </Grid>
      

      </Grid>
      
    </Box>
  );
};

export { LeaderQuote };