import React, { useState } from 'react';

const initialState = {
  isLoading: false,
  error: null,
  kits: null,
  verbs: null,
  kitBuffers: {},
  verbBuffers: {},
  currentKit: 0,
  currentVerb: 0
};

const DrumrContext =  React.createContext([{}, () => {}])

const DrumrProvider = (props) => {
  const [state, setState] = useState(initialState);
  return (
    <DrumrContext.Provider value={[state, setState]}>
      {props.children}
    </DrumrContext.Provider>
  );
};

export { DrumrContext, DrumrProvider };
