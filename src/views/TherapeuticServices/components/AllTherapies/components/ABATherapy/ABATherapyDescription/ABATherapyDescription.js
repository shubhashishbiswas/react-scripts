import React from 'react';
import Slider from 'react-slick';
import { alpha, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';


import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

const mock = [
  {
    
    headerSlide: 'Why is ABA needed?',
    avatar: 'https://images.squarespace-cdn.com/content/v1/55883ca2e4b0751e884a7f59/1575648362309-GMDSEHCTCIJNKFHUBISL/Poster+-+What+is+ABA%3F.png',

    subSlideLine1:'ABA Therapy is based on the study of learning and behavior.',
    subSlideLine2:'This is hard to classify from other neurodivergent disorders, and can be easily misread.',
    subSlideLine3:'',
    subSlideLine4:'',
    
    
    bodySlideLine1:'Practiced since 1960s and proven effective in clinical studies',
    bodySlideLine2:'Recommended by American medical associations and the US Surgeon General.',
    bodySlideLine3:'Helps your child cope with general areas of skill development and social needs.',
    bodySlideLine4:'Aids parents in understanding the needs & expressions of the child better.',
    bodySlideLine5:'Enables caregivers to use proven techniques in usual and special situations',
    
    LinkForbodyLine1:'',
    LinkForbodyLine2:'',
    LinkForbodyLine3:'',
    LinkForbodyLine4:'',
    LinkForbodyLine5:'',
  },

  {
    
    headerSlide: 'Why choose SimSouls?',
    avatar: 'https://img.freepik.com/premium-photo/close-upa-confident-therapist-with-stethoscope_252847-50113.jpg?w=740',

    subSlideLine1:'ABA Therapy is based on the study of learning and behavior.',
    subSlideLine2:'This is hard to classify from other neurodivergent disorders, and can be easily misread.',
    subSlideLine3:'',
    subSlideLine4:'',
    
    
    bodySlideLine1:'increase language, communication & social skills',
    bodySlideLine2:'build essential cognitive skills - attention, focus, memory, waiting, transitioning & emotional regulation',
    bodySlideLine3:'address challenging behaviors and promote positive & safe behaviors',
    bodySlideLine4:'develop independence such as self-care, toileting, grooming',
    bodySlideLine5:'prepare for school with learn and play skills',
    
    LinkForbodyLine1:'',
    LinkForbodyLine2:'',
    LinkForbodyLine3:'',
    LinkForbodyLine4:'',
    LinkForbodyLine5:'',
  },

];

const ABATherapyDescription = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: isMd ? true : true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: isMd ? true : true, 
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box
      sx={{
        position: 'relative',
        boxShadow: 0,
        paddingBottom: 6,
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          top: 0,
          right: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4,
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box position={'relative'} zIndex={2} /* bgcolor={theme.palette.background.white}*/paddingX={2} paddingTop={4} marginX={{xs:'auto', sm:'auto', md:'0px'}}>
        <Box
          
          sx={{
            height: { xs: 'auto', md: 1 },
            '& .slick-slide img': {
              objectFit: 'cover',
            },
            '& .slick-list, & .slick-slider, & .slick-track, & .slick-slide > div': {
              height: { xs: 'auto', md: 1 },
            },
            '& .slick-prev, & .slick-next': {
              zIndex: 2,
              bottom: 0,
              top: '100%',
              left: '100%',
              right: 0,
              transform: `translate(-100%, calc(-100% - ${theme.spacing(2)}))`,
              marginLeft: theme.spacing(-2),
              width: 32,
              height: 32,
              '&:before': {
                fontSize: 32,
                color: 'primary.main',
              },
            },
            '& .slick-prev': {
              marginLeft: theme.spacing(-7),
            },
          }}
        >
          <Slider {...sliderOpts}>
            {mock.map((item, i) => (
              <Box key={i}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: (i + 1) % 2 === 0 ? 'row' : 'row-reverse' },
                    boxShadow: 0,
                    background: 'transparent',
                  }}
                >
                  <CardMedia>

                    <Box padding={2}>
                      <Box
                        component={'img'}
                        /* src={'https://149814860.v2.pressablecdn.com/wp-content/uploads/2021/07/12.-Unstuck-with-calming.png'} */
                        src={item.avatar}
                        boxShadow= {24}
                        sx={{
                          maxWidth: { xs: 150, sm: 150, md:280, lg:300 }, 
                          maxHeight: { xs: 150, sm: 150, md:280, lg:300 }, 

                          width: { xs: 150, sm: 150, md:280, lg:300 }, 
                          height: { xs: 150, sm: 150, md:280, lg:300 }, 
                          marginTop: 'auto',
                          marginBottom: 'auto',
                          /* height: 'auto',*/
                          alignContent: 'center',
                          right: 0, 
                          display: { xs: 'block', md: 'block' },
                          borderRadius: '50% 50% 50% 50%',
                          objectFit: 'contain',
                          boxShadow: 4,
                        }}
                      />
                    </Box>
                  </CardMedia>
                  <CardContent
                    sx={{
                      display: 'flex',
                      alignItems: 'left',
                      marginLeft: { sx: 0, md: 2 },
                    }}
                  >




                    <Box>
                      <Box marginBottom={2} >
                        <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                          {item.headerSlide}
                        </Typography>
                        {/* <Typography color="text.secondary"> */}
                        <Typography color="text.primary" padding={0}>
                          {item.subSlideLine1}
                          <br />
                          {item.subSlideLine2}
                        </Typography>
                      </Box>
                      <Grid container spacing='2px'>
                        {[
                          {line: item.bodySlideLine1, link: item.LinkForbodyLine1},                          
                          {line: item.bodySlideLine2, link: item.LinkForbodyLine2},                          
                          {line: item.bodySlideLine3, link: item.LinkForbodyLine3},                          
                          {line: item.bodySlideLine4, link: item.LinkForbodyLine4},                          
                          {line: item.bodySlideLine5, link: item.LinkForbodyLine5},   
                        ].map((item2, i2) => (
                          <Grid item xs={12}  key={i2}>
                            <Box
                              component={ListItem}
                              disableGutters
                              width={'auto'}
                              padding={0}
                              margin={0}
                              display={'flex'}
                              flexDirection={'row'}
                              alignItems={'flex-start'}
                              justifyItems={'left'}
                            >

                              {item2.line === ''? <Box></Box> :
                                (
                                  <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyItems={'center'}>
                                    <Box
                                      component={ListItemAvatar}
                                      minWidth={'auto !important'}
                                      marginRight={2}
                                      marginTop={'0.3em'}
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
                                  </Box>
                                )  
                              }

                              <ListItemText primary={item2.line} />
                              {/*
                              <Button href={item2.link}> Know More </Button>
                              */}
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                      <Box
                        marginTop={2}
                        display={'flex'}
                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                      >
                        <Button
                          href= {'/Resources'}
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
                          Read More
                        </Button>
                      </Box>
                    </Box>

                    
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export { ABATherapyDescription };
