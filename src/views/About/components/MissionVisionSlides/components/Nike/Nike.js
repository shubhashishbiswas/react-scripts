/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Divider from '@mui/material/Divider';

const Nike = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h1"
        align={'left'}
        gutterBottom
        sx={{
          fontWeight: 900,
          color: theme.palette.common.white,
          textTransform: 'uppercase',
        }}
      >
        Our <br />Mission
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
        </Grid>
        
      </Grid>
      
      
    </Box>
  );
};

export default Nike;
