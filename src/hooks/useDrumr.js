import axios from 'axios'
import { useContext, useReducer } from 'react'
import { DrumrContext } from '../context/DrumrContext'

// import { initAudioCtx } from '../api/AudioCtx'
import { Sample, PannerNode, connectGain, trigger } from '../api/Sample'



import Mixer from '../api/Mixer'
import Track from '../api/Track'
// import SQR from '../api/Sequencer'


const useDrumr = () => {
  const [state, setState] = useContext(DrumrContext);

  const { isLoading,
    error,
    context,
    kits,
    verbs,
    kitBuffers,
    verbBuffers,
    currentKit,
    currentVerb, 
    signature,
    tempo,
    swing,
    numBars,
    numBeats,
    numSteps,
    sequences,
    tracks
     } = state


  const mixer = new Mixer(context)

  

  // const [tracks, dispatch] = useReducer((tracks, { type, value }) => {
  //   switch (type) {
  //     case "addTrack":
  //       return [...tracks, value];
  //     case "removeTrack":
  //       return tracks.filter((_, index) => index !== value);
  //     default:
  //       return tracks;
  //   }
  // }, []);

  const setTracks = () => {
    [0,1,2,3].map((item, i)=> addTrack(i))
    console.log(' - - - TRACKS', tracks)
  }

  const addTrack = (id) => {
    const track = new Track(id, context, mixer)
    // console.log('addTrack', track)
    setState(state => ({ 
      ...state, 
      tracks: [...state.tracks, track] 
    }))
    // dispatch({ type:'addTrack', value: track })
  }


  const loadData = async (url) => {  
    setState(state => ({ ...state, isLoading: true }));
    try {
      const response = await axios.get(`./${url}.json`)
      // console.log('Success!',response.data.kits);
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

  const loadBuffer = async (url, callback) => {
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
    setState(state => ({ ...state, isLoading: true }))
    const directory = obj.directory,
    voices = obj.voices
    let buffersToLoad = voices.length,
    buffers = [] 
    // console.log('loadBuffers voices', voices.length) 
    for (let i = 0;i<voices.length;i++){
      buffers[i] = { label:voices[i].label, buffer:{}, value: voices[i].value }
      loadBuffer('assets/audio/'+ directory + voices[i].smple, (buffer) => {
          //console.log(buffer);
          buffers[i].buffer = buffer
          buffersToLoad --
          // console.log('samplesToLoad', buffersToLoad)
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

  const assignReverbBuffer = (buffer) => {
    mixer.reverbBuffer(buffer)
  }

  const setCurrentKit = index => {
    console.log('setCurrentKit', index)
    setState(state => ({ 
      ...state, 
      currentKit: index 
    }));
  }

  // const setCurrentVoice = index => {
  //   console.log('setCurrentVoice', index)
  //   setState(state => ({ 
  //     ...state, 
  //     currentVoice: index 
  //   }));
  // }

  const onNoteTap = (trackId, barId, stepId) => {
    // e.preventDefault();
    console.log('trackIndex', trackId, 'bar', barId, 'step', stepId);
    const track = tracks[trackId]
    console.log('track', track)
    const voiceId = track.voiceId
    triggerSample(kitBuffers[trackId].buffer, 0)
    // console.log('Sequencer.running', Sequencer.running());
    // if (!Sequencer.running()){
    //   // MIXER.tracks[trackIndex].triggerSample(CTX.currentTime);
    //   // Sequencer.sequenceNote(trackId, barId, stepId);
    // }  
  }
  const triggerSample = (buffer, time) => {
    const sample = new Sample( context, buffer ),
    pannedSample = new PannerNode( context, sample)
    console.log('mixer.masterMix',mixer.reverb())
    connectGain(context, pannedSample, mixer.reverb())
    connectGain(context, pannedSample, mixer.delay())
    connectGain(context, pannedSample, mixer.masterMix())
    trigger(sample, time);
  }

  const setTempo = value => {
    console.log('setTempo', value)
    setState(state => ({ 
      ...state, 
      tempo: value 
    }));
  }

  const setSwing = value => {
    console.log('setSwing', value)
    setState(state => ({ 
      ...state, 
      swing: value 
    }));
  }

  const setNumBars = value => {
    console.log('setNumBars', value)
    setState(state => ({ 
      ...state, 
      numBars: value 
    }));
  }

  const setNumBeats = value => {
    console.log('setNumBars', value)
    setState(state => ({ 
      ...state, 
      numBeats: value 
    }))
  }

  const setNumSteps = value => {
    console.log('setNumBars', value)
    setState(state => ({ 
      ...state, 
      numSteps: value 
    }))
  }

  // const setMixer = () => {
  //   console.log('setMixer', state.context)
  //   setState(state => ({ 
  //     ...state, 
  //     mixer: new Mixer(state.context) 
  //   }))
  // }
  

  

  

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
    isLoading,
    error,
    context,
    kits,
    verbs,
    kitBuffers,
    verbBuffers,
    currentKit,
    currentVerb,
    assignReverbBuffer,
    onNoteTap,
    signature,
    tempo, 
    swing,
    numBars,
    numSteps,
    numBeats,
    sequences,
    tracks,
    setTracks,
    setTempo,
    setSwing,
    setNumBars,
    setNumBeats,
    setNumSteps
  }
};

export default useDrumr;
