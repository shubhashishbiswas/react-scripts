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
    
    headerSlide: 'Modified Checklist for Autism in Toddlers, Revised (M-CHAT-R)',
    avatar: 'https://scontent.fbom26-2.fna.fbcdn.net/v/t1.6435-9/203606517_3635672173198920_5624475317680587060_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=wLpnyOgcVEIAX9Xjtc1&_nc_ht=scontent.fbom26-2.fna&oh=00_AfAXox-ZktcJTnr6Cvg0x2XJ59HF1-Fvh1W2yNcgcXDvCg&oe=63FCDC54',

    subSlideLine1:'M-CHAT-R screener is a series of 20 questions about child’s behavior.',
    subSlideLine2:'It is best suited for toddlers between 16 and 30 months of age.',
    subSlideLine3:'Screening results and any related concerns should be discussed with pediatrician.',
    subSlideLine4:'',
    subSlideLine5:'',
    
    headerBodySlide:'',
    
    bodySlideLine1:'Developed by neuropsychologists and a clinical psychologist',
    bodySlideLine2:'Can be taken online for parents and caregivers.',
    bodySlideLine3:'Helps spot the right target-areas of ABA therapy, if needed',
    bodySlideLine4:'Covers all child development areas with auditory, social and play behavior',
    bodySlideLine5:'Like all methods, cannot be assumed to be 100% accurate',
    
    LinkForbodyLine1:'',
    LinkForbodyLine2:'',
    LinkForbodyLine3:'',
    LinkForbodyLine4:'',
    LinkForbodyLine5:'',

    CTA1:'Schedule Now',
    CTA2:'',
    LinkforCTA1:'',
    LinkforCTA2:'',
    
  },

  {
    
    headerSlide: 'Autism Diagnosis Interview – Revised (ADI-R)',
    avatar: 'https://slideplayer.com/slide/3588542/12/images/7/Assessment+%E2%80%93+ADI-R+Gold+Standards+are+Autism+Diagnostic+Interview+%E2%80%93+Revised+%28ADI-R%29+and+Autism+Diagnostic+Observation+Scale+%28ADOS%29.jpg',

    subSlideLine1:'ADI-R is a clinical autism diagnostic tool.',
    subSlideLine2:'It is best suited for for children and adults with mental age of 18+ months.',
    subSlideLine3:'Screening results and any related concerns should be discussed with pediatrician.',
    subSlideLine4:'',
    subSlideLine5:'',
    
    headerBodySlide:'',

    bodySlideLine1:'Focuses on reciprocal social interaction patterns',
    bodySlideLine2:'Studies communication and language skills benchmarked to age',
    bodySlideLine3:'Detects restricted, repetitive, stereotyped interests and behaviors.',
    bodySlideLine4:'Based on interview done by a trained researcher or psychologist.',
    bodySlideLine5:'Works well with ADOS (Autism Diagnostic Observation Schedule)',
    
    LinkForbodyLine1:'',
    LinkForbodyLine2:'',
    LinkForbodyLine3:'',
    LinkForbodyLine4:'',
    LinkForbodyLine5:'',

    CTA1:'Schedule Now',
    CTA2:'',
    
    LinkforCTA1:'/Dummy',
    LinkforCTA2:'',
    
  },

  {
    
    headerSlide: 'Childhood Autism Rating Scale (CARS)',
    avatar: 'https://0901.static.prezi.com/preview/v2/jm5psxvpkluydyirrlbwfn6gul6jc3sachvcdoaizecfr3dnitcq_3_0.png',

    subSlideLine1:'CARS is a diagnostic assessment based on behavior scale that rates individuals from normal to severe.',
    subSlideLine2:'It is best suited for toddlers of 2+ years. ',
    subSlideLine3:' It focuses on differenting autism from other developmental delays such as intellectual disability.',
    subSlideLine4:'',
    subSlideLine5:'',
    
    headerBodySlide:'',
    
    bodySlideLine1:'Focuses on five characteristic abilities of the child',
    bodySlideLine2:'Studies communication and language skills benchmarked to age',
    bodySlideLine3:'Detects restricted, repetitive, stereotyped interests and behaviors.',
    bodySlideLine4:'Focuses on reciprocal social interaction patterns', 
    bodySlideLine5:'Works on a 15-module format to cover all aspects of differentiation.',
    
    CTA1:'Schedule Now',
    CTA2:'',

    LinkForbodyLine1:'',
    LinkForbodyLine2:'',
    LinkForbodyLine3:'',
    LinkForbodyLine4:'',
    LinkForbodyLine5:'',

    LinkforCTA1:'/Dummy',
    LinkforCTA2:'',
    
  },

  {
    
    headerSlide: 'Autism Diagnostic Observation Schedule – Generic (ADOS-G)',
    avatar: 'https://static.wixstatic.com/media/37fad1_8da21c09d9f74787acc777ce536a43c0~mv2.jpg/v1/fill/w_814,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/37fad1_8da21c09d9f74787acc777ce536a43c0~mv2.jpg',

    subSlideLine1:'ADOS-G is a semi-structured & standardized assessment consisting of four 30-minute modules.',
    subSlideLine2:'It is suited for toddlers to adults, depending on the mental age',
    subSlideLine3:' Each module is designed for individual’s level of expressive language.',
    subSlideLine4:'',
    subSlideLine5:'',
    
    headerBodySlide:'',
    
    bodySlideLine1:'Focuses on social interaction, communication and play',
    bodySlideLine2:'Studies the child/’s current functioning through a structured play session.',
    bodySlideLine3:'Often done in combination with ADI-R test',
    bodySlideLine4:'Focuses on reciprocal social interaction patterns', 
    bodySlideLine5:'Studies communication and language skills benchmarked to age',
    
    CTA1:'Schedule Now',
    CTA2:'',

    LinkForbodyLine1:'',
    LinkForbodyLine2:'',
    LinkForbodyLine3:'',
    LinkForbodyLine4:'',
    LinkForbodyLine5:'',

    LinkforCTA1:'/Dummy',
    LinkforCTA2:'',
    
  },  

  {
    
    headerSlide: 'Gilliam Autism Rating Scale – 2nd Edition (GARS-2)',
    avatar: 'https://img.haikudeck.com/mg/Wrec6KRncv_1424712279336.jpg',

    subSlideLine1:'GARS-2 assists teachers, parents, and clinicians in identifying and diagnosing autism and it’s severity ',
    subSlideLine2:'It is suited to individual ages 3 through 22.',
    subSlideLine3:'Is is usually completed in 5–10 minutes, and can be taken offline',
    subSlideLine4:'',
    subSlideLine5:'',
    
    headerBodySlide:'',
    
    bodySlideLine1:'Focuses on social interaction amd restricted behaivior patterns',
    bodySlideLine2:'Reflects and utilizes the items and subscales of the DSM-5',
    bodySlideLine3:'ranks scores based on the individuals in the same group (norm group).',
    bodySlideLine4:'A norm group could be categorized based on age, socioeconomic status, race/ethnicity etc.', 
    bodySlideLine5:'Fairly updated & recognized since 2013, with more updates coming up',


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

const FSSAutismAssessment = () => {
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
                      <Box marginBottom={2}>
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
                        <Button href= {'/Resources'} endIcon = {
                          <Box component={'svg'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
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

export { FSSAutismAssessment };
