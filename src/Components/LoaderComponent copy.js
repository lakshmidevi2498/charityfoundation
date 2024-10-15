import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import theme from '../Utilities/Theme';

const Loader = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {/* Customized Circular Loader */}
      <CircularProgress
        size={100}
        thickness={4}
        sx={{
          color: theme.palette.one.green,
          animationDuration: '1.5s', // Adjust the speed of rotation
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round', // Round edges for the progress
          },
          animationDuration: '4s',
        }}
      />

      {/* Centered Text */}
      <Typography
        variant="h6"
        component="div"
        sx={{
          position: 'absolute',
          color: theme.palette.one.green,
          fontWeight:"bold",
        }}
      >
        Charity
      </Typography>
    </Box>
  );
};

export default Loader;
