import React, { useState } from 'react';

const initialState = {
  isLoading: false,
  error: null,
  kits: null,
  verbs: null,
  kitBuffers: [{ label: '...', value: '0'}],
  verbBuffers: [{ label: '...', value: '0'}],
  currentKit: 1,
  currentVerb: 0,
  signature:'4/4',
  tempo: 96,
  swing: 0,
  numBars: 1,
  numBeats: 4,
  numSteps: 16,
  sequences: [], 
  tracks: []
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
