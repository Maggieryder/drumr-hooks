import axios from 'axios'
import { useContext } from 'react'
import { DrumrContext } from '../context/DrumrContext'
import { initAudioCtx } from '../api/AudioCtx'
import SQR from '../api/Sequencer'

import $ from "jquery";

const CTX = initAudioCtx()
const Sequencer = new SQR(CTX);

const useDrumr = () => {
  const [state, setState] = useContext(DrumrContext);

  const { isLoading,
    error,
    kits,
    verbs,
    kitBuffers,
    verbBuffers,
    currentKit,
    currentVoice,
    currentVerb, 
    signature,
    sequences
     } = state

  const loadData = async (url) => {
    setState(state => ({ ...state, isLoading: true }));
    try {
      const response = await axios.get(`./${url}.json`)
      console.log('Success!',response.data.kits);
      setState({
        ...state,
        kits: response.data.kits,
        verbs: response.data.verbs,
        loading: false
      })
    } catch (err) {
      setState({
        ...state,
        error: 'Something went wrong!',
        loading: false
      })
    }
  }

  const setSound = ({ sounds }, { name, buffer }) => {
    const sound = sounds.find((s) => s.name === name);
    sound.buffer = buffer;
  }

  const loadBuffer = async (context, url, callback) => {
    const request = new XMLHttpRequest();
      //header('Access-Control-Allow-Origin: *');
      request.open('get', url, true);
      request.responseType = 'arraybuffer';
      request.onload = function() {
        context.decodeAudioData(request.response, function(buffer) {
          callback(buffer);
        },
        function(e){ alert("Error with decoding audio data", e ); });
      };
      request.send();
  }

  const loadBuffers = async (obj, type) => {
    setState(state => ({ ...state, isLoading: true }));
    const directory = obj.directory,
    voices = obj.voices;
    let buffers = [],
    buffersToLoad = voices.length;
    for (let i = 0;i<voices.length;i++){
      buffers[i] = { label:voices[i].label, buffer:{}, value: i };
      loadBuffer(CTX, 'assets/audio/'+ directory + voices[i].smple, (buffer) => {
          //console.log(buffer);
          buffers[i].buffer = buffer;
          buffersToLoad --;
          console.log('samplesToLoad', buffersToLoad);
          if (buffersToLoad < 1) {
            setState(state => ({ 
              ...state, 
              [type]: buffers,
              isLoading: false 
            }))
          } 
        }
      )
    }
  }

  const setCurrentKit = index => {
    console.log('setCurrentKit', index)
    setState(state => ({ 
      ...state, 
      currentKit: index 
    }));
  }

  const setCurrentVoice = index => {
    console.log('setCurrentVoice', index)
    setState(state => ({ 
      ...state, 
      currentVoice: index 
    }));
  }

  const onNoteTap = (trackId, barId, stepId) => {
    // e.preventDefault();
    console.log('trackIndex', trackId, 'bar', barId, 'step', stepId);
    // console.log('Sequencer.running', Sequencer.running());
    if (!Sequencer.running()){
      // MIXER.tracks[trackIndex].triggerSample(CTX.currentTime);
      // Sequencer.sequenceNote(trackId, barId, stepId);
    }  
  }

  

  // function playTrack(index) {
  //   if (index === state.currentTrackIndex) {
  //     togglePlay();
  //   } else {
  //     state.audioPlayer.pause();
  //     state.audioPlayer = new Audio(state.tracks[index].file);
  //     state.audioPlayer.play();
  //     setState(state => ({ ...state, currentTrackIndex: index, isPlaying: true }));
  //   }
  // }

  // function togglePlay() {
  //   if (state.isPlaying) {
  //     state.audioPlayer.pause();
  //   } else {
  //     state.audioPlayer.play();
  //   }
  //   setState(state => ({ ...state, isPlaying: !state.isPlaying }));
  // }

  // function playPreviousTrack() {
  //   const newIndex = ((state.currentTrackIndex + -1) % state.tracks.length + state.tracks.length) % state.tracks.length;
  //   playTrack(newIndex);
  // }

  // function playNextTrack() {
  //   const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
  //   playTrack(newIndex);
  // }

  return {
    // playTrack,
    // togglePlay,
    // currentTrackName: state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].name,
    // trackList: state.tracks,
    // isPlaying: state.isPlaying,
    // playPreviousTrack,
    // playNextTrack,
    loadData,
    loadBuffers,
    setCurrentKit,
    setCurrentVoice,
    isLoading,
    error,
    kits,
    verbs,
    kitBuffers,
    verbBuffers,
    currentKit,
    currentVoice,
    currentVerb,
    onNoteTap,
    signature,
    sequences
  }
};

export default useDrumr;
