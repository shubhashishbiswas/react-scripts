/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup'; 
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';

/* const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/; */
/* const faxRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/; */

const validationSchema = yup.object({
  drfirstName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid full name')
    .max(80, 'Please enter a valid full name')
    .required('Please specify the first name'),    
  drlastName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid full name')
    .max(80, 'Please enter a valid full name')
    .required('Please specify the last name'), 
  drNpi: yup
    .string()
    .trim()
    .min(10, 'Please enter a valid 10 digit NPI')
    .max(10, 'Please enter a valid 10 digit NPI')
    .required('Please specify your NPI'),
  drPractice: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid practice name of the referring doctor')
    .max(100, 'Please enter a concise practice name of the referring doctor')
    .required('Please specify the practice name of the referring doctor'), 
  drAddressLine1: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid address of the referring doctor')
    .max(100, 'Please enter a concise address of the referring doctor')
    .required('Please specify the address of the referring doctor'), 
  drAddressLine2: yup
    .string()
    .trim()
    .min(10, 'Please enter a valid address of the referring doctor')
    .max(100, 'Please enter a concise address of the referring doctor'),
  drAddressCity: yup
    .string()
    .trim()
    .min(2, 'Please enter the city of the referring doctor')
    .max(100, 'Please enter the city of the referring doctor')
    .required('Please specify the city of the referring doctor'), 
  drAddressState: yup
    .string()
    .trim()
    .min(2, 'Please enter the state of the referring doctor')
    .max(100, 'Please enter the state of the referring doctor')
    .required('Please specify the state of the referring doctor'), 
  drAddressZipCode: yup
    .string()
    .trim()
    .min(10, 'Please enter a valid US Zip Code')
    .max(10, 'Please enter a valid US Zip Code')
    .required('Please specify your NPI'),
  drPhone: yup
    .string()
    .trim()
    .required('Please specify the phone number of the referring doctor'),
  // .matches(phoneRegExp, 'Phone number is not valid') 
  drFax: yup
    .string()
    .trim()
    .required('Please specify the fax number of the referring doctor'),
  // .matches(faxRegExp, 'Fax number is not valid') 
  dremail: yup
    .string()
    .trim()
    .email('Please specify a valid email address of the referring doctor')
    .required('Please specify a valid email address of the referring doctor'),
  drmessage: yup
    .string()
    .trim(),
});


