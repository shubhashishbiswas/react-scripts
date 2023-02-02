import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
/*
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
*/

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';




const PopupBox = ({ srcLink, srcTitle, onClose, open }) => {

  const theme = useTheme();
  
  
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  
  
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });

  
    

  return (
    <Dialog
      
      onClose={onClose}
      open={open}

      /* maxWidth={'sm'} */
      maxWidth={{xs:'100vw', sm:'100vw', md: '100vw'}}
      display='flex'
      justifyContent='left'
      /* padding={'50 50'} */
      
      /* width={{xs:'50vw', sm:'50vw', md: '80vw'}} */
      /*
      width={'970px'} 
      height={'550px'}
      */
      sx={{
        '& .MuiPaper-root': {
          borderRadius: 0,
        },

        
        
        /*
        
        top: '0vh',
        height: '100vh',
        overflowY: 'scroll',

        maxWidth={{xs:'80vw', sm:'80vw', md: '60vw'}}
        
        height: '70vh',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
          display: 'none',
        }

        */
      }}
    >
      
      <Box 
        /*
        padding={4} 
        bgcolor='green'
        width={{xs:'80vw', sm:'80vw', md: '80vw'}} 
        */
        display='flex'
        justifyContent='center'
        bgcolor='black'
        sx={{
          '& .MuiPaper-root': {
            borderRadius: 4,
          },
          /* 
          top: '10vh',
          height: '95vh', 
          overflowY: 'scroll',
          */
          '&::-webkit-scrollbar': {
            display: 'none',
          }
        }}
      >
        {/* <iframe width="480" height="270" src="https://www.youtube.com/embed/eOhhENBL9fs" title="ATN/AIR-P Video Tool Kit: ABCs of Behavior- Support For Your Child's Success" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        

        {isMd ? 
          (
            <Box padding={0} 
              bgcolor='black'
              display='flex'
              justifyContent='center'
              
              width='80vw'
              sx={{
                '& .MuiPaper-root': {
                  borderRadius: 4,
                },
                 
                // top: '10vh',
                //height: '95vh', 
                // overflowY: 'scroll',
                
                '&::-webkit-scrollbar': {
                  display: 'none',
                }
              }}
            >
              <Box position='relative' bgcolor= 'transparent'>
                
                <iframe width="560" height="315" src={srcLink} title={srcTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>  </iframe>
              </Box>
            </Box>
          ) 
          
          : 
          isSm ? 
            (
              <Box padding={0} 
                bgcolor='transparent'
                display='flex'
                justifyContent='center'
                
                width='95vw'
                sx={{
                  '& .MuiPaper-root': {
                    borderRadius: 4,
                  },
                   
                  // top: '10vh',
                  //height: '95vh', 
                  // overflowY: 'scroll',
                  
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  }
                }}
              >
                <Box position='relative' bgcolor= 'transparent'> 
                  {/* <iframe  width="480" height="270" src="https://www.youtube.com/embed/iV61q2EOuyE" title="ATN/AIR-P Video Tool Kit: ABCs of Behavior- Support For Your Child's Success" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

                  <iframe width="560" height="315" src="https://www.youtube.com/embed/zIDvvRxuB9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </Box>
              </Box>
            ) 
            : 
            isXs ? 
              (
                <Box padding={0} 
                  bgcolor='transparent'
                  display='flex'
                  justifyContent='center'
                  
                  width='95vw'
                  sx={{
                    '& .MuiPaper-root': {
                      borderRadius: 4,
                    },
                    
                    // top: '10vh',
                    //height: '95vh', 
                    // overflowY: 'scroll',
                    
                    '&::-webkit-scrollbar': {
                      display: 'none',
                    }
                  }}
                >
                  <Box position='relative' bgcolor='transparent'>
                    <iframe bgcolor='transparent' width="320" height="180" src="https://www.youtube.com/embed/iV61q2EOuyE" title="ATN/AIR-P Video Tool Kit: ABCs of Behavior- Support For Your Child's Success" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </Box>

                </Box>
              ) 
              : 
              null
        }





        {/* 
        {isMd ? 
          (
            <Box padding={0} 
              bgcolor='blue'
              width='80vw'
              sx={{
                '& .MuiPaper-root': {
                  borderRadius: 4,
                },
                
                // top: '10vh',
                // height: '95vh', 
                // overflowY: 'scroll',
                
                '&::-webkit-scrollbar': {
                  display: 'none',
                }
              }}
            >
              <Box >
                <iframe width="960" height="540" src="https://www.youtube.com/embed/iV61q2EOuyE" title="ATN/AIR-P Video Tool Kit: ABCs of Behavior- Support For Your Child's Success" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </Box>
            </Box>
          ) : null
        }
        */}
        

        {/*
        {isSm ? (
          <Box >
            <iframe width="192" height="108" src="https://www.youtube.com/embed/iV61q2EOuyE" title="ATN/AIR-P Video Tool Kit: ABCs of Behavior- Support For Your Child's Success" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Box>
        ) : null}
        */}
        
        {/*
        <Box >
          <iframe width="192" height="108" src="https://www.youtube.com/embed/iV61q2EOuyE" title="ATN/AIR-P Video Tool Kit: ABCs of Behavior- Support For Your Child's Success" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Box>
        */}
        
        {/* 
        
        <Box display={{sm:'none', md:'block'}}>
          <iframe width="960" height="540" src="https://www.youtube.com/embed/iV61q2EOuyE" title="ATN/AIR-P Video Tool Kit: ABCs of Behavior- Support For Your Child's Success" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Box>
        
        
        <iframe width="960" height="540" src="https://www.youtube.com/embed/iV61q2EOuyE" title="ATN/AIR-P Video Tool Kit: ABCs of Behavior- Support For Your Child's Success" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
        
        */}
        
        {/* <iframe sx={{ width:{xs:'192', sm:'320',  md:'480', lg:'960' }, height:{xs:'108', sm:'180',  md:'270', lg:'540'} }} src="https://www.youtube.com/embed/iV61q2EOuyE" title="ATN/AIR-P Video Tool Kit: ABCs of Behavior- Support For Your Child's Success" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      </Box>

      {/*
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingY: { xs: 4, sm: 10 },
          paddingX: { xs: 4, sm: 12 },
        }}
      >
        <Typography
          variant={'h5'}
          fontWeight={700}
          align={'center'}
          marginBottom={4}
        >
          T H E F R O N T
        </Typography>
        <Typography align={'center'}>Enter your e-mail below & get</Typography>
        <Typography
          variant={'h2'}
          fontWeight={700}
          align={'center'}
          color={'primary'}
          marginY={1}
        >
          20% OFF
        </Typography>
        <Typography align={'center'}>
          <Typography component={'span'} fontWeight={700}>
            On your next purchase{' '}
          </Typography>
          + exclusive access to new products
        </Typography>
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
              GET MY 20% OFF
            </Button>
          </Grid>
        </Grid>
        <Typography
          align={'center'}
          sx={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={onClose}
        >
          I am not interested
        </Typography>
      </Box>
      */}
    </Dialog>

  );
};

PopupBox.propTypes = {
  
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default PopupBox;
