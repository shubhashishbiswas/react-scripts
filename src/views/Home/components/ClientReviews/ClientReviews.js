/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const mock = [
  {
    feedback:
      'Simsouls has changed my perception of therapy and support - it was so much better than what I expected.',
    name: 'Chary Smith',
    title: 'Parent',
    avatar: 'https://media.istockphoto.com/id/533347509/photo/close-up-of-a-mature-man-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=HT8P9FAQsBaAZ-iL_UEDB1M4xxsz4dk258l9XxPhMgM=',
  },
  {
    feedback:
      'Simsouls has been a huge pillar of support in my journey. I thank you deeply for literally being there for my baby.',
    name: 'Tim Anderson',
    title: 'Parent',
    avatar: 'https://media.istockphoto.com/id/1097618664/photo/mature-smiling-woman.jpg?s=612x612&w=0&k=20&c=nqvODQTensirt_7ALNBm5J2ixmbOl0OkUYwDDgqghUM=',
  },
  {
    feedback:
      'I would recommend Simsouls to every special needs parent - even if they have an ongoing therapy regimen.',
    name: 'Chloe Vegad',
    title: 'Caregiver',
    avatar: 'https://media.istockphoto.com/id/525949883/photo/smiling-woman.jpg?s=612x612&w=0&k=20&c=drPuUoVZMA3h0WuDpcmwWlAdIBL31WQUvZNe9IPi8wc=',
  },
  {
    feedback:
      'Your empathy and understanding of the unsaid aspects of care is amazing. Big thumbs up to team Simsouls.',
    name: 'Clint Barber',
    title: 'Parent and therapist',
    avatar: 'https://t4.ftcdn.net/jpg/00/44/50/63/360_F_44506382_EazIxapwkcV9FFRkYQXsGutxRRBTPJcT.jpg',
  },
  {
    feedback:
      'Hoping to see Simsouls grow their presence across the US - we need so much more of this.',
    name: 'Jane Anderson',
    title: 'Therapist and caregiver',
    avatar: 'https://hendersonfamilymagazine.com/wp-content/uploads/2022/03/ParentProfile-Feature.jpg',
  },
  {
    feedback:
      'I would recommend Simsouls for any developmental need of a child - they just understand children so weell.',
    name: 'Clara Bertoletti',
    title: 'Therapist and parent',
    avatar: 'https://t4.ftcdn.net/jpg/03/73/95/67/360_F_373956798_Uxao7R9DMfNMBYmZJ74H2f7VJS3yNLih.jpg',
  },
];

const ClientReviews = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={6} marginTop={6}>
        <Box display={'flex'} justifyContent={'center'}>
          {[1, 2, 3, 4, 5].map((item) => (
            <Box key={item} color={theme.palette.secondary.main}>
              <svg
                width={18}
                height={18}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </Box>
          ))}
        </Box>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          Our patrons are our biggest support.
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          Here is what they said to us
        </Typography>
      </Box>
      
      
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={i}
            sx={{
              border: 0,
              [theme.breakpoints.up('md')]: {
                borderRight: `1px solid ${theme.palette.alternate.dark}`,
                '&:nth-of-type(2n)': {
                  borderRight: `1px solid ${theme.palette.alternate.dark}`,
                },
                '&:nth-of-type(-n+4)': {
                  borderBottom: 0,
                },
                '&:nth-of-type(3n)': {
                  borderRight: 0,
                },
                '&:nth-of-type(-n+3)': {
                  borderBottom: `1px solid ${theme.palette.alternate.dark}`,
                },
              },
            }}
          >
            <Box p={2}>
              <Box marginBottom={2}>
                <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                  <ListItemAvatar>
                    <Avatar src={item.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ margin: 0 }}
                    primary={item.name}
                    secondary={item.title}
                  />
                </ListItem>
              </Box>
              <Typography color="text.secondary">{item.feedback}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      
      
    </Box>
  );
};

export { ClientReviews };
