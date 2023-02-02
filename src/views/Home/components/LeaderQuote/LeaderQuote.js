/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import featurepic from './media/featurepic.jpg';

const LeaderQuote = () => {
  return (
    <Box position={'relative'}>
      <Grid container marginTop={{ xs: '10vw', sm: '5vw', md:'0vw', lg:'0vw' }}>
        <Grid item xs={12} data-aos={'fade-up'}>
          <Box maxWidth={'80vw'} display={'flex'} justifyContent={'left'} alignItems={'flex-start'} alignContent={'flex-start'}>
            <Box
              component={'img'}
              boxShadow={5}
              src={featurepic}
              sx={{
                maxWidth: { xs: '30vw', sm: '30vw', md:'30vw', lg:'30vw' },
                /* marginTop: '10%',*/
                marginLeft: 2,
                marginRight: 2,
                marginTop: 'auto',
                marginBottom: 'auto',
                height: 'auto',
                position: 'absolute',
                bottom: '0%', 
                alignContent: 'center',
                right: 0, 
                display: { xs: 'block',  sm: 'block', md: 'none' },
                borderRadius: '50% 50% 50% 50%',
                boxShadow: 2
              }}
            />
          </Box>
        </Grid>  
        <Grid item sm={12} md={6} data-aos={'fade-up'} marginLeft={2} marginRight={2}>
          
          <Box marginBottom={0} marginTop={{xs:4, sm: 4, md:0, lg: 0}}>
            <Typography
              variant="h4"
              color="text.primary"
              
              sx={{ fontWeight: 700, color: '#222B45', textAlign: { sm: 'center', md: 'left'}, fontStyle: 'italic'  }}
            >
              "A child with special needs is undeniably the most innocent and the parents’ grit is impeccable. We care deeply about the little fighters, their parents and the services we offer in the communities we serve. It is personal to all of us."
            </Typography>
          </Box>
          <Box marginBottom={0} >
            <Typography
              variant="h5"
              component="p"
              color="text.primary"
              sx={{ 
                color: '#222B45',
                textAlign: { sm: 'center', md: 'right' }
              }}
            >
              Ansar Khan 
              
            </Typography>
            <Typography
              component="p"
              color="text.primary"
              sx={{ 
                color: '#222B45',
                textAlign: { sm: 'center', md: 'right' }
              }}
              /* textAlign='right' */
            
            > 
              Parent, Founder & CEO
            </Typography>
          </Box>
        </Grid>
        <Box
          component={'img'}
          src={featurepic}
          sx={{
            maxWidth: { xs: 250, sm: 280, md:350, lg:390 },
            /* marginTop: '10%',*/
            marginLeft: 2,
            marginRight: 2,
            marginTop: 'auto',
            marginBottom: 'auto',
            height: 'auto',
            position: 'absolute',
            bottom: '5%', 
            alignContent: 'center',
            right: 0, 
            display: { xs: 'none', md: 'block' },
            borderRadius: '50% 50% 50% 50%',
            boxShadow: 2
          }}
        />
      </Grid>
      
    </Box>
  );
};

export { LeaderQuote };

