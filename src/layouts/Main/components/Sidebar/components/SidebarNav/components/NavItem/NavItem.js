import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { alpha, useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NavItem = ({ primetabs, /*title,*/ linktreeFLAT }) => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const hasActiveLink = () => linktreeFLAT.find((i) => i.href === activeLink);

  return (
    <Box>
      
      <Grid container spacing={1}>
        {primetabs.map((pPT, iPT) => (
          pPT.hasTabs === 1 ? 
            (
              <Grid item key={iPT} xs={12}>
                <Accordion
                  disableGutters
                  elevation={0}
                  sx={{ backgroundColor: 'transparent' }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ padding: 0 }}
                  >
                    <Typography
                      fontWeight={hasActiveLink() ? 600 : 400}
                      color={hasActiveLink() ? 'primary' : 'text.primary'}
                    >
                      {pPT.title}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{ padding: 0 }}>
                    <Grid container spacing={1}>
                      
                      <Grid item xs={12}>
                        <Button
                          size={'large'}
                          component={'a'}
                          href={pPT.href}
                          fullWidth
                          sx={{
                            justifyContent: 'flex-start',
                            color:
                              activeLink === pPT.href
                                ? theme.palette.primary.main
                                : theme.palette.text.primary,
                            backgroundColor:
                              activeLink === pPT.href
                                ? alpha(theme.palette.primary.main, 0.1)
                                : 'transparent',
                            fontWeight: activeLink === pPT.href ? 600 : 400,
                          }}
                        >
                          <Box marginLeft={1}>
                            Overview
                          </Box>
                        </Button>
                      </Grid>

                      {pPT.TabItems.map((pPT2, iPT2) => (
                        <Grid item key={iPT2} xs={12}>
                          <Button
                            size={'large'}
                            component={'a'}
                            href={pPT2.href}
                            fullWidth
                            sx={{
                              justifyContent: 'flex-start',
                              color:
                                activeLink === pPT2.href
                                  ? theme.palette.primary.main  
                                  : theme.palette.text.primary,
                              backgroundColor:
                                activeLink === pPT2.href
                                  ? alpha(theme.palette.primary.main, 0.1)
                                  : 'transparent',
                              fontWeight: activeLink === pPT2.href ? 600 : 400,
                            }}
                          >
                            <Box marginLeft={1}>
                              {pPT2.title}
                            </Box>
                          </Button>
                        </Grid>
                      ))}

                    </Grid>                  
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ) 
            : 
            (
              <Grid item key={iPT} xs={12}>
                <Button
                  size={'large'}
                  component={'a'}
                  href={pPT.href}
                  fullWidth
                  sx={{
                    justifyContent: 'flex-start',
                    color:
                      activeLink === pPT.href
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    backgroundColor:
                      activeLink === pPT.href
                        ? alpha(theme.palette.primary.main, 0.1)
                        : 'transparent',
                    fontWeight: activeLink === pPT.href ? 600 : 400,
                  }}
                >
                  {pPT.title}
                </Button>
              </Grid>
            )

        ))}
      </Grid>
      
      {/*
      <Accordion
        disableGutters
        elevation={0}
        sx={{ backgroundColor: 'transparent' }}
      >
        
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: 0 }}
        >
          <Typography
            fontWeight={hasActiveLink() ? 600 : 400}
            color={hasActiveLink() ? 'primary' : 'text.primary'}
          >
            {title}
          </Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ padding: 0 }}>
          <Grid container spacing={1}>
            {linktreeFLAT.map((p, i) => (
              <Grid item key={i} xs={12}>
                <Button
                  size={'large'}
                  component={'a'}
                  href={p.href}
                  fullWidth
                  sx={{
                    justifyContent: 'flex-start',
                    color:
                      activeLink === p.href
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    backgroundColor:
                      activeLink === p.href
                        ? alpha(theme.palette.primary.main, 0.1)
                        : 'transparent',
                    fontWeight: activeLink === p.href ? 600 : 400,
                  }}
                >
                  {p.title}
                  {p.isNew && (
                    <Box
                      padding={0.5}
                      display={'inline-flex'}
                      borderRadius={1}
                      bgcolor={'primary.main'}
                      marginLeft={2}
                    >
                      <Typography
                        variant={'caption'}
                        sx={{ color: 'common.white', lineHeight: 1 }}
                      >
                        new
                      </Typography>
                    </Box>
                  )}
                </Button>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
      */}
      
    </Box>
  );
};

NavItem.propTypes = {
  primetabs: PropTypes.array,
  linktreeFLAT: PropTypes.array.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func,
};

export default NavItem;
