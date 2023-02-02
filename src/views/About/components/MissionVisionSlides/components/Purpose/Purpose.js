/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Purpose = () => {
  const theme = useTheme();

  return (
    <Box marginRight={4}>
      <Typography
        variant="h2"
        align={'right'}
        gutterBottom
        sx={{
          fontWeight: 900,
          color: theme.palette.common.white,
          textTransform: 'uppercase',
        }}
      >
        Our Purpose
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.primary"
        align={'right'}
        sx={{
          color: theme.palette.common.white,
        }}
      >
        Every neuro-diverse child 
        <br />
        deserves a full life.
      </Typography>
    </Box>
  );
};

export default Purpose;
