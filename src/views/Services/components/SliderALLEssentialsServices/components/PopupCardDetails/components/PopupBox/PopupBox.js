import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Container from 'components/Container';
import Divider from '@mui/material/Divider';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

import { useTheme } from '@mui/material/styles';

const eventDetails = 
  [
    'Milestones (blog)',
    'All behavior is communication (podcast)',
    'All behaviors have a reason. (podcast)',
    'How to help your child learn good behavior? (podcast)',
    'What to do when a child’s behavior becomes difficult? (podcast)',
    'How to manage behavioral crises of meltdown and shutdown? (podcast)',
    'How to manage self-injurious and self-stimulatory behaviors? (podcast)',
    'Parenting tips for special needs children (video)',
    'How play can be an effective teaching tool in therapy (video)',                 
  ];


const PopupBox = ({ title, onClose, open }) => {
  
  const theme = useTheme();
  
  return (
    <Dialog
      onClose={onClose}
      open={open}
      title={title}
      maxWidth={'sm'}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: 4,
          bgcolor: theme.palette.background.paper,
          paddingY: '2vw',
        },
        top: '0vh',
        height: '100vh',
        overflowY: 'scroll',
        
        '&::-webkit-scrollbar': {
          display: 'none',
          width: '0px',
          
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#A0A0A0'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#7D7C7C',
          borderRadius: '5px',
          marginX: '1px',
        },
      }}
    >
      
      <Box
        display='flex'
        justifyContent='left  '
        padding={'50 50'}   

        flexDirection={'column'}  

        /* maxWidth={'60vw '} */
        maxWidth={{xs:'80vw', sm:'80vw', md: '60vw'}}
        marginLeft= {0}
        sx={{
          '& .MuiOutlinedInput-root.MuiInputBase-multiline': {
            padding: 0,
            
          },
          '& .MuiOutlinedInput-input': {
            background: theme.palette.background.paper,
          },
          
          height: '70vh',
          overflowY: 'scroll',

          '&::-webkit-scrollbar': {
            display: 'none',
            
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#A0A0A0'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#7D7C7C',
            borderRadius: '5px',
            marginX: '1px',
          },
        }}
      >
        
        <Box display='flex' paddingY={0} justifyContent={'right'} paddingRight={{xs: '0.5vw', md: '1vw'}}> 
          <Button
            display={'block'} 
            onClick={onClose}
          >
            <CloseRoundedIcon />
          </Button>
        </Box>
          
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            /* paddingY: { xs: 4, sm: 10 }, */
            paddingX: { xs: 4, sm: 12 },
          }}
        >
          
          <Grid container spacing={4}>
            <Grid item container alignItems={'center'} xs={12} md={12}>
              <Box>
                <Box marginBottom={2}>
                  <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant={'h5'} sx={{ fontWeight: 500 }} gutterBottom>
                    Program Details
                  </Typography>
                  <Divider sx={{paddingX: 2 }}></Divider>
                </Box>
                <Grid container spacing={1}>




                  {eventDetails.map((item, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                      <Box >
                        <Box
                          component={ListItem}
                          disableGutters
                          width={'auto'}
                          padding={0}
                          display='flex' flexDirection='row' alignItems={'flex-start'} justifyContent={'left'} alignContent={'flex-start'}
                        >
                          <Box
                            component={ListItemAvatar}
                            minWidth={'auto !important'}
                            marginRight={2}
                            marginTop={1}
                          >
                            <Box
                              component={Avatar}
                              /* bgcolor={theme.palette.secondary.main} */
                              bgcolor={theme.palette.primary.main}
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
                          <ListItemText primary={<Typography color={theme.palette.primary.main}> Session {i}</Typography>} secondary={item} />
                        </Box>
                      </Box>
                      
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>



          


          <Grid container spacing={2} sx={{ marginY: 4 }}>
            <Grid item xs={12}>
              <TextField
                label="Enter your email"
                variant="outlined"
                name={'email'}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                size={'large'}
                variant={'contained'}
                type={'submit'}
                fullWidth
              >
                Get me registered
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                size={'large'}
                variant={'outlined'}
                type={'submit'}
                fullWidth
              >
                Share more details
              </Button>
            </Grid>
          </Grid>
          <Typography
            align={'center'}
            sx={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={onClose}
          >
            Maybe Later
          </Typography>

          <Typography variant={'p'} sx={{ fontWeight: 300 }} gutterBottom>
            <br/>
            <br/>
            Many of our programs arre offered 
            <Typography component={'span'} fontWeight={500}>
              free of charge{' '}
            </Typography>
            ,depending on the format and scope. Please contact the support team for details of this program.
          </Typography>
        </Box>
      </Box>
    </Dialog>
  );
};

PopupBox.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default PopupBox;
