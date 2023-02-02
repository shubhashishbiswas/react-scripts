import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Container from '@mui/material/Container';

import { PopupCardDetails } from './components/PopupCardDetails';

const mock = [
  {
    category: 'Development',
    media: 'https://www.angelsense.com/wp-content/uploads/2016/09/shutterstock_24826897.jpg',
    title: 'Child Development 101',
    tutor: 'Dr. Praveen Kumar, Dev. Pediatrician',
    
    audience: 'For Parents',
    summary: '60 – 90 minute community session on brain formation stages, developmental areas, risk factors and regression.',
    
    users: [
      'https://hendersonfamilymagazine.com/wp-content/uploads/2022/03/ParentProfile-Feature.jpg',
      'https://t4.ftcdn.net/jpg/00/44/50/63/360_F_44506382_EazIxapwkcV9FFRkYQXsGutxRRBTPJcT.jpg',
      'https://media.istockphoto.com/id/525949883/photo/smiling-woman.jpg?s=612x612&w=0&k=20&c=drPuUoVZMA3h0WuDpcmwWlAdIBL31WQUvZNe9IPi8wc=',
      'https://media.istockphoto.com/id/1097618664/photo/mature-smiling-woman.jpg?s=612x612&w=0&k=20&c=nqvODQTensirt_7ALNBm5J2ixmbOl0OkUYwDDgqghUM=',
      'https://media.istockphoto.com/id/533347509/photo/close-up-of-a-mature-man-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=HT8P9FAQsBaAZ-iL_UEDB1M4xxsz4dk258l9XxPhMgM=',
    ],
  },
  {
    category: 'Autism',
    media: 'https://images.squarespace-cdn.com/content/v1/5e5e97f2fd9fbc2e803e24d8/1583258884968-OAKT4GMCHN16I1M2NYHX/banner.jpg',
    title: 'Autism 101',
    tutor: 'Dr. Erica Jowett-Hirst, BCBA',
    
    audience: 'For Parents',
    summary: '90 – 120 minute interactive session to understand autism - prevalence, diagnosis, symptoms, causes & how to handle it right.',
    
    users: [
      'https://media.istockphoto.com/id/525949883/photo/smiling-woman.jpg?s=612x612&w=0&k=20&c=drPuUoVZMA3h0WuDpcmwWlAdIBL31WQUvZNe9IPi8wc=',
      'https://media.istockphoto.com/id/533347509/photo/close-up-of-a-mature-man-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=HT8P9FAQsBaAZ-iL_UEDB1M4xxsz4dk258l9XxPhMgM=',
      'https://media.istockphoto.com/id/1097618664/photo/mature-smiling-woman.jpg?s=612x612&w=0&k=20&c=nqvODQTensirt_7ALNBm5J2ixmbOl0OkUYwDDgqghUM=',
    ],
  },
  {
    category: 'Development',
    media: 'https://www.prevention.psu.edu/uploads/project-heroes/_1800xAUTO_fit_center-center/parents-with-mentor-AdobeStock_196996852-opt.jpg',
    title: 'Challenging Behaviors',
    tutor: 'Dr. Erica Jowett-Hirst, BCBA',
    
    audience: 'For Parents',
    summary: 'D90 – 120 minute interactive session to understand a variety of hard-to-manage behavior patterns & early intervention for the child’s development journey.',
    
    users: [
      'https://t4.ftcdn.net/jpg/00/44/50/63/360_F_44506382_EazIxapwkcV9FFRkYQXsGutxRRBTPJcT.jpg',
      'https://media.istockphoto.com/id/533347509/photo/close-up-of-a-mature-man-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=HT8P9FAQsBaAZ-iL_UEDB1M4xxsz4dk258l9XxPhMgM=',
      'https://media.istockphoto.com/id/525949883/photo/smiling-woman.jpg?s=612x612&w=0&k=20&c=drPuUoVZMA3h0WuDpcmwWlAdIBL31WQUvZNe9IPi8wc=',
      'https://media.istockphoto.com/id/1097618664/photo/mature-smiling-woman.jpg?s=612x612&w=0&k=20&c=nqvODQTensirt_7ALNBm5J2ixmbOl0OkUYwDDgqghUM=',
      'https://hendersonfamilymagazine.com/wp-content/uploads/2022/03/ParentProfile-Feature.jpg',
    ],
  },
  {
    category: 'Development',
    media: 'https://emeryondivorce.com/wp-content/uploads/2020/10/21443C243BC148F38717ED65C6028349.jpeg',
    title: 'Communication',
    tutor: 'Dr. Erica Jowett-Hirst, BCBA',
    
    audience: 'For Parents',
    summary: '90 – 120 minute interactive session to understand communication issues in is autism, and how parents can help their child’s development journey.',
    
    users: [
      'https://media.istockphoto.com/id/525949883/photo/smiling-woman.jpg?s=612x612&w=0&k=20&c=drPuUoVZMA3h0WuDpcmwWlAdIBL31WQUvZNe9IPi8wc=',
      'https://media.istockphoto.com/id/1097618664/photo/mature-smiling-woman.jpg?s=612x612&w=0&k=20&c=nqvODQTensirt_7ALNBm5J2ixmbOl0OkUYwDDgqghUM=',
    ],
  },

  {
    category: 'Development',
    media: 'https://www.northshore.org/globalassets/healthy-you/blog/2012-2014/sleep_eating_kids_blog-small.jpg',
    title: 'Picky Eating',
    tutor: 'Dr. Erica Jowett-Hirst, BCBA',
    
    audience: 'For Parents',
    summary: '90 – 120 minute interactive session to understand picky eating behavior patterns, and how to handle them right with proven techniques.',
    
    users: [
      'https://media.istockphoto.com/id/1097618664/photo/mature-smiling-woman.jpg?s=612x612&w=0&k=20&c=nqvODQTensirt_7ALNBm5J2ixmbOl0OkUYwDDgqghUM=',
      'https://hendersonfamilymagazine.com/wp-content/uploads/2022/03/ParentProfile-Feature.jpg',
      'https://media.istockphoto.com/id/525949883/photo/smiling-woman.jpg?s=612x612&w=0&k=20&c=drPuUoVZMA3h0WuDpcmwWlAdIBL31WQUvZNe9IPi8wc=',
    ],
  },

  {
    category: 'Services',
    media: 'https://raisingchildren.net.au/__data/assets/image/0029/47666/autism-spectrum-disorder-primary-schoolnarrow.jpg',
    title: 'School Services',
    tutor: 'Dr. Erica Jowett-Hirst, BCBA',
    
    audience: 'For Parents',
    summary: '90 – 120 minute interactive session to understand how schooling for special needs child works differently, and how to get it right.',
    
    users: [
      'https://media.istockphoto.com/id/525949883/photo/smiling-woman.jpg?s=612x612&w=0&k=20&c=drPuUoVZMA3h0WuDpcmwWlAdIBL31WQUvZNe9IPi8wc=',
      'https://media.istockphoto.com/id/533347509/photo/close-up-of-a-mature-man-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=HT8P9FAQsBaAZ-iL_UEDB1M4xxsz4dk258l9XxPhMgM=',
      'https://t4.ftcdn.net/jpg/00/44/50/63/360_F_44506382_EazIxapwkcV9FFRkYQXsGutxRRBTPJcT.jpg',
      'https://media.istockphoto.com/id/1097618664/photo/mature-smiling-woman.jpg?s=612x612&w=0&k=20&c=nqvODQTensirt_7ALNBm5J2ixmbOl0OkUYwDDgqghUM=',
      'https://hendersonfamilymagazine.com/wp-content/uploads/2022/03/ParentProfile-Feature.jpg',
    ],
  },

  {
    category: 'Development',
    media: 'https://mommybites.com/wp-content/uploads/2018/10/potty-training-e1540172885787.jpg',
    title: 'Toileting',
    tutor: 'Dr. Erica Jowett-Hirst, BCBA',
    
    audience: 'For Parents',
    summary: '90 – 120 minute interactive session to understand toilet training for all age-groups in autism, and how to best cope as a caregiver',
    
    users: [
      'https://media.istockphoto.com/id/1097618664/photo/mature-smiling-woman.jpg?s=612x612&w=0&k=20&c=nqvODQTensirt_7ALNBm5J2ixmbOl0OkUYwDDgqghUM=',
      'https://hendersonfamilymagazine.com/wp-content/uploads/2022/03/ParentProfile-Feature.jpg',
      'https://media.istockphoto.com/id/525949883/photo/smiling-woman.jpg?s=612x612&w=0&k=20&c=drPuUoVZMA3h0WuDpcmwWlAdIBL31WQUvZNe9IPi8wc=',
    ],
  },
  {
    category: 'General',
    media: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj3lqKzz7WH_q2WMPsA5ottueUnVswrV4kM3Q2p7s1agr3EViVPNKJxUH-bnZOaxGl1AY&usqp=CAU',
    title: 'Child Development FAQs',
    tutor: 'Dr. Praveen Kumar, Dev. Pediatrician',
    
    audience: 'For Parents',
    summary: '90 – 120 minute interactive session to ask anything you need to know from experts who have studied and helped thousands of families.',
    
    users: [
      'https://t4.ftcdn.net/jpg/00/44/50/63/360_F_44506382_EazIxapwkcV9FFRkYQXsGutxRRBTPJcT.jpg',
      'https://media.istockphoto.com/id/1097618664/photo/mature-smiling-woman.jpg?s=612x612&w=0&k=20&c=nqvODQTensirt_7ALNBm5J2ixmbOl0OkUYwDDgqghUM=',
      'https://hendersonfamilymagazine.com/wp-content/uploads/2022/03/ParentProfile-Feature.jpg',
    ],
  },
];

