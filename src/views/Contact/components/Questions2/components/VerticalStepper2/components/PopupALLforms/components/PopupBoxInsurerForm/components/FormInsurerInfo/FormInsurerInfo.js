/* eslint-disable react/no-unescaped-entities */
import React from 'react';
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

// import FormControl from '@mui/material/FormControl';

/* const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/; */

/* const faxRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/; */

// const InsuranceType = ['PPO', 'HMO', 'HSA', 'FeeForService', 'POS'];
// const ChoiceYesNo = ['Yes', 'No', 'Confidential'];

// const validProductValues = InsuranceType.map(({ _id }) => _id);

const insuranceType = [
  { value: 'PPO', label: 'PPO'},
  { value: 'HMO', label: 'HMO'},
  { value: 'HSA', label: 'HSA'},
  { value: 'FeeForService', label: 'Fee for service'},
  { value: 'POS', label: 'POS'},
];

const validationSchema = yup.object({
  insuranceType: yup
    .string()
    .trim()
    .required('Please select your insurance type'),
  insurancePlan: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid full name')
    .max(80, 'Please enter a valid full name')
    .required('Please specify the first name'),    
  insuranceMemberID: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid full name')
    .max(80, 'Please enter a valid full name')
    .required('Please specify the last name'), 
  drLastNameInsuranceForm: yup
    .string()
    .trim()
    .min(10, 'Please enter a valid 10 digit NPI')
    .max(10, 'Please enter a valid 10 digit NPI')
    .required('Please specify your NPI'),
  drPracticeInsuranceForm: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid practice name of the referring doctor')
    .max(100, 'Please enter a concise practice name of the referring doctor')
    .required('Please specify the practice name of the referring doctor'), 
  drPhoneInsuranceForm: yup
    .string()
    .trim()
    .required('Please specify the phone number of the referring doctor'),
});

/*
refFromPrimaryPhysican: yup
    .string()
    .oneOf(['Yes', 'No', 'Confidential']),
*/


const FormInsurerInfo = ({ onClose }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const initialValues = {
    insuranceType :'',
    insurancePlan :'',
    insuranceMemberID :'',
    drLastNameInsuranceForm :'',
    drPracticeInsuranceForm :'',
    drPhoneInsuranceForm :'',
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
              Insurance Information
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
              Your insurance type
            </Typography>
            
            <TextField
              placeholder="Your insurance type"
              variant="outlined"
              size="medium"
              name="insuranceType"
              fullWidth
              select
              type="text"
              value={formik.values.insuranceType}
              onChange={formik.handleChange}
              error={formik.touched.insuranceType && Boolean(formik.errors.insuranceType)}
              helperText={formik.touched.insuranceType && formik.errors.insuranceType}
            >
              {insuranceType.map((index) => (
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
              Your insurance Membership No.
            </Typography>
            
            <TextField
              placeholder="Your insurance membership No."
              variant="outlined"
              size="medium"
              name="insuranceMemberID"
              fullWidth
              type="text"
              value={formik.values.insuranceMemberID}
              onChange={formik.handleChange}
              error={formik.touched.insuranceMemberID && Boolean(formik.errors.insuranceMemberID)}
              helperText={formik.touched.insuranceMemberID && formik.errors.insuranceMemberID}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Your Doctor's Last Name
            </Typography>
            
            <TextField
              placeholder="Your Doctor's Last Name"
              variant="outlined"
              size="medium"
              name="drLastNameInsuranceForm"
              fullWidth
              type="text"
              value={formik.values.drLastNameInsuranceForm}
              onChange={formik.handleChange}
              error={formik.touched.drLastNameInsuranceForm && Boolean(formik.errors.drLastNameInsuranceForm)}
              helperText={formik.touched.drLastNameInsuranceForm && formik.errors.drLastNameInsuranceForm}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Your Doctor's Practice Name
            </Typography>
            
            <TextField
              placeholder="Your Doctor's Practice Name"
              variant="outlined"
              size="medium"
              name="drPracticeInsuranceForm"
              fullWidth
              type="text"
              value={formik.values.drPracticeInsuranceForm}
              onChange={formik.handleChange}
              error={formik.touched.drPracticeInsuranceForm && Boolean(formik.errors.drPracticeInsuranceForm)}
              helperText={formik.touched.drPracticeInsuranceForm && formik.errors.drPracticeInsuranceForm}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Your Doctor's Phone Number
            </Typography>
            
            <TextField
              placeholder="Your Doctor/'s Phone Number"
              variant="outlined"
              size="medium"
              name="drPhoneInsuranceForm"
              fullWidth
              type="text"
              value={formik.values.drPhoneInsuranceForm}
              onChange={formik.handleChange}
              error={formik.touched.drPhoneInsuranceForm && Boolean(formik.errors.drPhoneInsuranceForm)}
              helperText={formik.touched.drPhoneInsuranceForm && formik.errors.drPhoneInsuranceForm}
            />
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

FormInsurerInfo.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export { FormInsurerInfo };