const FormReferralInfo = ({ onClose }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const initialValues = {
    
    drfirstName: '',
    drlastName: '',
    drNpi: '',
    drPractice: '',
    drAddressLine1: '',
    drAddressLine2: '',
    drAddressCity: '',
    drAddressState: '',
    drAddressZipCode: '',
    drPhone: '',
    drFax: '',
    dremail: '',
    drmessage: '',
    
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema, 
    onSubmit,
  });

  return (
    <Box 
      display='flex'
      justifyContent='left'
      paddingX={'2vw'}
      paddingY={0}
      borderRadius={'20px'}    
    >
      <Box
        display='flex'
        justifyContent='left  '
        padding={'50 50'}   

        flexDirection={'column'}  

        /* maxWidth={'60vw '} */
        maxWidth={{xs:'80vw', sm:'80vw', md: '60vw'}}
        marginLeft= {0}
        component={'form'}
        onSubmit={formik.handleSubmit}
        
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
        
        <Box display='flex' paddingY={0} justifyContent={'right'} > 
          <Button
            display={'block'} 
            onClick={onClose}
          >
            <CloseRoundedIcon />
          </Button>
        </Box>

        <Box display='flex' paddingBottom={4} justifyContent={'left'} > 
          <Typography
            variant="h4"
            color={theme.palette.primary.main}
            fontWeight={700}
            gutterBottom
          >
              Referral Information
          </Typography>
          <Divider />
        </Box>

        
        <Grid container spacing={isMd ? 4 : 2} >
          
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Doctor's first name
            </Typography>
            
            <TextField
              placeholder="Your full name"
              variant="outlined"
              size="medium"
              name="drfirstName"
              fullWidth
              type="text"
              value={formik.values.drfirstName}
              onChange={formik.handleChange}
              error={formik.touched.drfirstName && Boolean(formik.errors.drfirstName)}
              helperText={formik.touched.drfirstName && formik.errors.drfirstName}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Doctor's last name
            </Typography>
            <TextField
              placeholder="Doctor's last name"
              variant="outlined"
              size="medium"
              name="drlastName"
              fullWidth
              type="text"
              value={formik.values.drlastName}
              onChange={formik.handleChange}
              error={formik.touched.drlastName && Boolean(formik.errors.drlastName)}
              helperText={formik.touched.drlastName && formik.errors.drlastName}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Doctor's NPI
            </Typography>
            <TextField
              placeholder="Doctor's NPI"
              variant="outlined"
              size="medium"
              name="drNpi"
              fullWidth
              type="text"
              value={formik.values.drNpi}
              onChange={formik.handleChange}
              error={formik.touched.drNpi && Boolean(formik.errors.drNpi)}
              helperText={formik.touched.drNpi && formik.errors.drNpi}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Doctor's practice area
            </Typography>
            <TextField
              placeholder="Doctor's practice area"
              variant="outlined"
              size="medium"
              name="drPractice"
              fullWidth
              type="text"
              value={formik.values.drPractice}
              onChange={formik.handleChange}
              error={formik.touched.drPractice && Boolean(formik.errors.drPractice)}
              helperText={formik.touched.drPractice && formik.errors.drPractice}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Doctor's Address (Line 1)
            </Typography>
            <TextField
              placeholder="Doctor's Address (Line 1)"
              variant="outlined"
              size="medium"
              name="drAddressLine1"
              fullWidth
              type="text"
              value={formik.values.drAddressLine1}
              onChange={formik.handleChange}
              error={formik.touched.drAddressLine1 && Boolean(formik.errors.drAddressLine1)}
              helperText={formik.touched.drAddressLine1 && formik.errors.drAddressLine1}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Doctor's Address (Line 2)
            </Typography>
            <TextField
              placeholder="Doctor's Address (Line 2)"
              variant="outlined"
              size="medium"
              name="drAddressLine2"
              fullWidth
              type="text"
              value={formik.values.drAddressLine2}
              onChange={formik.handleChange}
              error={formik.touched.drAddressLine2 && Boolean(formik.errors.drAddressLine2)}
              helperText={formik.touched.drAddressLine2 && formik.errors.drAddressLine2}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Doctor's Address (City)
            </Typography>
            <TextField
              placeholder="Doctor's Address (City)"
              variant="outlined"
              size="medium"
              name="drAddressCity"
              fullWidth
              type="text"
              value={formik.values.drAddressCity}
              onChange={formik.handleChange}
              error={formik.touched.drAddressCity && Boolean(formik.errors.drAddressCity)}
              helperText={formik.touched.drAddressCity && formik.errors.drAddressCity}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Doctor's Address (State)
            </Typography>
            <TextField
              placeholder="Doctor's Address (State)"
              variant="outlined"
              size="medium"
              name="drAddressState"
              fullWidth
              type="text"
              value={formik.values.drAddressState}
              onChange={formik.handleChange}
              error={formik.touched.drAddressState && Boolean(formik.errors.drAddressState)}
              helperText={formik.touched.drAddressState && formik.errors.drAddressState}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Doctor's Address (ZIP code)
            </Typography>
            <TextField
              placeholder="Doctor's Address (ZIP code)"
              variant="outlined"
              size="medium"
              name="drAddressZipCode"
              fullWidth
              type="text"
              value={formik.values.drAddressZipCode}
              onChange={formik.handleChange}
              error={formik.touched.drAddressZipCode && Boolean(formik.errors.drAddressZipCode)}
              helperText={formik.touched.drAddressZipCode && formik.errors.drAddressZipCode}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Doctor's Phone No.
            </Typography>
            <TextField
              placeholder="Doctor's Phone No."
              variant="outlined"
              size="medium"
              name="drPhone"
              fullWidth
              type="text"
              value={formik.values.drPhone}
              onChange={formik.handleChange}
              error={formik.touched.drPhone && Boolean(formik.errors.drPhone)}
              helperText={formik.touched.drPhone && formik.errors.drPhone}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Doctor's FAX No.
            </Typography>
            <TextField
              placeholder="Doctor's FAX No."
              variant="outlined"
              size="medium"
              name="drFax"
              fullWidth
              type="text"
              value={formik.values.drFax}
              onChange={formik.handleChange}
              error={formik.touched.drFax && Boolean(formik.errors.drFax)}
              helperText={formik.touched.drFax && formik.errors.drFax}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Doctor's email ID 
            </Typography>
            <TextField
              placeholder="Doctor's email ID"
              variant="outlined"
              size="medium"
              name="dremail"
              fullWidth
              type="text"
              value={formik.values.dremail}
              onChange={formik.handleChange}
              error={formik.touched.dremail && Boolean(formik.errors.dremail)}
              helperText={formik.touched.dremail && formik.errors.dremail}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Your queries or suggestions, if any
            </Typography>
            <TextField
              placeholder="Your queries or suggestions, if any"
              variant="outlined"
              name="drmessage"
              fullWidth
              multiline
              rows={4}
              value={formik.values.drmessage}
              onChange={formik.handleChange}
              error={formik.touched.drmessage && Boolean(formik.errors.drmessage)}
              helperText={formik.touched.drmessage && formik.errors.drmessage}
            />
          </Grid>

          {/*
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              a Full name
            </Typography>
            <TextField
              placeholder="Your full name"
              variant="outlined"
              size="medium"
              name="fullName"
              fullWidth
              type="text"
              value={formik.values.afullName}
              onChange={formik.handleChange}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              E-mail
            </Typography>
            <TextField
              placeholder="Your e-mail address"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Message
            </Typography>
            <TextField
              placeholder="Your question about our services"
              variant="outlined"
              name="message"
              fullWidth
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Grid>
          */}

          <Grid item container justifyContent="right" xs={12}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

FormReferralInfo.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export { FormReferralInfo };
