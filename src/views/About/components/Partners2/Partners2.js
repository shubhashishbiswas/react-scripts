/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import logo1 from './media/goEMed_logo.jpg';
import logo2 from './media/abhilasha.png';

const mock = [
  logo1, 
  logo2,
];

const Partners = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              We are trusted by partners globally
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              Our partners are noted institutions that boost our depth of care 
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Box display="flex" flexWrap="wrap" justifyContent={'flex-start'}>
              {mock.map((item, i) => (
                <Box maxWidth={90} marginTop={2} marginRight={4} key={i}>
                  <Box
                    component="img"
                    height={1}
                    width={1}
                    src={item}
                    alt="..."
                    sx={{
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0) invert(0.7)'
                          : 'none',
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Partners;
