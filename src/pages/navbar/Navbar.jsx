import React from 'react';
import CustomIcon from '../../components/CustomIcon';
import { Button, Grid, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ setIsHamburgerClicked }) => {
  const isMdScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <Grid
      container
      justifyContent={'space-between'}
      alignItems={'center'}
      sx={{
        minWidth: '300px',
        p: isMdScreen ? '30px 80px' : '15px 15px',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        backgroundColor: '#fff',
        zIndex: 1000,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Grid item xs={11} md={4}>
        <CustomIcon
          name={'namratha'}
          style={{ width: '193px', height: '42px', cursor: 'pointer' }}
          svgStyle={'width: 193px; height: 42px'}
        />
      </Grid>
      {isMdScreen ? (
        <Grid item md={7} lg={5} xl={4}>
          <Grid
            container
            direction='row'
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Grid
              item
              sx={{
                color: '#147F82',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              Home
            </Grid>
            <Grid item sx={{ cursor: 'pointer' }}>
              Services
            </Grid>
            <Grid item sx={{ cursor: 'pointer' }}>
              Gallery
            </Grid>
            <Grid item>
              <Button
                sx={{
                  width: '150px',
                  height: '50px',
                  borderRadius: '50px',
                  textTransform: 'capitalize',
                  backgroundColor: '#147F82',
                  color: '#FFF',
                  '&:hover': {
                    backgroundColor: '#147F82',
                    color: '#FFF',
                  },
                }}
              >
                Contact us
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid item xs={1}>
          <MenuIcon
            sx={{ cursor: 'pointer' }}
            onClick={() => setIsHamburgerClicked((prevState) => !prevState)}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Navbar;
