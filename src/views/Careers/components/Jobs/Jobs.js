import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const mock = [
  
  {
    title: 'Community Manager',
    location: 'Frisco, Texas, US',
    type: 'Full time',
    team: 'Consulting',
    subtitle: 'Responsible for creating life in our community events',
  },
  {
    title: 'Senior Therapist',
    location: 'Frisco, Texas, US',
    type: 'Full time',
    team: 'Consulting',
    subtitle: 'Responsible for driving consistent therapy outcomes for 1-5 year olds',
  },
  {
    title: 'Nanny',
    location: 'Frisco, Texas, US',
    type: 'Part time',
    team: 'Support',
    subtitle: 'Help working parents with ASD childcare in typical workdays',
  },
  {
    title: 'Community Manager',
    location: 'Frisco, Texas, US',
    type: 'Full time',
    team: 'Consulting',
    subtitle: 'Responsible for creating life in our community events',
  },
  {
    title: 'Senior Therapist',
    location: 'Frisco, Texas, US',
    type: 'Full time',
    team: 'Consulting',
    subtitle: 'Responsible for driving consistent therapy outcomes for 1-5 year olds',
  },
  {
    title: 'Nanny (Special Needs Category: ASD)',
    location: 'Frisco, Texas, US',
    type: 'Part time',
    team: 'Support',
    subtitle: 'Help working parents with ASD childcare in typical workdays',
  },
  {
    title: 'Community Manager Year-3 Band',
    location: 'Frisco, Texas, US',
    type: 'Full time',
    team: 'Consulting',
    subtitle: 'Responsible for creating life in our community events',
  },
  {
    title: 'Senior Therapist - II',
    location: 'Frisco, Texas, US',
    type: 'Full time',
    team: 'Consulting',
    subtitle: 'Responsible for driving consistent therapy outcomes for 1-5 year olds',
  },
];

const Jobs = () => {
  const theme = useTheme();
  return (
    <Box background={theme.palette.background.white}>
      <Box marginBottom={4} background={theme.palette.background.paper}>
        <Typography
          align={'center'}
          color={'text.secondary'}
          sx={{ textTransform: 'uppercase' }}
          variant={'subtitle2'}
          fontWeight={600}
        >
          Open positions
        </Typography>
        <Typography fontWeight={700} variant={'h4'} align={'center'}>
          Current job openings
        </Typography>
      </Box>
      <Grid
        container
        spacing={4}
        sx={{
          '.MuiOutlinedInput-root': {
            background: theme.palette.background.white,
          },
        }}
      >
        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" sx={{ minWidth: 1 }}>
            <InputLabel id="career-listing__jobs-role--label">Roles</InputLabel>
            <Select labelId="career-listing__jobs-role--label" label="Roles">
              <MenuItem value="">
                <em>All role areas</em>
              </MenuItem>
              <MenuItem value={'design'}>Healthcare</MenuItem>
              <MenuItem value={'engineering'}>Administration</MenuItem>
              <MenuItem value={'product'}>Product</MenuItem>
              <MenuItem value={'support'}>Support</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" sx={{ minWidth: 1 }}>
            <InputLabel id="career-listing__jobs-role--label">Teams</InputLabel>
            <Select labelId="career-listing__jobs-role--label" label="Teams">
              <MenuItem value="">
                <em>All teams</em>
              </MenuItem>
              <MenuItem value={'consumer'}>Customer Care</MenuItem>
              <MenuItem value={'consulting'}>Human Resources</MenuItem>
              <MenuItem value={'internal-tools'}>Operations</MenuItem>
              <MenuItem value={'internal-tools'}>Finance</MenuItem>
              <MenuItem value={'internal-tools'}>Operations</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" sx={{ minWidth: 1 }}>
            <InputLabel id="career-listing__jobs-role--label">
              Locations
            </InputLabel>
            <Select
              labelId="career-listing__jobs-role--label"
              label="Locations"
            >
              <MenuItem value="">
                <em>All locations</em>
              </MenuItem>
              <MenuItem value={'milan'}>Texas, US</MenuItem>
              <MenuItem value={'yerevan'}> - </MenuItem>
              <MenuItem value={'paris'}> - </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', sm: 'row' }}
        flex={'1 1 100%'}
        justifyContent={{ sm: 'space-between' }}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        marginY={4}
      >
        <Box marginBottom={{ xs: 1, sm: 0 }}>
          <Typography variant={'h6'} fontWeight={700}>
            See our latest roles below
          </Typography>
          <Typography color={'text.secondary'}>
            Click to apply directly
          </Typography>
        </Box>
        <Box
          paddingY={1 / 2}
          paddingX={1}
          bgcolor={'secondary.main'}
          borderRadius={2}
          marginRight={1}
        >
          <Typography
            variant={'caption'}
            fontWeight={700}
            sx={{ color: 'common.black' }}
          >
            {mock.length} openings
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        sx={{
          background: theme.palette.background.white,
          borderRadius: 2,
        }}
      >
        {mock.map((item, i) => (
          <Grid
            item
            xs={12}
            key={i}
            sx={{
              borderBottom: `1px solid ${theme.palette.divider}`,
              '&:last-child': {
                borderBottom: 0,
              },
            }}
          >
            <Box padding={2} display={'flex'} alignItems={'center'}>
              <Box
                display={'flex'}
                flexDirection={{ xs: 'column', sm: 'row' }}
                flex={'1 1 100%'}
                justifyContent={{ sm: 'space-between' }}
                alignItems={{ sm: 'center' }}
              >
                <Box marginBottom={{ xs: 1, sm: 0 }}>
                  <Typography variant={'subtitle1'} fontWeight={700}>
                    {item.title}
                  </Typography>
                  <Typography color={'text.secondary'}>
                    {item.subtitle}
                  </Typography>
                </Box>
                <Typography color={'text.secondary'}>
                  {`${item.team} / ${item.location}`}
                </Typography>
              </Box>
              <Box marginLeft={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  endIcon={
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      width={12}
                      height={12}
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </Box>
                  }
                >
                  Apply
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Jobs;
