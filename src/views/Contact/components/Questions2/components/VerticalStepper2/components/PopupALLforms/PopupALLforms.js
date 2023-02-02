import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { PopupBox } from './components';


const PopupALLforms = () => {
  
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Button
        variant='contained'
        color={'primary'}
        onClick={() => setOpen(true)}
      >
        Add / Edit Referral Details Now
      </Button>
      <PopupBox open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export { PopupALLforms };
