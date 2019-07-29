import { useContext } from 'react'

import { TrackContext } from '../context/TrackContext'

const useTrack = () => {
  const [state, setState] = useContext(TrackContext);

  const { 
    trackId,
    context, 
    voiceId,
    sample,
    gain,
    pan,
    reverbSend,
    delaySend,
    solo,
    mute,
    sequence
     } = state

  

  // const setSound = ({ buffers }, { name, buffer }) => {
  //   const sound = buffers.find((s) => s.name === name);
  //   sound.buffer = buffer;
  // }
  const setTrackId = ({ trackId, value }) => {
    console.log('[useTrack] setVoiceId', { trackId, value })
    setState(state => ({ 
      ...state, 
      trackId: value 
    }));
  }

  const setVoiceId = ({ trackId, value }) => {
    console.log('[useTrack] setVoiceId', { trackId, value })
    setState(state => ({ 
      ...state, 
      voiceId: value 
    }));
  }

  const setGain = ({ trackId, value }) => {
    console.log('[useTrack] setGain', { trackId, value })
    setState(state => ({ 
      ...state, 
      gain: value 
    }));
  }

  const setPan = ({ trackId, value }) => {
    console.log('[useTrack] setPan', { trackId, value })
    setState(state => ({ 
      ...state, 
      pan: value 
    }));
  }

  const setReverbSend = ({ trackId, value }) => {
    console.log('[useTrack] setReverbSend', { trackId, value })
    setState(state => ({ 
      ...state, 
      reverbSend: value 
    }));
  }

  const setDelaySend = ({ trackId, value }) => {
    console.log('[useTrack] setDelaySend', { trackId, value })
    setState(state => ({ 
      ...state, 
      delaySend: value 
    }));
  }

  const setSolo = ({ trackId, value }) => {
    console.log('[useTrack] setSolo', { trackId, value })
    setState(state => ({ 
      ...state, 
      solo: value 
    }));
  }

  const setMute = ({ trackId, value }) => {
    console.log('[useTrack] setMute', { trackId, value })
    setState(state => ({ 
      ...state, 
      mute: value 
    }));
  }

  const setSequence = ({ trackId, value }) => {
    console.log('[useTrack] setSequence', { trackId, value })
    setState(state => ({ 
      ...state, 
      sequence: value 
    }));
  }

  



  return {
    trackId,
    context,
    voiceId,
    gain,
    pan,
    reverbSend,
    delaySend,
    solo,
    mute,
    sequence,
    setVoiceId,
    setGain,
    setPan,
    setReverbSend,
    setDelaySend,
    setSolo,
    setMute,
    setSequence
  }
}

export default useTrack;