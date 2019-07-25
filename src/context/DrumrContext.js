import React, { useState } from 'react';

const initialState = {
  isLoading: false,
  error: null,
  kits: null,
  verbs: null,
  kitBuffers: [{ label: '...', value: '0'}],
  verbBuffers: [{ label: '...', value: '0'}],
  currentKit: 0,
  currentVerb: 0,
  signature:'4/4',
  numBars: 2,
  numBeats: 3,
  numSteps: 12,
  sequences: []
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
