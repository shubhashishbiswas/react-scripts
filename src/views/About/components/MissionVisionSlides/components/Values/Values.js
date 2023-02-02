/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Divider from '@mui/material/Divider';

const Values = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h2"
        align={'left'}
        marginLeft={'3vw'}
        gutterBottom
        sx={{
          fontWeight: 900,
          color: theme.palette.common.white,
          textTransform: 'uppercase',
        }}
      >
        Our <br />Values
      </Typography>
      
      {/*
      <Box>
        <Box display='flex'>
          <Box margin={3}>
            <Typography  
              variant="h4"
              component="p"
              color="text.primary"
              align={'left'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Empower
            </Typography>
            <Typography  
              fontWeight={300}
              component="p"
              align={'left'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Enable parents & therapists to achieve top developmental outcomes
            </Typography>
          </Box>
          <Box margin={3}>
            <Typography  
              variant="h4"
              component="p"
              color="text.primary"
              align={'left'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Innovate
            </Typography>
            <Typography  
              fontWeight={300}
              component="p"
              align={'left'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Lead the way in research and discovery
            </Typography>
          </Box>
        </Box>

        <Box display='flex'>
          <Box margin={3}>
            <Typography  
              variant="h4"
              component="p"
              color="text.primary"
              align={'left'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Elevate
            </Typography>

            <Typography  
              
              component="p"
              align={'left'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Provide highest quality, comprehensive, effective care
            </Typography>
          </Box>
          <Box margin={3}>
            <Typography  
              variant="h4"
              component="p"
              color="text.primary"
              align={'left'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Connect
            </Typography>
            <Typography  
              fontWeight={300}
              component="p"
              align={'left'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Build a safe, caring & fulling community space
            </Typography>
          </Box>
        </Box>
      </Box>
      */}

      
      <Grid spacing={2}>
        
        <Grid item xs={6}>
          <Box margin={3}>
            <Typography  
              variant="h4"
              color="text.primary"
              align={'left'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Selflessness
            </Typography>
            <Typography  
              fontWeight={300}
              component="p"
              align={'left'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Embrace & serve the innocent child 
              <br />
              with an enthusiastic spirit
            </Typography>
          </Box>
        </Grid>

        <Divider sx={{bgcolor:theme.palette.common.white, width:'40vw', marginX:'3vw'}}/>

        <Grid item xs={6}>
          <Box margin={3}>
            <Typography  
              variant="h4"
              color="text.primary"
              align={'left'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Advocacy
            </Typography>
            <Typography  
              fontWeight={300}
              component="p"
              align={'left'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Champion relentlessly for a better world 
              <br />
              for neuro diverse children
            </Typography>
          </Box>
        </Grid>
        
        <Divider sx={{bgcolor:theme.palette.common.white, width:'40vw', marginX:'3vw'}}/>

        <Grid item xs={6}>
          <Box margin={3}>
            <Typography  
              variant="h4"
              color="text.primary"
              align={'left'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Excellence
            </Typography>

            <Typography  
              component="p"
              align={'left'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Commit to uncompromising quality of care
              <br />
              with research & innovation  
            </Typography>
          </Box>
        </Grid>

        <Divider sx={{bgcolor:theme.palette.common.white, width:'40vw', marginX:'3vw'}}/>

        <Grid item xs={6}>
          <Box margin={3}>
            <Typography  
              variant="h4"
              color="text.primary"
              align={'left'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Integrity
            </Typography>
            <Typography  
              fontWeight={300}
              component="p"
              align={'left'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Build trust through unwavering 
              <br />
              authenticity and transparency
            </Typography>
          </Box>
        </Grid>
        
      </Grid>
      
      
    </Box>
  );
};

export default Values;
