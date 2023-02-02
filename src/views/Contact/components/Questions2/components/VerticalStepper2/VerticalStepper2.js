import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// import Container from 'components/Container';
// import Grid from '@mui/material/Grid';


import { PopupBoxReferralForm } from './components/PopupALLforms/components';
import { PopupBoxCaregiverForm } from './components/PopupALLforms/components';
import { PopupBoxInsurerForm } from './components/PopupALLforms/components';
import { PopupBoxPatientForm } from './components/PopupALLforms/components';

/*
import { PopupBoxReferralForm } from '../../blocks-reused/PopupALLforms/components';
import { PopupBoxCaregiverForm } from '../../blocks-reused/PopupALLforms/components';
import { PopupBoxInsurerForm } from '../../blocks-reused/PopupALLforms/components';
import { PopupBoxPatientForm } from '../../blocks-reused/PopupALLforms/components';
*/






/* import Container from 'components/Container'; */
/* import PopupWithImage from '../../blocks-reused/PopupWithImage'; */

/* import { FormReferralInfo FormPatientInfo, FormInsurerInfo, FormCaregiverInfo } from '../../external-view-reused/ContactPage/components';  */  
// import { FormReferralInfo /* FormPatientInfo, FormInsurerInfo, FormCaregiverInfo */ } from '../../external-view-reused/ContactPage/components';  
// import { PopupWithImage } from '../../blocks-reused/PopupWithImage'; 

/*
const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];
*/

