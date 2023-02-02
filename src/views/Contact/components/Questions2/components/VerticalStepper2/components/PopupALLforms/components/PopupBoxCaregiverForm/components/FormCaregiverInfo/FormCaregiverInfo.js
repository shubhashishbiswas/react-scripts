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
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

// import dayjs from 'dayjs';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';



// import FormControl from '@mui/material/FormControl';

/* const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/; */

/* const faxRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/; */

// const InsuranceType = ['PPO', 'HMO', 'HSA', 'FeeForService', 'POS'];
// const ChoiceYesNo = ['Yes', 'No', 'Confidential'];

// const validProductValues = InsuranceType.map(({ _id }) => _id);


const therapyLocationOptions = [
  { value: 'viaEmail', label: 'Email'},
  { value: 'viaPhone', label: 'Phone'},
  { value: 'viaTextChat', label: 'Text'},
  { value: 'viaVideoChat', label: 'Video Call'},
  { value: 'viaOfficeVisit', label: 'Visit to your office'},
  { value: 'NoPreference', label: 'No Preference'},
];

const parentSTATEOptions = [
  { value: 'Texas', label: 'Texas'},
];


const validationSchema = yup.object({
  
  ParentFirstName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid First Name')
    .max(60, 'Please enter a valid First Name')
    .required('Please specify the parent/caregiver\'s first name'),
  ParentLastName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid Last Name')
    .max(60, 'Please enter a valid Last Name')
    .required('Please specify the parent/caregiver\'s last name'),
  ParentAddressLine1: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid address ')
    .max(100, 'Please enter a concise address ')
    .required('Please specify the address '), 
  ParentAddressLine2: yup
    .string()
    .trim()
    .min(10, 'Please enter a valid address ')
    .max(100, 'Please enter a concise address '),
  ParentAddressCity: yup
    .string()
    .trim()
    .min(2, 'Please enter the city ')
    .max(100, 'Please enter the city ')
    .required('Please specify the city '), 
  ParentAddressState: yup
    .string()
    .trim()
    .min(2, 'Please enter the state ')
    .max(100, 'Please enter the state ')
    .required('Please specify the state '), 
  ParentAddressZipCode: yup
    .string()
    .trim()
    .min(10, 'Please enter a valid US Zip Code')
    .max(10, 'Please enter a valid US Zip Code')
    .required('Please specify your ZIP Code'),
  ParentPhone: yup
    .string()
    .trim()
    .required('Please specify the phone number '),
  // .matches(phoneRegExp, 'Phone number is not valid') 
  Parentemail: yup
    .string()
    .trim()
    .email('Please specify a valid email address ')
    .required('Please specify a valid email address '),
  CommunicationPreference: yup
    .string()
    .trim(),
  OptInEmail: yup
    .string()
    .trim(),
  TextInEmail: yup
    .string()
    .trim(),
});

/*
refFromPrimaryPhysican: yup
    .string()
    .oneOf(['Yes', 'No', 'Confidential']),
*/


