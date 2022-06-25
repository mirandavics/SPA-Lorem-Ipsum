import React, { Dispatch } from 'react';

interface IloaderContext {
  loading: boolean;
  setLoading: Dispatch<React.SetStateAction<boolean>>;
}

const LoaderContext = React.createContext<IloaderContext>({
  loading: true,
  setLoading: () => {},
});

export default LoaderContext;
