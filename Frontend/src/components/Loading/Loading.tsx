import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingComponent = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="auto"
      bgcolor="#f5f5f5"
    >
      <CircularProgress sx={{color:"#0e606e"}} size={60} thickness={3.5} />
      <Typography
        variant="h6"
        component="div"
        style={{
          marginTop: '20px',
          color: '#0e606e',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          letterSpacing: '1.5px',
        }}
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default LoadingComponent;
