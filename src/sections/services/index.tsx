import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import services from '../../assets/images/services.png';
import { devices } from '../../assets/devices';
import theme from '../../assets/theme';

const Services = ({ innerRef }: any) => {
  const servicesArr = [
    { Name: 'IT Consulting', Id: 1 },
    { Name: 'Design', Id: 2 },
    { Name: 'Web Development', Id: 3 },
    { Name: 'Remote It Assistance', Id: 4 },
  ];

  return (
    <Box
      ref={innerRef}
      paddingY={6}
      paddingLeft={5}
      sx={{
        [devices.mobile]: {
          padding: '80px 24px',
        },
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          width="100%"
          sx={{
            '@media (min-width: 900px)': {
              width: '40%',
            },
          }}
        >
          <Typography
            variant="body1"
            mb={1}
            fontWeight={700}
            color={theme.palette.primary.main}
          >
            Check it out!
          </Typography>
          <Typography
            variant="h4"
            textTransform="uppercase"
            mb={3}
            fontWeight={700}
            sx={{ letterSpacing: '8px' }}
          >
            Ipsum Services
          </Typography>
          <Typography variant="body2" mb={2}>
            Lorem ipsum dolor sit amet. Et neque modi et aspernatur quibusdam
            nam rerum obcaecati est libero veniam At quod galisum. Qui voluptas
            nostrum et dolor ipsam ut soluta dolorem qui quis itaque est esse
            necessitatibus quo dolor reiciendis.
          </Typography>

          <Box mt={2}>
            <Grid container spacing={2}>
              {servicesArr.map((item) => (
                <Grid item xs={12} md={6} key={item.Id}>
                  <Box
                    key={item.Id}
                    padding={2}
                    borderRadius={2}
                    boxShadow="2px 0px 9px 1px rgba(82, 90, 101, 0.1)"
                    borderLeft="2px solid rgb(123, 104, 238)"
                    sx={{
                      cursor: 'pointer',
                      '&:hover': {
                        background: `linear-gradient(to right, white 50%, ${theme.palette.primary.light} 50%)`,
                        backgroundSize: '200%',
                        transition: '.4s ease-out',
                        backgroundPosition: '-100% 0',
                        color: 'white',
                      },
                    }}
                  >
                    <Typography fontWeight={700}>{item.Name}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box
          textAlign="center"
          width="50%"
          sx={{
            '@media (max-width: 900px)': {
              display: 'none',
            },
          }}
        >
          <img src={services} alt="Services" style={{ maxWidth: '450px' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
