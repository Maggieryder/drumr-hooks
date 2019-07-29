import React, { useState } from 'react'

import Sample from '../api/Sample'

const initialState = {
  trackId: null,
  context: null,
  voiceId: 0,
  sample: Sample, 
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