const FormCaregiverInfo = ({ onClose }) => {
  
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  

  const initialValues = {
    ParentFirstName : '',
    ParentLastName :'',
    ParentAddressLine1: '',
    ParentAddressLine2: '',
    ParentAddressCity: '',
    ParentAddressState: '',
    ParentAddressZipCode: '',
    ParentPhone: '',
    Parentemail: '',
    CommunicationPreference :'',
    OptInEmail :'',
    OpnInText :'',
  };

  /* refFromPrimaryPhysican :'',*/

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
        justifyContent='left'
      
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
              Parent / Childgiver information
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
              Parent / Caregiver's First Name
            </Typography>
            
            <TextField
              placeholder="Parent / Caregiver's First Name"
              variant="outlined"
              size="medium"
              name="ParentFirstName"
              fullWidth
              type="text"
              value={formik.values.ParentFirstName}
              onChange={formik.handleChange}
              error={formik.touched.ParentFirstName && Boolean(formik.errors.ParentFirstName)}
              helperText={formik.touched.ParentFirstName && formik.errors.ParentFirstName}
            />
          </Grid>


          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Parent / Caregiver's Last Name
            </Typography>
            
            <TextField
              placeholder="Parent / Caregiver's Last Name"
              variant="outlined"
              size="medium"
              name="ParentLastName"
              fullWidth
              type="text"
              value={formik.values.ParentLastName}
              onChange={formik.handleChange}
              error={formik.touched.ParentLastName && Boolean(formik.errors.ParentLastName)}
              helperText={formik.touched.ParentLastName && formik.errors.ParentLastName}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Parent / Caregiver's Last Name
            </Typography>
            
            <TextField
              placeholder="Your Child's Last Name"
              variant="outlined"
              size="medium"
              name="ChildLastName"
              fullWidth
              type="text"
              value={formik.values.ChildLastName}
              onChange={formik.handleChange}
              error={formik.touched.ChildLastName && Boolean(formik.errors.ChildLastName)}
              helperText={formik.touched.ChildLastName && formik.errors.ChildLastName}
            />
          </Grid>


          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Parent / Caregiver Address (Line 1)
            </Typography>
            <TextField
              placeholder="Parent / Caregiver Address (Line 1)"
              variant="outlined"
              size="medium"
              name="ParentAddressLine1"
              fullWidth
              type="text"
              value={formik.values.ParentAddressLine1}
              onChange={formik.handleChange}
              error={formik.touched.ParentAddressLine1 && Boolean(formik.errors.ParentAddressLine1)}
              helperText={formik.touched.ParentAddressLine1 && formik.errors.ParentAddressLine1}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Parent / Caregiver Address (Line 2)
            </Typography>
            <TextField
              placeholder="Parent / Caregiver Address (Line 2)"
              variant="outlined"
              size="medium"
              name="ParentAddressLine2"
              fullWidth
              type="text"
              value={formik.values.ParentAddressLine2}
              onChange={formik.handleChange}
              error={formik.touched.ParentAddressLine2 && Boolean(formik.errors.ParentAddressLine2)}
              helperText={formik.touched.ParentAddressLine2 && formik.errors.ParentAddressLine2}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Parent / Caregiver Address (City)
            </Typography>
            <TextField
              placeholder="Parent / Caregiver Address (City)"
              variant="outlined"
              size="medium"
              name="ParentAddressCity"
              fullWidth
              type="text"
              value={formik.values.ParentAddressCity}
              onChange={formik.handleChange}
              error={formik.touched.ParentAddressCity && Boolean(formik.errors.ParentAddressCity)}
              helperText={formik.touched.ParentAddressCity && formik.errors.ParentAddressCity}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Parent / Caregiver Address (State)
            </Typography>
            
            <TextField
              size="medium"
              name="ParentAddressState"
              variant="outlined"
              fullWidth
              select
              type="text"
              value={formik.values.ParentAddressState}
              onChange={formik.handleChange}
              error={formik.touched.ParentAddressState && Boolean(formik.errors.ParentAddressState)}
              helperText={formik.touched.ParentAddressState && formik.errors.ParentAddressState}
            >
              {parentSTATEOptions.map((index) => (
                <MenuItem 
                  key={index.value} 
                  value={index.value}
                > 
                  {index.label}
                </MenuItem>
              ))}
            </TextField>

          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Parent / Caregiver Address (ZIP code)
            </Typography>
            <TextField
              placeholder="Parent / Caregiver Address (ZIP code)"
              variant="outlined"
              size="medium"
              name="ParentAddressZipCode"
              fullWidth
              type="text"
              value={formik.values.ParentAddressZipCode}
              onChange={formik.handleChange}
              error={formik.touched.ParentAddressZipCode && Boolean(formik.errors.ParentAddressZipCode)}
              helperText={formik.touched.ParentAddressZipCode && formik.errors.ParentAddressZipCode}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Parent / Caregiver Phone No.
            </Typography>
            <TextField
              placeholder="Parent / Caregiver Phone No."
              variant="outlined"
              size="medium"
              name="ParentPhone"
              fullWidth
              type="text"
              value={formik.values.ParentPhone}
              onChange={formik.handleChange}
              error={formik.touched.ParentPhone && Boolean(formik.errors.ParentPhone)}
              helperText={formik.touched.ParentPhone && formik.errors.ParentPhone}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Parent / Caregiver email ID 
            </Typography>
            <TextField
              placeholder="Parent / Caregiver email ID"
              variant="outlined"
              size="medium"
              name="Parentemail"
              fullWidth
              type="text"
              value={formik.values.Parentemail}
              onChange={formik.handleChange}
              error={formik.touched.Parentemail && Boolean(formik.errors.Parentemail)}
              helperText={formik.touched.Parentemail && formik.errors.Parentemail}
            />
          </Grid>

          
          
          <Grid item xs={12}>
            
            <Box display='flex'>
              <FormControlLabel
                control={
                  <Checkbox defaultChecked={false} color="primary" />
                }
                label="Keep me updated via email"
                value={formik.values.OptInEmail}
                onChange={formik.handleChange}
                error={formik.touched.OptInEmail && Boolean(formik.errors.OptInEmail)}
                helperText={formik.touched.OptInEmail && formik.errors.OptInEmail}
              />

              <FormControlLabel
                control={
                  <Checkbox defaultChecked={false} color="primary" />
                }
                label="Keep me updated via text"
                value={formik.values.OpnInText}
                onChange={formik.handleChange}
                error={formik.touched.OpnInText && Boolean(formik.errors.OpnInText)}
                helperText={formik.touched.OpnInText && formik.errors.OpnInText}
              /> 
              
            </Box>

          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Parent / Caregiver preferred mode of communication
            </Typography>
            
            <TextField
              variant="outlined"
              size="medium"
              name="CommunicationPreference"
              fullWidth
              select
              type="text"
              value={formik.values.CommunicationPreference}
              onChange={formik.handleChange}
              error={formik.touched.CommunicationPreference && Boolean(formik.errors.CommunicationPreference)}
              helperText={formik.touched.CommunicationPreference && formik.errors.CommunicationPreference}
            >
              {therapyLocationOptions.map((index) => (
                <MenuItem 
                  key={index.value} 
                  value={index.value}
                > 
                  {index.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          
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

FormCaregiverInfo.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export { FormCaregiverInfo };
