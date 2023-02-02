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

import Tags from '../Tags';

import { useEffect } from 'react';
import Container from '@mui/material/Container';

const mock = [
  {
    
    headerSlide: 'FAST behavioral Screening',
    avatar: 'https://slideplayer.com/slide/5710250/18/images/63/behavioral+Assessment+Screening+Tool.jpg',

    subSlideLine1:'FAST is a well-know indirect behavioral assessment method.',
    subSlideLine2:'It is comprised of a self-report checklist to identity retained behavior challenges. ',
    subSlideLine3:'The assessment is a short 16 item checklist of “yes,” “no,” or “not applicable.” responses',
    subSlideLine4:'',
    subSlideLine5:'',
    
    
    bodySlideLine1:'',
    bodySlideLine2:'',
    bodySlideLine3:'',
    bodySlideLine4:'',
    bodySlideLine5:'',
    
    CTA1:'Schedule Now',
    CTA2:'',

    LinkForbodyLine1:'',
    LinkForbodyLine2:'',
    LinkForbodyLine3:'',
    LinkForbodyLine4:'',
    LinkForbodyLine5:'',

    LinkforCTA1:'',
    LinkforCTA2:'',
    
  },

  {
    
    headerSlide: 'MaaS – Motivational Assessment Screening',
    avatar: 'https://store.monacoassociates.com/images/products/detail/MASEnBundle.jpg',

    subSlideLine1:'MaaS has been validated across cultures and age groups.',
    subSlideLine2:'It aids of research-domains related to in self-determination and self-consciousness',
    subSlideLine3:'It can be useful in helping people discover a baseline to cultivate this inherent human ability',
    subSlideLine4:'',
    subSlideLine5:'',
    
    
    bodySlideLine1:'',
    bodySlideLine2:'',
    bodySlideLine3:'',
    bodySlideLine4:'',
    bodySlideLine5:'',
    
    CTA1:'Schedule Now',
    CTA2:'',

    LinkForbodyLine1:'',
    LinkForbodyLine2:'',
    LinkForbodyLine3:'',
    LinkForbodyLine4:'',
    LinkForbodyLine5:'',

    LinkforCTA1:'',
    LinkforCTA2:'',
    
  },

  {
    
    headerSlide: 'QABF Screening',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jyTZtjJVEJtQY8pJmGD0EgwGPO6Ys1772g4WEYQ2OGyLK-GaAvP9upiaC00a5tGYpvw&usqp=CAU',

    subSlideLine1:'QABF Screening helps in functional assessment of behavior problems in persons with developmental disabilities',
    subSlideLine2:'The instrument yields five categories reflecting the behavioral functions  - Attention, Escape, Physical, Tangible, and Nonsocial',
    subSlideLine3:'',
    subSlideLine4:'',
    subSlideLine5:'',
    
    
    bodySlideLine1:'',
    bodySlideLine2:'',
    bodySlideLine3:'',
    bodySlideLine4:'',
    bodySlideLine5:'',
    
    CTA1:'Schedule Now',
    CTA2:'',

    LinkForbodyLine1:'',
    LinkForbodyLine2:'',
    LinkForbodyLine3:'',
    LinkForbodyLine4:'',
    LinkForbodyLine5:'',

    LinkforCTA1:'',
    LinkforCTA2:'',

  },
];


const FSSFuncBehaviorAssessment = () => {
  const theme = useTheme();

  const styles = (bgImage) => ({
    position: 'absolute',
    objectFit: 'cover',
    /* support for plugin https://github.com/bfred-it/object-fit-images */
    fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${bgImage})`,
    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
  });
  
  
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }
  
      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };
    jarallaxInit();
  });


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
      
      
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        height={{sm:'70vh', lg:'50vh'}}
        display={'flex'}
        alignItems={'center'}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            'https://maharatlearning.com/wp-content/uploads/2022/10/aba-header-scaled.jpg',
          )}
        />
        <Box display='flex' justifyContent='center' alignitems='center' alignContent='center' height={1} width={1}>
          <Box 
            padding={2}
            width={1}
            sx={{
              bgcolor: 'rgba(0, 0, 0,0.5)'
            }}
            display='flex' justifyContent='center' alignContent={'center'} alignItems={'center'}
          >
            <Container>
              <Box display={'flex'} flexDirection={'column'} justifyItems={'left'} alignContent={'flex-start'}>
                <Typography
                  color={theme.palette.text.semilight}
                  sx={{
                    textTransform: 'uppercase',
                    fontWeight: 'medium',
                  }}
                  gutterBottom
                  align={'left'}
                  
                >
                  OFFERING
                </Typography>

                <Typography
                  color= {theme.palette.text.light}
                  variant="h4"
                  align={'left'}
                  paddingcenter='2vw'
                  data-aos={'fade-up'}
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    marginTop: theme.spacing(1),
                  }}
                >
                  Behavior Assessments
                </Typography>

                <Typography
                  color= {theme.palette.text.light}
                  variant="h6"
                  align={'left'}
                  data-aos={'fade-up'}
                >
                  Behavior assessment allows for early detection of many potential growth diosrders
                </Typography>

                <Box 
                  display={'flex'}
                  alignItems={'flex-start'}
                  justifyItems={'flex-start'}
                  alignContent={'left'}
                  justifyContent={'left'}
                  display={{xs:'none', md:'flex'}}
                  
                  
                >
                  <Tags />
                </Box>
                
                
                <Box display="flex" justifyContent={'left'} marginTop={2} >
                  <Button variant="contained" size="large" href= {'/Contact'}
                    endIcon={
                      <Box component={'svg'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </Box>
                    }
                  >
                    Start now
                  </Button>
                </Box>
                
              </Box>
            </Container>
            
          </Box>
        </Box>
      </Box>
      
      
      <Box position={'relative'} zIndex={2} paddingX={2} paddingTop={4} marginX={{xs:'auto', sm:'auto', md:'0px'}}>
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
                        <Typography color="text.primary">
                          {item.subSlideLine1==='' ?  <Box> <br/> </Box> : <Box> {item.subSlideLine1}</Box>}
                          {item.subSlideLine2==='' ?  <Box> <br/> </Box> : <Box> {item.subSlideLine2}</Box>}
                          {item.subSlideLine3==='' ?  <Box> <br/> </Box> : <Box> {item.subSlideLine3}</Box>}
                          {item.subSlideLine4==='' ?  <Box> <br/> </Box> : <Box> {item.subSlideLine4}</Box>}
                          {item.subSlideLine5==='' ?  <Box> <br/> </Box> : <Box> {item.subSlideLine5}</Box>}
                        </Typography>
                      </Box>
                      <Grid container spacing='2px'>

                        <Typography variant='h4'>
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
                        <Button variant="contained" size="large" href= {'/Contact'}
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
                          Start now
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

export { FSSFuncBehaviorAssessment };
