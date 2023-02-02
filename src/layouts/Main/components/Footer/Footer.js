import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
/* import Button from '@mui/material/Button'; */
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';


/* START copy-pasted from about-side-over page's team component - from cards */
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
/* END copy-pasted from about-side-over page's team component - from cards */

import simsoulsLogoBW from '../media/simsoulsLogoBW.png';


const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;
  

  return (
    
    <Box
      display='flex'
      flexDirection='column'
      justifyItems='center'
      alignItems='center'
      alignContent='center'
      sx ={{
        backgroundColor: theme.palette.background.footerdark,
        paddingTop: 2,
        color:'text.light',
        
      }}
    >
      {/* <Grid container spacing={0}> */}
      
      <Grid spacing={0} bgcolor='grey'>
        <Grid item xs={12} sx={{paddingX: 2}}>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'flex-start'}
            width={1}
            flexDirection={{ xs: 'column', lg: 'row' }}
          >
            <Box
              display={'flex'}
              component="a"
              href="/"
              title="SimSouls"
              /*
              width={{xs:180, sm:180, md: 250, lg: 280}}
              */
              height={1}
              width={1}
            >
              <Box
                component={'img'}
                src={
                  mode === 'light'
                    ? simsoulsLogoBW
                    : simsoulsLogoBW
                }
                /* 
                height={1}
                width={1}
                */
                width={{xs:180, sm:180, md: 250, lg: 280}}
              />
            </Box>

            <Box display="flex" flexWrap={'wrap'} alignItems={'left'} flexDirection={{  xs: 'column', sm: 'row' }} width={1}>

              <Box marginTop={1} marginRight={{xs:2, md: 3, lg: 4}} display="flex" flexWrap={'wrap'} alignItems={'left'} flexDirection={{ xs: 'column' }} >
                <Box
                  marginTop={1}
                  marginBottom={1}              
                  sx ={{borderBottom: 1, borderColor: '#626262'}}
                >
                  <Typography
                    variant={'subtitle1'}
                  >
                    Email
                  </Typography>
                </Box>
                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  contact@simsouls.com
                </Link>
                <Box
                  marginBottom={1}              
                  sx ={{borderBottom: 1, borderColor: '#626262'}}
                >
                  <Typography
                    variant={'subtitle1'}
                  >
                    Follow
                  </Typography>
                </Box>
                <Box marginRight={4} marginBottom={0} marginTop={0} display="flex" flexWrap={'wrap'} alignItems={'left'} flexDirection={{ xs: 'row' }} >
                  <IconButton size={'small'} color={'primary'}>
                    <TwitterIcon  />
                  </IconButton>
                  <IconButton size={'small'} color={'primary'}>
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton size={'small'} color={'primary'}>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton size={'small'} color={'primary'}>
                    <WhatsAppIcon />
                  </IconButton>
                  <IconButton size={'small'} color={'primary'}>
                    <YouTubeIcon />
                  </IconButton>
                </Box>

              </Box>
              <Box marginTop={1} marginRight={{xs:2, md: 3, lg: 4}} display="flex" flexWrap={'wrap'} alignItems={'left'} flexDirection={{ xs: 'column' }} >
                <Box
                  marginTop={1}
                  marginBottom={1}              
                  sx ={{borderBottom: 1, borderColor: '#626262'}}
                >
                  <Typography
                    variant={'subtitle1'}
                  >
                    Address
                  </Typography>
                </Box>
                <Link
                  underline="none"
                  component="a"
                  href="/"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  4087 Guadalupe Ln, Frisco, TX 75034, USA
                </Link>
                <Box
                  marginBottom={1}              
                  sx ={{borderBottom: 1, borderColor: '#626262'}}
                >
                  <Typography
                    variant={'subtitle1'}
                  >
                    Phone
                  </Typography>
                </Box>
                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  +1.8989.898.999
                </Link>
              </Box>
              <Box marginTop={1} marginRight={{xs:2, md: 3, lg: 4}} display="flex" flexWrap={'wrap'} alignItems={'left'} flexDirection={{ xs: 'column' }} >
                <Box
                  marginTop={1}
                  marginBottom={1}              
                  sx ={{borderBottom: 1, borderColor: '#626262'}}
                >
                  <Typography
                    variant={'subtitle1'}
                  >
                    Company
                  </Typography>
                </Box>
                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  About Us
                </Link>
                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  Careers
                </Link>
                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  FAQs
                </Link>
              </Box>
              <Box marginTop={1} marginRight={{xs:2, md: 3, lg: 4}} display="flex" flexWrap={'wrap'} alignItems={'left'} flexDirection={{ xs: 'column' }} >
                <Box
                  marginTop={1}
                  marginBottom={1}
                  sx ={{borderBottom: 1, borderColor: '#626262'}}
                >
                  <Typography
                    variant={'subtitle1'}
                  >
                    Legal & Compliance
                  </Typography>
                </Box>

                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  Non Discrimination Compliance
                </Link>
                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  Data Confidentiality Compliance
                </Link>
                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  Patient Rights
                </Link>
              </Box>
              <Box marginTop={1} marginRight={{xs:2, md: 3, lg: 4}} display="flex" flexWrap={'wrap'} alignItems={'left'} flexDirection={{ xs: 'column' }} >
                <Box
                  marginTop={1}
                  marginBottom={1}
                  display=""
                  sx ={{borderBottom: 1, borderColor: '#626262'}}

                >
                  <Typography
                    variant={'subtitle1'}
                  >
                    Terms & Policy
                  </Typography>
                </Box>

                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  Privacy Policy
                </Link>
                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  Grievance Policy
                </Link>
                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  Service Terms & Conditions
                </Link>
              </Box>
            </Box>

          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography
            align={'center'}
            variant={'subtitle2'}
            color="text.semilight"
            marginTop={2}
            paddingY={'10px'}
          >
            &copy; 2023, Sim Souls Group LLC. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>

      {/*
      <Grid spacing={0}>
        <Grid item xs={12} sx={{paddingX: 3}} >
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'flex-start'}
            width={1}
            flexDirection={{ xs: 'column', lg: 'row' }}
          >
            <Box
              display={'flex'}
              component="a"
              href="/"
              title="SimSouls"
              
              width={{xs:180, sm:180, md: 250, lg: 280}}
              
              height={1}
              width={1}
            >
              <Box
                component={'img'}
                src={
                  mode === 'light'
                    ? simsoulsLogoBW
                    : simsoulsLogoBW
                }
                
                height={1}
                width={1}
                
                width={{xs:180, sm:180, md: 250, lg: 280}}
              />
            </Box>

            <Box display="flex" flexWrap={'wrap'} alignItems={'left'} flexDirection={{  xs: 'column', sm: 'row' }} width={1}>

              <Box marginTop={1} marginRight={{xs:2, md: 3, lg: 4}} display="flex" flexWrap={'wrap'} alignItems={'left'} flexDirection={{ xs: 'column' }} >
                <Box
                  marginTop={1}
                  marginBottom={1}              
                  sx ={{borderBottom: 1, borderColor: '#626262'}}
                >
                  <Typography
                    variant={'subtitle1'}
                  >
                    Email
                  </Typography>
                </Box>
                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  contact@simsouls.com
                </Link>
                <Box
                  marginBottom={1}              
                  sx ={{borderBottom: 1, borderColor: '#626262'}}
                >
                  <Typography
                    variant={'subtitle1'}
                  >
                    Follow
                  </Typography>
                </Box>
                <Box marginRight={4} marginBottom={0} marginTop={0} display="flex" flexWrap={'wrap'} alignItems={'left'} flexDirection={{ xs: 'row' }} >
                  <IconButton size={'small'} color={'primary'}>
                    <TwitterIcon  />
                  </IconButton>
                  <IconButton size={'small'} color={'primary'}>
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton size={'small'} color={'primary'}>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton size={'small'} color={'primary'}>
                    <WhatsAppIcon />
                  </IconButton>
                  <IconButton size={'small'} color={'primary'}>
                    <YouTubeIcon />
                  </IconButton>
                </Box>

              </Box>
              <Box marginTop={1} marginRight={{xs:2, md: 3, lg: 4}} display="flex" flexWrap={'wrap'} alignItems={'left'} flexDirection={{ xs: 'column' }} >
                <Box
                  marginTop={1}
                  marginBottom={1}              
                  sx ={{borderBottom: 1, borderColor: '#626262'}}
                >
                  <Typography
                    variant={'subtitle1'}
                  >
                    Address
                  </Typography>
                </Box>
                <Link
                  underline="none"
                  component="a"
                  href="/"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  4087 Guadalupe Ln, Frisco, TX 75034, USA
                </Link>
                <Box
                  marginBottom={1}              
                  sx ={{borderBottom: 1, borderColor: '#626262'}}
                >
                  <Typography
                    variant={'subtitle1'}
                  >
                    Phone
                  </Typography>
                </Box>
                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  +1.8989.898.999
                </Link>
              </Box>
              <Box marginTop={1} marginRight={{xs:2, md: 3, lg: 4}} display="flex" flexWrap={'wrap'} alignItems={'left'} flexDirection={{ xs: 'column' }} >
                <Box
                  marginTop={1}
                  marginBottom={1}              
                  sx ={{borderBottom: 1, borderColor: '#626262'}}
                >
                  <Typography
                    variant={'subtitle1'}
                  >
                    Company
                  </Typography>
                </Box>
                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  About Us
                </Link>
                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  Careers
                </Link>
                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  FAQs
                </Link>
              </Box>
              <Box marginTop={1} marginRight={{xs:2, md: 3, lg: 4}} display="flex" flexWrap={'wrap'} alignItems={'left'} flexDirection={{ xs: 'column' }} >
                <Box
                  marginTop={1}
                  marginBottom={1}
                  sx ={{borderBottom: 1, borderColor: '#626262'}}
                >
                  <Typography
                    variant={'subtitle1'}
                  >
                    Legal & Compliance
                  </Typography>
                </Box>

                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  Non Discrimination Compliance
                </Link>
                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  Data Confidentiality Compliance
                </Link>
                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  Patient Rights
                </Link>
              </Box>
              <Box marginTop={1} marginRight={{xs:2, md: 3, lg: 4}} display="flex" flexWrap={'wrap'} alignItems={'left'} flexDirection={{ xs: 'column' }} >
                <Box
                  marginTop={1}
                  marginBottom={1}
                  display=""
                  sx ={{borderBottom: 1, borderColor: '#626262'}}

                >
                  <Typography
                    variant={'subtitle1'}
                  >
                    Terms & Policy
                  </Typography>
                </Box>

                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  Privacy Policy
                </Link>
                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  Grievance Policy
                </Link>
                <Link
                  underline="none"
                  component="a"
                  href="/dummy"
                  color="text.semilight"
                  variant={'subtitle2'}
                >
                  Service Terms & Conditions
                </Link>
              </Box>
            </Box>

          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography
            align={'center'}
            variant={'subtitle2'}
            color="text.semilight"
            marginTop={2}
            paddingY={'10px'}
          >
            &copy; 2023, Sim Souls Group LLC. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
      */}
            

    </Box>


  /* OLD GRID START
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="SimSouls"
            width={80}
          >
            <Box
              component={'img'}
              src={
                mode === 'light'
                  ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
                  : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
              }
              height={1}
              width={1}
            />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/dummy"
                color="text.primary"
                variant={'subtitle2'}
              >
                Privacy Policy
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/dummy"
                color="text.primary"
                variant={'subtitle2'}
              >
                Privacy Policy
              </Link>
            </Box>            
            
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/dummy"
                color="text.primary"
                variant={'subtitle2'}
              >
                Documentation
              </Link>
            </Box>
            <Box marginTop={1}>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                target="blank"
                href="https://mui.com/store/items/the-front-landing-page/"
                size="small"
              >
                Purchase now
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.semilight"
          gutterBottom
        >
          &copy; 2022, Sim Souls Group LLC. All Rights Reserved.
        </Typography>
      </Grid>
    </Grid>
  OLD GRID END */
  );
};

export default Footer;
