import React, { useContext } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import header from '../../assets/images/header.png';
import { devices } from '../../assets/devices';
import waves from '../../assets/images/waves.svg';
import LoaderContext from '../../context/loaderContext';

const FrontPage = () => {
  const loaderContext = useContext(LoaderContext);
  const { setLoading } = loaderContext;

  return (
    <Box>
      <Box display="flex" flexWrap="wrap" mt={6}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              mt={10}
              sx={{
                paddingLeft: '32px',
                [devices.mobile]: {
                  marginTop: 0,
                },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: '#ffffff',
                  margin: '0 0 20px 0',
                  fontWeight: 700,
                }}
              >
                Lorem ipsum
              </Typography>
              <Typography sx={{ color: 'white', margin: 0 }}>
                Lorem ipsum ligula arcu pharetra tempus auctor blandit arcu
                maecenas inceptos, lacinia nunc sem potenti felis a pellentesque
                euismod lectus primis, in nunc viverra lorem donec cursus ipsum
                class gravida.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ zIndex: 3 }}>
            <Box zIndex={3} textAlign="center" paddingLeft={4}>
              <Box zIndex={3}>
                <img
                  src={header}
                  alt="teste"
                  style={{
                    maxWidth: '450px',
                    height: 'auto',
                    borderRadius: '3px',
                    zIndex: 3,
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        position="absolute"
        bottom="-7px"
        left={0}
        width="100%"
        height="auto"
      >
        <img
          src={waves}
          alt="waves"
          style={{ maxWidth: ' 100%', height: 'auto', borderRadius: '3px' }}
          onLoad={() => {
            setTimeout(() => {
              setLoading(false);
            }, 500);
          }}
        />
      </Box>
    </Box>
  );
};

export default FrontPage;
