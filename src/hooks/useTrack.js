import { useContext } from 'react'
// import { DrumrContext } from '../DrumrContext'
import { TrackContext } from '../context/TrackContext'

const useTrack = () => {
  const [state, setState] = useContext(TrackContext);

  const { 
    id,
    voice,
    gain,
    pan,
    reverbSend,
    delaySend,
    solo,
    mute,
    sequence
     } = state

  const setVoice = ({ voices }, { name, buffer }) => {
    const voice = voices.find((s) => s.name === name);
    voice.buffer = buffer;
  }

  return {
    id,
    voice,
    gain,
    pan,
    reverbSend,
    delaySend,
    solo,
    mute,
    sequence
  }
}

export default useTrack;