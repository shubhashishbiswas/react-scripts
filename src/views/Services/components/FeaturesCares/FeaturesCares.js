/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import PhoneSkeletonIllustration from 'svg/illustrations/PhoneSkeleton';

const FeaturesCares = () => {
  const theme = useTheme();

  const RightSide = () => (
    <Box>
      <Box marginBottom={2}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'primary'}
        >
          SERVICE CATEGORY
        </Typography>
      </Box>
      <Box marginBottom={2}>
        <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
          SimSouls CARES
        </Typography>
        <Typography color="text.secondary" variant={'h6'}>
          Raising a child with special needs is both a gift and a responsibility. 
          <br />
          Our events and support groups offer parents a discreet platform for discussion, camaraderie and guidance. 
          <br />
          Simsouls CARES to help them carry their remarkable treasure with strength and dignity.
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {[
          'Schedule one-on-one appointments with therapists, doctors, and neuroscientists',
          'Trequest for our angels (nannies), who are trained to babysit and support neurodivergent children',
          'Receive guidance, referrals, and information on getting the help they need',
          'Connect with other parents in the community',
          'Join support groups and events to enable and facilitate your journey together.',
          'Train other parents with us if you chose to be an accredited therapist',
        ].map((item, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Box component={ListItem} disableGutters width={'auto'} padding={0} display={'flex'} flexDirection={'row'} alignContent='flex-start' alignItems='flex-start'>
              <Box
                component={ListItemAvatar}
                minWidth={'auto !important'}
                marginRight={2}
                marginLeft={'0.25rem'}
                marginTop={'0.25rem'}
              >
                <Box
                  component={Avatar}
                  bgcolor={theme.palette.secondary.main}
                  width={20}
                  height={20}
                >
                  <svg
                    width={12}
                    height={12}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Box>
              </Box>
              <ListItemText primary={item} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box marginTop={4}>
        <Button
          variant={'contained'}
          size={'large'}
          href= {'/Contact'}
          endIcon={
            <Box
              component={'svg'}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={24}
              height={24}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </Box>
          }
        >
          Get started
        </Button>
      </Box>
    </Box>
  );
  return (
    <Grid container spacing={4}>
      
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            maxWidth: 450,
            position: 'relative',
            marginX: 'auto',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              borderRadius: '2.75rem',
              boxShadow: 1,
              width: '75% !important',
              marginX: 'auto',
            }}
          >
            <Box>
              <Box
                position={'relative'}
                zIndex={2}
                maxWidth={1}
                height={'auto'}
                sx={{ verticalAlign: 'middle' }}
              >
                <PhoneSkeletonIllustration />
              </Box>
              <Box
                position={'absolute'}
                top={'2.4%'}
                left={'4%'}
                width={'92.4%'}
                height={'96%'}
              >
                <Box
                  component={'img'}
                  loading="lazy"
                  src={
                    theme.palette.mode === 'light'
                      ? 'https://www.debt.org/wp-content/uploads/2019/04/special-needs-assistance-1.jpg'
                      : 'https://www.debt.org/wp-content/uploads/2019/04/special-needs-assistance-1.jpg'
                  }
                  alt="Image Description"
                  width={1}
                  height={1}
                  sx={{
                    objectFit: 'cover',
                    borderRadius: '2.5rem',
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box>
          <RightSide />
        </Box>
      </Grid>

    </Grid>
  );
};

export { FeaturesCares };