const FeaturedEventsSlider = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: isMd ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Featured Events & Sessions
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Browse our upcoming events & sessions
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          We bring together families who feel lonely & helpless in this journey
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          justifyContent={'center'}
          marginTop={2}
        > 
        </Box>
      </Box>



      <Box maxWidth={{ xs: 420, sm: 620, md: 1 }} margin={'0 auto'}>



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
              top: '107%',
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
              <Box key={i} padding={{ xs: 1, md: 2, lg: 3 }}>
                <Box
                  display={'block'}
                  width={1}
                  height={1}
                  sx={{
                    textDecoration: 'none',
                    transition: 'all .2s ease-in-out',
                    '&:hover': {
                      transform: `translateY(-${theme.spacing(1 / 2)})`,
                    },
                  }}
                >
                  <Box
                    component={Card}
                    width={1}
                    height={1}
                    
                    display={'flex'}
                    flexDirection={'column'}
                    sx={{ backgroundImage: 'none' }}
                    paddingBottom={3}
                  >
                    <CardMedia
                      title={item.title}
                      image={item.media}
                      sx={{
                        position: 'relative',
                        height: { xs: 240, sm: 340, md: 280 },
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        component={'svg'}
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 1921 273"
                        sx={{
                          position: 'absolute',
                          width: '100%',
                          left: 0,
                          bottom: 0,
                          right: 0,
                          zIndex: 1,
                        }}
                      >
                        <polygon
                          fill={theme.palette.background.paper}
                          points="0,273 1921,273 1921,0 "
                        />
                      </Box>
                      
                      <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        position={'absolute'}
                        top={0}
                        padding={2}
                        width={1}
                        zIndex={2}
                      >
                        
                        <Box
                          padding={1}
                          paddingX={1.5}
                          bgcolor={'background.paper'}
                          boxShadow={5}
                          borderRadius={6}
                          border={1}
                          borderColor={'#bfbfbf'}

                        >
                          <Typography sx={{ fontWeight: 600 }}>
                            {item.category}
                          </Typography>
                        </Box>
                      </Box>


                      <Box
                        display={'flex'}
                        justifyContent={'space-between'} 
                        position={'absolute'}
                        bottom={0}
                        padding={2}
                        width={1}
                        zIndex={2}
                      >
                        
                        <Box
                          padding={1}
                          paddingX={2}
                          bgcolor={'background.paper'}
                          boxShadow={5}
                          borderRadius={6}
                          border={1}
                          borderColor={'#bfbfbf'}
                          display={'flex'}                        
                          justifyContent={'center'}
                          alignItems={'center'}
                        >
                          <Typography sx={{ fontWeight: 600 }}>
                            {item.audience}
                          </Typography>
                        </Box>
                      </Box>


                    </CardMedia>
                    <CardContent>
                      <Typography
                        variant={'h6'}
                        gutterBottom
                        align={'left'}
                        sx={{ fontWeight: 700 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        /* variant={'h6'} */
                        gutterBottom
                        align={'left'}
                        sx={{ fontWeight: 300 }}
                      >
                        {item.summary}
                      </Typography>
                      <Box display={'flex'} alignItems={'center'} marginY={2}>
                        <Box
                          component={'svg'}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          width={24}
                          height={24}
                          marginRight={1}
                        >
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </Box>
                        <Typography variant={'subtitle1'} color="text.secondary">
                          {item.tutor}
                        </Typography>
                      </Box>
                      <Box
                        marginTop={2}
                        display={'flex'}
                        justifyContent={'space-between'}
                      >
                        <AvatarGroup max={4}>
                          {item.users.map((u) => (
                            <Avatar key={u} src={u} />
                          ))}
                        </AvatarGroup>
                        <Box display={'flex'} alignItems={'center'}>
                          <Box
                            component={'svg'}
                            width={20}
                            height={20}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            color={colors.yellow[700]}
                            marginRight={1}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </Box>
                          <Typography sx={{ fontWeight: 700 }}>5.0</Typography>
                        </Box>
                      </Box>
                    </CardContent>
                    <Box flexGrow={1} />
                    
                    <CardActions 
                      sx={{ 
                        justifyContent: 'center' 
                      }}
                    >
                      <Box display={'flex'} flexDirection={'column'} width={1} justifyContent={'center'} alignItems={'center'}>

                        <Container spacing={1}>
                          <Button
                            variant={'contained'}
                            href= {'/Contact'}
                            color="primary"
                            size="large"
                            fullWidth
                          >
                            Schedule Now
                          </Button>
                          <Box marginTop={1} />
                          < PopupCardDetails title={item.title}/>
                        </Container>
                        
                      </Box>

                    </CardActions>

                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedEventsSlider;
