import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Grid from '@mui/material/Grid';

const FaqGroupItem = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography fontWeight={700} variant={'h5'}>
          {title}
        </Typography>
      </Box>
      <Box>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={i === item.length - 1 ? 0 : 2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

FaqGroupItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

const Content = () => {
  return (
    <Box>
      

      <Grid>
        <Grid item md={4} data-aos={'fade-up'} padding={1}>          
        
          <Box display='flex'>
            
            <Box marginBottom={6} display='flex'>
              <Box height={1} width={1} padding={1}>
                <FaqGroupItem sx={{marginY:'20px'}}
                  items={[
                    {
                      title: 'Super Mom Champions',
                      subtitle:
                        'A mother of a special needs child is the best therapist we know of. So, we strive to hire and rigorously train single mothers of special needs children, with a path to partnership in the clinic so that no mother must struggle with conflicting priorities of childcare, financial security & career.',
                    },
                    {
                      title: 'A family-centered care team',
                      subtitle:
                        'Every child is special and unique. Parents know the child better than anyone. So, we insist on an active role of parents in their child’s development. We seek parent’s perspective and input to collectively give a child the best care possible.',
                    },
                    {
                      title: 'Community Approach',
                      subtitle:
                        'Not every child is able to come to our clinic. That’s why we serve our communities outside of our walls with community sessions, community events, at-home & telehealth support, sponsored care & legislative advocacy.'                
                    },
                    {
                      title: 'High Quality, Constant Improvement',
                      subtitle:
                        'We are the only high-touch clinic with neuroscientists analyzing, guiding, and working closely with care teams – BCBA and therapists. We have the resources, experience, education and most importantly ‘the heart’ to care for your child.',
                    },
                    {
                      title: 'Age-benchmarked lifetime focus',
                      subtitle:
                        'At SimSouls, we are by your side at every step of your child’s life journey. To achieve this goal, we aspire to offer age appropriate and comprehensive support that includes - developmental screening & therapies, parent ed programs, specialized nannies/babysitters, day care, special ed school, summer camp and group living.',
                    },
                    {
                      title: 'Most updated, research driven therapy',
                      subtitle:
                        'Our top-notch experts deploy the latest in research and innovation to maximie benefit to your child',
                    },
                  ]}
                />
              </Box>
            </Box>

            <Box
              component={'img'}
              src={'https://149814860.v2.pressablecdn.com/wp-content/uploads/2021/07/12.-Unstuck-with-calming.png'}
              
              
              boxShadow= {24}
              sx={{
                maxWidth: { xs: 250, sm: 250, md:380, lg:400 }, 
                marginTop: 'auto',
                marginBottom: 'auto',
                height: 'auto',
                alignContent: 'center',
                right: 0, 
                display: { xs: 'none', md: 'block' },
                borderRadius: '50% 50% 50% 50%',
                marginLeft: '5vw',
                marginRight: '3vw'
              }}
            />
            
          </Box>
        </Grid>
      </Grid>
    
    </Box>
  );
};

export default Content;
