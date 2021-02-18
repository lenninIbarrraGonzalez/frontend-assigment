import { useState } from 'react';
import initialState from '../InitialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  return {
    state,
  }
};

export default useInitialState;
