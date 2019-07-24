import React, { useState } from 'react';

const initialState = {
  id: null,
  voice: { label: '', buffer: {}},
  gain: 0,
  pan: 0,
  reverbSend: 0,
  delaySend: 0,
  solo: false,
  mute: false,
  sequence: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
};

const TrackContext =  React.createContext([{}, () => {}])

const TrackProvider = (props) => {
  const [state, setState] = useState(initialState);
  return (
    <TrackContext.Provider value={[state, setState]}>
      {props.children}
    </TrackContext.Provider>
  );
};

export { TrackContext, TrackProvider };