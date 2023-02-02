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

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';



// import FormControl from '@mui/material/FormControl';

/* const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/; */

/* const faxRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/; */

// const InsuranceType = ['PPO', 'HMO', 'HSA', 'FeeForService', 'POS'];
// const ChoiceYesNo = ['Yes', 'No', 'Confidential'];

// const validProductValues = InsuranceType.map(({ _id }) => _id);


const therapyLocationOptions = [
  { value: 'InFacility', label: 'In facility'},
  { value: 'AtHome', label: 'At Home'},
  { value: 'NoPreference', label: 'No Preference'},
];

const therapyLocationOptionsSTATEOptions = [
  { value: 'Texas', label: 'Texas'},
];

const formalDiangosisCheckOptions = [
  { value: 'Yes', label: 'Yes'},
  { value: 'No', label: 'No'},
  { value: 'Confidential', label: 'Prefer to not share'},
];


const validationSchema = yup.object({
  
  ChildFirstName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid First Name')
    .max(60, 'Please enter a valid First Name')
    .required('Please specify your child\'s first name'),
  ChildLastName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid Last Name')
    .max(60, 'Please enter a valid Last Name')
    .required('Please specify your child\'s Last name'),
  ChildDOB: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid Date of Birth')
    .max(30, 'Please enter a valid Date of Birth')
    .required('Please specify your child\'s Last name'),
  ABACheckBox: yup
    .string()
    .trim(),
  DSCheckBox: yup
    .string()
    .trim(),
  FSCheckBox: yup
    .string()
    .trim(),
  SpeechCheckBox: yup
    .string()
    .trim(),
  OTCheckBox: yup
    .string()
    .trim(),
  therapyLocationPreference: yup
    .string()
    .trim()
    .required('Please specify your preferred therapy location'),
  therapyLocationPreferenceSTATE: yup
    .string()
    .trim()
    .required('Please specify your preferred therapy location\'s state'),
  formalDiangosisCheck: yup
    .string()
    .trim()
    .required('Please specify diagnosis details'),
});

/*
refFromPrimaryPhysican: yup
    .string()
    .oneOf(['Yes', 'No', 'Confidential']),
*/


