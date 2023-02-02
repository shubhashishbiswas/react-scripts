import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

import Ansarpic from './media/featurepic.jpg';

const mock = [
 
  {
    name: 'Ansar Khan',
    title: 'Finance Controller, Microsoft Corp.',
    avatar: Ansarpic,
    about:
      'Ansar, a Harvard alumnus, MBA, CFA, brings 15+ years of epxerience in business leadership, finance and operations.',
  },

  {
    name: 'Dr. Erica Jowett-Hirst',
    title: 'BCBA – Functional Behavior Expert',
    avatar: 'https://media.licdn.com/dms/image/C5603AQFtRlf5piSd2Q/profile-displayphoto-shrink_800_800/0/1557411861384?e=2147483647&v=beta&t=wb6mfuaIlngseWo_iWJloztlgjoBiFGwCJTdhOK43dc',
    about:
      'Dr. Erica brings experience in ABA therapy of 20+ years, and studies visible, permanent beahvioral changes.',
  },
  
  {
    name: 'Dr. Vasan Purighalla',
    title: 'Neurosurgeon',
    avatar: 'https://i2.ypcdn.com/blob/bad80c2134bedb66568244203e1eccb965d119cd',
    about:
      'Dr. Vasan is a pioneer in neuro research, and studies the impact of non-verbal therapies on cognitive flexibility.',
  },

  {
    name: 'Dr. Terrence Mulligan',
    title: 'Physician',
    avatar: 'https://media.licdn.com/dms/image/C4E03AQFQJ_JtvHMZXg/profile-displayphoto-shrink_800_800/0/1620176065754?e=2147483647&v=beta&t=qpijPxqGLOmgScJAqJwrPD9qKmnRh6U943g1xiRSCxE',
    about:
      'Dr. Terrence is a physician with 20+ years experience in handling neuro diverse children in regular and special situations.',
  },
  {
    name: 'Dr. Sindhu',
    title: 'Pediatrician',
    avatar: 'https://media.istockphoto.com/id/1311511363/photo/headshot-portrait-of-smiling-male-doctor-with-tablet.jpg?s=612x612&w=0&k=20&c=w5TecWtlA_ZHRpfGh20II-nq5AvnhpFu6BfOfMHuLMA=',
    about:
      'Dr. Sindhu brings 20+ years experience as a pediatrician for neuro diverse children facing a range of growth challenges',
  },
  {
    name: 'Bill Creamer',
    title: 'Insurance Veteran',
    avatar: 'https://media.licdn.com/dms/image/C4E03AQE6uzJONYVYdw/profile-displayphoto-shrink_800_800/0/1552687326151?e=1680739200&v=beta&t=QjswGWP_EL62uHDEIKAAMfwypmtwVsuNM2mebb4S-vw',
    about:
      'Bill specializes in handling insurance processes for the  full spectrum of care and treatment for special needs children',
  },
];

const Team = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              component={Card}
              minHeight= {350}
              boxShadow={3}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <CardContent>
                <Box
                  component={Avatar}
                  src={item.avatar}
                  height={80}
                  width={80}
                />
                <Box marginTop={4}>
                  <ListItemText primary={item.name} secondary={item.title} />
                  <Typography variant={'subtitle2'} color={'text.secondary'}>
                    {item.about}
                  </Typography>
                  <Box marginTop={4}>
                    <IconButton size={'small'} color={'primary'}>
                      <FacebookIcon />
                    </IconButton>
                    <IconButton size={'small'} color={'primary'}>
                      <GitHubIcon />
                    </IconButton>
                    <IconButton size={'small'} color={'primary'}>
                      <TwitterIcon />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
