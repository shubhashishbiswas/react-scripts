import React, { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

import { PopupBox } from './components';

const PopupCardDetails = ({title}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  
  

  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={1}>
      <Box width={1}>
        <Button
          size="large"
          color={'primary'}
          variant={'outlined'}
          size={'large'}
          fullWidth
          sx={{
            bgcolor: alpha(theme.palette.primary.light, 0.1),
            fontWeight: 700,
          }}         
          onClick={() => setOpen(true)}
        >
          See Details
        </Button>
        {/* <PopupBox title={titlePass} open={open} onClose={() => setOpen(false)} /> */}
        <PopupBox title={title}  open={open} onClose={() => setOpen(false)} />
      </Box>
    </Box>
  );
};
PopupCardDetails.propTypes = {
  
  title: PropTypes.string.isRequired,
  
};

export { PopupCardDetails };