const FormPatientInfo = ({ onClose }) => {
  
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const initialValues = {
    ChildFirstName : '',
    ChildLastName :'',
    ChildDOB: '',
    ABACheckBox :'',
    DSCheckBox :'',
    FSCheckBox :'',
    SpeechCheckBox :'',
    OTCheckBox :'',
    therapyLocationPreference :'',
    therapyLocationPreferenceSTATE :'',
    formalDiangosisCheck :'',
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
              Child / Patient Information
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
              Your Child's First Name
            </Typography>
            
            <TextField
              placeholder="Your Child's First Name"
              variant="outlined"
              size="medium"
              name="ChildLastName"
              fullWidth
              type="text"
              value={formik.values.ChildFirstName}
              onChange={formik.handleChange}
              error={formik.touched.ChildFirstName && Boolean(formik.errors.ChildFirstName)}
              helperText={formik.touched.ChildFirstName && formik.errors.ChildFirstName}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Your Child's Last Name
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
            
            <Box>
              <Typography
                variant="subtitle1"
                color="text.primary"
                fontWeight={700}
                gutterBottom
              >
                Child's / Patient's Date of Birth
              </Typography>
              <Box>
                <LocalizationProvider dateAdapter={ AdapterDayjs }>
                  <MobileDatePicker
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => 
                      (<TextField {...params} 
                        value={formik.values.ChildDOB}
                        onChange={formik.handleChange}
                        error={formik.touched.ChildDOB && Boolean(formik.errors.ChildDOB)}
                        helperText={formik.touched.ChildDOB && formik.errors.ChildDOB}
                      />)}
                  />
                </LocalizationProvider>
              </Box>
            </Box>

          </Grid>
          
          <Grid item xs={12}>
            
            <Box display='flex'>
              <FormControlLabel
                control={
                  <Checkbox defaultChecked={false} color="primary" />
                }
                label="ABA Therapy" 
                value={formik.values.ABACheckBox}
                onChange={formik.handleChange}
                error={formik.touched.ABACheckBox && Boolean(formik.errors.ABACheckBox)}
                helperText={formik.touched.ABACheckBox && formik.errors.ABACheckBox}
              />

              <FormControlLabel
                control={
                  <Checkbox defaultChecked={false} color="primary" />
                }
                label="Diagnostic Services"
                value={formik.values.DSCheckBox}
                onChange={formik.handleChange}
                error={formik.touched.DSCheckBox && Boolean(formik.errors.DSCheckBox)}
                helperText={formik.touched.DSCheckBox && formik.errors.DSCheckBox}
              /> 

              <FormControlLabel
                control={
                  <Checkbox defaultChecked={false} color="primary" />
                }
                label="Feeding / Swallowing Therapy"
                value={formik.values.FSCheckBox}
                onChange={formik.handleChange}
                error={formik.touched.FSCheckBox && Boolean(formik.errors.FSCheckBox)}
                helperText={formik.touched.FSCheckBox && formik.errors.FSCheckBox}
              />

              <FormControlLabel
                control={
                  <Checkbox defaultChecked={false} color="primary" />
                }
                label="Speech Therapy"
                value={formik.values.SpeechCheckBox}
                onChange={formik.handleChange}
                error={formik.touched.SpeechCheckBox && Boolean(formik.errors.SpeechCheckBox)}
                helperText={formik.touched.SpeechCheckBox && formik.errors.SpeechCheckBox}
              />

              <FormControlLabel
                control={
                  <Checkbox defaultChecked={false} color="primary" />
                }
                label="Occupational Therapy"
                value={formik.values.OTCheckBox}
                onChange={formik.handleChange}
                error={formik.touched.OTCheckBox && Boolean(formik.errors.OTCheckBox)}
                helperText={formik.touched.OTCheckBox && formik.errors.OTCheckBox}
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
              Therapy Location Preference
            </Typography>
            <Typography
              fontWeight={500}
              gutterBottom
            >
              Not present in all locations*
            </Typography>
            
            <TextField
              placeholder="At home"
              variant="outlined"
              size="medium"
              name="therapyLocationPreference"
              fullWidth
              select
              type="text"
              value={formik.values.therapyLocationPreference}
              onChange={formik.handleChange}
              error={formik.touched.therapyLocationPreference && Boolean(formik.errors.therapyLocationPreference)}
              helperText={formik.touched.therapyLocationPreference && formik.errors.therapyLocationPreference}
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


          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              State
            </Typography>
            
            <TextField
              placeholder="Texas"
              variant="outlined"
              size="medium"
              name="therapyLocationPreferenceSTATE"
              fullWidth
              select
              type="text"
              value={formik.values.therapyLocationPreferenceSTATE}
              onChange={formik.handleChange}
              error={formik.touched.therapyLocationPreferenceSTATE && Boolean(formik.errors.therapyLocationPreferenceSTATE)}
              helperText={formik.touched.therapyLocationPreferenceSTATE && formik.errors.therapyLocationPreferenceSTATE}
            >
              {therapyLocationOptionsSTATEOptions.map((index) => (
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
              Does your child have a formal diagnosis of autism?
            </Typography>
            
            <TextField
              placeholder="Texas"
              variant="outlined"
              size="medium"
              name="therapyLocationPreferenceSTATE"
              fullWidth
              select
              type="text"
              value={formik.values.formalDiangosisCheck}
              onChange={formik.handleChange}
              error={formik.touched.formalDiangosisCheck && Boolean(formik.errors.formalDiangosisCheck)}
              helperText={formik.touched.formalDiangosisCheck && formik.errors.formalDiangosisCheck}
            >
              {formalDiangosisCheckOptions.map((index) => (
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

FormPatientInfo.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export { FormPatientInfo };
