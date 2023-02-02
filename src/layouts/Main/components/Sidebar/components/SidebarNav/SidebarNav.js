import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import simsoulsLogoColor from '../../../media/simsoulsLogoColor.png';

import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    /*
    landings: landingPages,
    company: companyPages,
    */
    linktreeFLAT: linktreeFLATPages,
    sidebarMenu: sidebarMenuPages,
    /*
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
    */
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? simsoulsLogoColor
                : simsoulsLogoColor
            }
            height={1}
            width={1}
            
            
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        
        <Box>
          <NavItem primetabs={sidebarMenuPages} linktreeFLAT={linktreeFLATPages} />
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
