import React, { useReducer } from 'react'

import { initAudioCtx } from '../api/AudioCtx'

import rootReducer from '../reducers'



// import tracksReducer from '../reducers/tracksReducer'

const initialState = {
  context: initAudioCtx(),
  isLoading: false,
  error: null,
  kits: null,
  verbs: null,
  kitBuffers: [{ label: '...', value: '0'}],
  verbBuffers: [{ label: '...', value: '0'}],
  currentKitId: 1,
  currentVerbId: 0,
  signature:'4/4',
  tempo: 96,
  swing: 0,
  numBars: 1,
  numBeats: 4,
  numSteps: 16,
  mixer: null,
  sequences: []
}

const initialTracksState = {
  all: [],
  soloed: [],
  muted: []
}

const rootState = {
  controller: initialState,
  tracks: initialTracksState
}

const DrumrContext =  React.createContext([{}, () => {}])

const DrumrProvider = (props) => {
  // const [state, setState] = useState(initialState);
  const [state, dispatch] = useReducer(rootReducer, rootState)
  return (
    <DrumrContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DrumrContext.Provider>
  );
};

export { DrumrContext, DrumrProvider };
