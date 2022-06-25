import React, { useMemo, useState, createRef } from 'react';
import { Box } from '@mui/material';
import Template from './template';
import FrontPage from './sections/frontPage';
import AboutUs from './sections/aboutUs';
import Services from './sections/services';
import TechnicalFeatures from './sections/technicalFeatures';
import Achievements from './sections/achievements';
import Contact from './sections/contact';
import Loader from './components/loader';
import LoaderContext from './context/loaderContext';
import Drawer from './components/drawer';

const App = () => {
  const [loading, setLoading] = useState(true);
  const providerValues = useMemo(
    () => ({ loading, setLoading }),
    [loading, setLoading]
  );

  const refServices = React.useRef<HTMLInputElement>(null);
  const refAboutUs = React.useRef<HTMLInputElement>(null);
  const refContact = React.useRef<HTMLInputElement>(null);

  return (
    <Template>
      <LoaderContext.Provider value={providerValues}>
        <Box display={loading ? 'none' : 'block'}>
          <Box
            sx={{
              background:
                'linear-gradient(148.25deg, #8A04E6 3%, #c5a5ff 79.85%)',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 1,
              padding: '0 16px',
            }}
          >
            <Drawer refs={{ refServices, refAboutUs, refContact }} />
            <FrontPage />
          </Box>
          <TechnicalFeatures />
          <Services innerRef={refServices} />
          <AboutUs innerRef={refAboutUs} />
          <Achievements innerRef={refContact} />
          <Contact />
        </Box>

        {loading && <Loader />}
      </LoaderContext.Provider>
    </Template>
  );
};

export default App;
