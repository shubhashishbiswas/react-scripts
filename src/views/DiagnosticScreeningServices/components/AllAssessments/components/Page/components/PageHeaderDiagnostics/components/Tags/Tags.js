import React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
// import Button from '@mui/material/Button';
import FaceIcon from '@mui/icons-material/Face';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import BiotechIcon from '@mui/icons-material/Biotech';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const mock = [
  
  {
    title:'Symptoms',
    link:'/DummyResourceSample',
    icon: <FaceIcon />
  },
  {
    title:'Causes',
    link:'/DummyResourceSample',
    icon: <PsychologyAltIcon />
  },
  {
    title:'Diagnosis',
    link:'/DummyResourceSample',
    icon: <BiotechIcon />
  },
  {
    title:'Treatment',
    link:'/DummyResourceSample',
    icon: <MedicalServicesIcon />
  },
  {
    title:'Complications',
    link:'/DummyResourceSample',
    icon: <ErrorOutlineIcon />
  },
  {
    title:'Support & Resources',
    link:'/DummyResourceSample',
    icon: <SupportAgentIcon />
  },
  
];

const Tags = () => {

  const theme = useTheme();

  return (
    <Box>
      <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} > 
        {mock.map((item) => (
          
          <Chip
            key={item.title}
            component={'a'}
            variant="outlined"
            href={item.link}
            label={<Typography color={theme.palette.background.white} fontWeight={300}>{item.title}</Typography>}
            clickable
            icon={item.icon}
            sx={{ margin: 1, borderWidth:'0.2rem' }}            
              
          />
        ))}
      </Box>
    </Box>
  );
};

export default Tags;
