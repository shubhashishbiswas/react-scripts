/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

import { colors } from '@mui/material';

const mock = [
  {
    color: colors.lightBlue[500],
    title: 'Web Diagnostic/Screening Services',
    subtitle: 'Assess a child’s functional behavior, skill development & autism.',
    CTAlink: '',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    color: colors.yellow[500],
    title: 'Applied Behavior Analysis (ABA)',
    subtitle: 'Improve your child\'s core skills and reduce harmful behaviors',
    CTAlink: '',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    color: colors.indigo[500],
    title: 'Parental Enablement',
    subtitle: 'Get training & support as a parent to complement therapy and maximize benefits',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    color: colors.deepPurple[500],
    title: 'Feeding Therapy',
    subtitle: 'Join your child as he/she learns how eating can be a nourshing, enjoyable experience',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
  },
  {
    color: colors.lightBlue[500],
    title: 'Speech Therapy',
    subtitle: 'Develop comprehension, clarity, voice, fluency, and sound production in your child',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    color: colors.yellow[500],
    title: 'Occupational Therapy',
    subtitle: 'Enable your child to develop physical, sensory, or cognitive skills & (re)gain independence',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  }
];

const FeaturesEssentials = () => {
  //  const theme = useTheme();

  const RightSide = () => (
    <Grid container spacing={2} marginTop={0}>
      {mock.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          data-aos-offset={100}
          data-aos-duration={600}
        >
          <Box
            display={'block'}
            width={1}
            sx={{
              transform: index % 2 === 1 ? { md: 'translateY(80px)' } : 'none',
            }}
          >
            <Box component={Card} padding={2} borderRadius={2} width={1}>
              <Box display={'flex'} flexDirection={'column'}>
                {/*
                <Box
                  component={Avatar}
                  width={30}
                  height={30}
                  marginBottom={2}
                  bgcolor={alpha(item.color, 0.1)}
                  color={item.color}
                  variant={'rounded'}
                  borderRadius={2}
                >
                  {item.icon}
                </Box>
                */}
                <Typography
                  variant={'h6'}
                  sx={{ fontWeight: 700 }}
                >
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.subtitle}</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box display={'flex'} justifyContent={'flex-end'}>
                  <Button
                    href= {'/Resources'}
                    endIcon={
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        href= {'/Contact'}
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
                    Learn more
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  const LeftSide = () => (
    <Box>
      <Box marginBottom={2} marginTop= {{lg:25 }}>
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
          SimSouls Essentials helps you 
          <br />
          take charge of your 
          <br />
          child's development needs
        </Typography>
        <Typography color="text.secondary" variant={'h6'}>
          Explore our diagnostics & therapy services 
        </Typography>
      </Box>
      
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
          Schedule Appointment
        </Button>
      </Box>
    </Box>
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} alignItems={'center'}>
        <LeftSide />
      </Grid>
      <Grid item container alignItems={'center'} xs={12} md={6} >
        <RightSide />
      </Grid>
    </Grid>
  );
};

export { FeaturesEssentials };