const VerticalStepper2 = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [editFlag, setEditFlag] = React.useState('0');
  const [open, setOpen] = useState(false);


  return (
    <Box width={'90vw'} >
      <Box>
        <Stepper activeStep={activeStep} orientation="vertical" >
          
          <Step
            key={'0'}
            sx={{
              '& .MuiSvgIcon-root': {
                width: 28,
                height: 28,
              },
            }}
          >
            <StepLabel
              sx={{
                '& .MuiStepLabel-label': {
                  fontWeight: 700,
                },
              }}
            >
              <Typography variant='h6'>
                Provide your information 
              </Typography>
              
            </StepLabel>
            <StepContent>
              <Typography> Your information across the steps below will help us serve you better</Typography>

              
              <Box sx={{ mb: 2 }}>
                <Box display='flex'>
                  <Button
                    variant={'contained'}
                    onClick={handleNext}
                    sx={{ mt: 2, mr: 2, width:{xs:'60vw', sm:'30vw', md:'30vw'}}}
                  >
                    Start 
                  </Button>
                </Box>
              </Box>
              
            </StepContent>
          </Step>
          
          <Step
            key={1}
            sx={{
              '& .MuiSvgIcon-root': {
                width: 28,
                height: 28,
              },
            }}
          >
            <StepLabel
              sx={{
                '& .MuiStepLabel-label': {
                  fontWeight: 700,
                },
              }}
            >
              <Typography variant='h6'>
                Referral Section  
              </Typography>
              
            </StepLabel>
            <StepContent>
              <Typography> Please enter details of the doctor referring your case</Typography>
 
              
              <Box sx={{ mb: 2 }}>  
                
                
                <Box display='flex' flexDirection={{xs:'column'}} alignContent='flex-start' alignItems={'flex-start'} justifyContent='left'>
                  
                  <Button
                    variant={'outlined'}
                    onClick={handleNext}
                    sx={{ mt: 2, mr: 2, width:{xs:'60vw', sm:'30vw', md:'30vw'}}}
                  >
                    <Typography sx={{fontWeight: 700}}>
                      I have not been referred
                    </Typography>
                  </Button>
                </Box>


                <Box display='flex' flexDirection={{xs:'column'}} alignContent='flex-start' alignItems={'flex-start'} justifyContent='left'>
                  
                  <Button
                    variant='contained'
                    color={'primary'}
                    sx={{ mt: 2, mr: 2, width:{xs:'60vw', sm:'30vw', md:'30vw'}}}
                    onClick={() => {setOpen(true); setEditFlag('Referral');}}
                  >
                    Add Referral Details 
                  </Button>
                  
                  <PopupBoxReferralForm open={open} onClose={() => setOpen(false)} />
                  
                  <Button
                    variant="outlined"
                    onClick={handleNext}
                    width={{xs:'70vw', md:'90vw'}}
                    sx={{ mt: 2, mr: 2, width:{xs:'60vw', sm:'30vw', md:'30vw'}}}
                  >
                    {editFlag === 'Referral'? 'Proceed' : 'Skip & Continue'} 
                  </Button>

                  <Button
                    variant={'outlined'}
                    disabled={false}
                    onClick={handleBack}
                    sx={{ mt: 2, mr: 2, width:{xs:'60vw', sm:'30vw', md:'30vw'}}}
                    
                  >
                    Back
                  </Button>
                  
                  <Button
                    variant={'outlined'}
                    disabled={false}
                    onClick={handleReset}
                    sx={{ mt: 2, mr: 2, width:{xs:'60vw', sm:'30vw', md:'30vw'}}}
                    
                  >
                    Quit
                  </Button>

                
                </Box>

              </Box>
            </StepContent>
          </Step>


          <Step
            key={2}
            sx={{
              '& .MuiSvgIcon-root': {
                width: 28,
                height: 28,
              },
            }}
          >
            <StepLabel
              sx={{
                '& .MuiStepLabel-label': {
                  fontWeight: 700,
                },
              }}
            >
              <Typography variant='h6'>
                Patient Section
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography> Please provide details of the person needing therapy</Typography>
              
              
              <Box sx={{ mb: 2 }}>
                <Box display='flex' flexDirection={{xs:'column'}} alignContent='flex-start' alignItems={'flex-start'} justifyContent='left'>
                  <Box>
                    <Button
                      variant='contained'
                      color={'primary'}
                      sx={{ mt: 2, mr: 2, width:{xs:'60vw', sm:'30vw', md:'30vw'}}}
                      onClick={() => {setOpen(true); setEditFlag('Patient');}}
                    >
                      Add Patient Details 
                    </Button>
                    <PopupBoxPatientForm open={open} onClose={() => setOpen(false)} /> 
                  </Box>
                  
                  <Button
                    variant="outlined"
                    onClick={handleNext}
                    sx={{ mt: 2, mr: 2, width:{xs:'60vw', sm:'30vw', md:'30vw'}}}
                  >
                    {editFlag === 'Patient'? 'Proceed' : 'Skip & Continue'} 
                  </Button>
                
                  <Button
                    variant={'outlined'}
                    disabled={false}
                    onClick={handleBack}
                    sx={{ mt: 2, mr: 2, width:{xs:'60vw', sm:'30vw', md:'30vw'}}}
                  >
                    Back
                  </Button>
                  <Button
                    variant={'outlined'}
                    disabled={false}
                    onClick={handleReset}
                    sx={{ mt: 2, mr: 2, width:{xs:'60vw', sm:'30vw', md:'30vw'}}}
                  >
                    Quit
                  </Button>
                </Box>
              </Box>

            </StepContent>
          </Step>

          <Step
            key={3}
            sx={{
              '& .MuiSvgIcon-root': {
                width: 28,
                height: 28,
              },
            }}
          >
            <StepLabel
              sx={{
                '& .MuiStepLabel-label': {
                  fontWeight: 700,
                },
              }}
            >
              <Typography variant='h6'>
                Parent / Caregiver Section
              </Typography>
              
            </StepLabel>
            <StepContent>
              <Typography> Please provide details of any one parent, guardian or caregiver</Typography>
              <Box sx={{ mb: 2 }}>
                <Box display='flex' flexDirection={{xs:'column'}} alignContent='flex-start' alignItems={'flex-start'} justifyContent='left'>
                  
                  

                  <Box>
                    <Button
                      variant='contained'
                      color={'primary'}
                      sx={{ mt: 2, mr: 2, width:{xs:'60vw', sm:'30vw', md:'30vw'}}}
                      onClick={() => {setOpen(true); setEditFlag('Caregiver');}}
                    >
                      Add Caregiver Details 
                    </Button>
                    <PopupBoxCaregiverForm open={open} onClose={() => setOpen(false)} />
                  </Box>
                  
                  <Button
                    variant="outlined"
                    onClick={handleNext}
                    sx={{ mt: 2, mr: 2, width:{xs:'60vw', sm:'30vw', md:'30vw'}}}
                  >
                    {editFlag === 'Caregiver'? 'Proceed' : 'Skip & Continue'} 
                  </Button>

                  <Button
                    variant={'outlined'}
                    disabled={false}
                    onClick={handleBack}
                    sx={{ mt: 2, mr: 2, width:{xs:'60vw', sm:'30vw', md:'30vw'}}}
                  >
                    Back
                  </Button>
                  <Button
                    variant={'outlined'}
                    disabled={false}
                    onClick={handleReset}
                    sx={{ mt: 2, mr: 2, width:{xs:'60vw', sm:'30vw', md:'30vw'}}}
                  >
                    Quit
                  </Button>
                </Box>
              </Box>

            </StepContent>
          </Step>


          <Step
            key={4}
            sx={{
              '& .MuiSvgIcon-root': {
                width: 28,
                height: 28,
              },
            }}
          >
            <StepLabel
              sx={{
                '& .MuiStepLabel-label': {
                  fontWeight: 700,
                },
              }}
            >
              <Typography variant='h6'>
                Insurance Section
              </Typography>

            </StepLabel>
            <StepContent>
              <Typography> Please provide details of the insurance services the patient is enrolled with</Typography>


              <Box sx={{ mb: 2 }}>
                <Box display='flex' flexDirection={{xs:'column'}} alignContent='flex-start' alignItems={'flex-start'} justifyContent='left'>
                  
                  <Box>
                    <Button
                      variant='contained'
                      color={'primary'}
                      sx={{ mt: 2, mr: 2, width:{xs:'60vw', sm:'30vw', md:'30vw'}}}
                      onClick={() => {setOpen(true); setEditFlag('Insurance');}}
                    >
                      Add Insurance Details 
                    </Button>
                    <PopupBoxInsurerForm open={open} onClose={() => setOpen(false)} />
                    <PopupBoxInsurerForm />
                  </Box>
                  
                  <Button
                    variant="outlined"
                    onClick={handleNext}
                    sx={{ mt: 2, mr: 2, width:{xs:'60vw', sm:'30vw', md:'30vw'}}}
                  >
                    {editFlag === 'Insurance'? 'Proceed' : 'Skip & Continue'} 
                  </Button>
                  
                  <Button
                    variant={'outlined'}
                    disabled={false}
                    onClick={handleBack}
                    sx={{ mt: 2, mr: 2, width:{xs:'60vw', sm:'30vw', md:'30vw'}}}
                  >
                    Back
                  </Button>
                  
                  <Button
                    variant={'outlined'}
                    disabled={false}
                    onClick={handleReset}
                    sx={{ mt: 2, mr: 2, width:{xs:'60vw', sm:'30vw', md:'30vw'}}}
                  >
                    Quit
                  </Button>
                </Box>
              </Box>

            </StepContent>
          </Step>

          {/*
          {steps.map((step, index) => (
            <Step
              key={step.label}
              sx={{
                '& .MuiSvgIcon-root': {
                  width: 32,
                  height: 32,
                },
              }}
            >
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
                sx={{
                  '& .MuiStepLabel-label': {
                    fontWeight: 700,
                  },
                }}
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <Box display='flex'>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 2, mr: 2 }}
                    >
                      {index === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button
                      variant={'outlined'}
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 2, mr: 1 }}
                    >
                      Back
                    </Button>
                  </Box>
                </Box>
              </StepContent>
            </Step>
          ))}
          */}

        </Stepper>


        {activeStep === 5 && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button
              variant={'outlined'}
              onClick={handleReset}
              sx={{ mt: 2, mr: 2}}
            >
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </Box>
  );


    
};

export { VerticalStepper2 };
