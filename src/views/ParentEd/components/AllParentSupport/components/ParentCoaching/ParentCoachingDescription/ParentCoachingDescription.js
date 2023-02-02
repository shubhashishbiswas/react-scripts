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
    
    headerSlide: 'Why can Personalized Coaching help?',
    avatar: 'https://ezcareclinic.io/wp-content/uploads/2022/04/EZCare-Support-F-2-4.png.webp',

    subSlideLine1:'Parental oversight is the single-biggest factor in a child’s development.',
    subSlideLine2:'However, even the best intending parents often fall short when preparing on their own.',
    subSlideLine3:'A coach handholds and gives careful, customized guidance to ensure there are no mistakes',
    subSlideLine4:'',
    subSlideLine5:'',
    
    headerBodySlide:'A parental education course helps to:',

    bodySlideLine1:'Be a well-informed parent',
    bodySlideLine2:'Equip you, the parent, with the necessary skills',
    bodySlideLine3:'Intentionally drive consistency and structure at home and in therapy',
    bodySlideLine4:'',
    bodySlideLine5:'',
    
    LinkForbodyLine1:'',
    LinkForbodyLine2:'',
    LinkForbodyLine3:'',
    LinkForbodyLine4:'',
    LinkForbodyLine5:'',
  },

  {
    
    headerSlide: 'Why choose SimSouls for personalized parental coaching?',
    avatar: 'https://www.helpguide.org/wp-content/uploads/man-communicating-intently-with-woman.jpg',

    subSlideLine1:'We are parents to neuro-divergent children ourselves, and understand your exact needs.Furthermore,  who believe that not just a child, but every parent too, is different.',
    subSlideLine2:'Our parental coach, a BCBA, offers timely and personalized guidance for parents to quickly learn & adapt for the changing needs of your precious one.',
    subSlideLine3:'As a parent, your specific needs, styles and preferences is our top priority.',
    subSlideLine4:'',
    
    headerBodySlide:'Our sessions are:',
    
    bodySlideLine1:'Tuned to specific neuro diverse conditions, age-groups, background etc. to ensure personalization',
    bodySlideLine2:'are a combination of standard-schedule and on-call availability of coaches to cover you at all times.',
    bodySlideLine3:'Administered by a dedicated support team to let you focus on what matters most',
    bodySlideLine4:'Driven by highly qualified, professional experts trained as coaches, not just caregivers.',
    bodySlideLine5:'',
    
    LinkForbodyLine1:'',
    LinkForbodyLine2:'',
    LinkForbodyLine3:'',
    LinkForbodyLine4:'',
    LinkForbodyLine5:'',
  },

];

const ParentCoachingDescription = () => {
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
          /* bgcolor={theme.palette.background.white} padding={4}  */
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
                    flexDirection: { xs: 'column', md:  i % 2 == 0 ? 'row' : 'row-reverse'},
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

                        <Typography variant='h5'>
                          {item.headerBodySlide==='' ?  <Box> <br /></Box> : <Box> {item.headerBodySlide} </Box>}
                        </Typography>


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

export { ParentCoachingDescription };
