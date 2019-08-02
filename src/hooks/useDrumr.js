import axios from 'axios'
import { useContext } from 'react'
import { DrumrContext } from '../context/DrumrContext'
// import * as ACTIONS from '../actions'
import * as TYPES from '../actions/types'

// import { initAudioCtx } from '../api/AudioCtx'
import { Sample, PannerNode, connectGain, trigger } from '../api/Sample'

// import tracksReducer, { initialState } from '../reducers/tracksReducer'



import Mixer from '../api/Mixer'
import Track from '../api/Track'
// import SQR from '../api/Sequencer'

// const initialTracksState = {
//   all: [],
//   soloed: [],
//   muted: []
// }

// const tracksReducer = (state, action) => {
//   console.log('tracksReducer action', action)
//   switch (action.type){
//     case 'ADD_TRACK':
//       return {
//         ...state,
//         all: [...state.all, action.value]
//       }
//     default:
//         return state
//   }
  
// }


const useDrumr = () => {
  const {state:{ controller, tracks }, dispatch} = useContext(DrumrContext);
  // console.log(tracks)

  const { isLoading,
    error,
    context,
    kits,
    verbs,
    kitBuffers,
    verbBuffers,
    currentKitId,
    currentVerbId, 
    signature,
    tempo,
    swing,
    numBars,
    numBeats,
    numSteps,
    sequences
     } = controller


  const mixer = new Mixer(context)

  // const [tracks, dispatch] = useReducer(tracksReducer, initialState)

  // console.log('tracks',tracks)

  

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
    console.log('setTracks >>>>>')
    [0,1,2,3].map((item, i)=> addTrack(i)) 
  }

  const addTrack = (id) => {
    const track = new Track(id, context, mixer)
    // console.log('addTrack', track)
    // setState(state => ({ 
    //   ...state, 
    //   tracks: [...state.tracks, track] 
    // }))
    dispatch({ type: TYPES.ADD_TRACK, value: track })
    // console.log(' - - - TRACKS', tracks)
  }

  const muteTrack = (id) => {
    dispatch({ type: TYPES.MUTE_TRACK, value: id })
  }

  const soloTrack = (id) => {
    dispatch({ type: TYPES.SOLO_TRACK, value: id })
  }


  const loadData = async (url) => {  
    dispatch({ type: TYPES.IS_LOADING, value: true })
    try {
      const response = await axios.get(`./${url}.json`)
      // console.log('Success!',response.data.kits);
      dispatch({ type: TYPES.DATA_LOADED, value: response.data })
    } catch (err) {
      dispatch({ type: TYPES.HAS_ERROR, value: err })
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
    // setState(state => ({ ...state, isLoading: true }))
    const directory = obj.directory,
    voices = obj.voices
    let buffersToLoad = voices.length,
    buffers = [] 
    // console.log('loadBuffers voices', voices.length) 
    dispatch({ type: TYPES.IS_LOADING, value: true })
    for (let i = 0;i<voices.length;i++){
      buffers[i] = { label:voices[i].label, buffer:{}, value: voices[i].value }
      loadBuffer('assets/audio/'+ directory + voices[i].smple, (buffer) => {
          //console.log(buffer);
          buffers[i].buffer = buffer
          buffersToLoad --
          // console.log('samplesToLoad', buffersToLoad)
          if (buffersToLoad < 1) {
            // setState(state => ({ 
            //   ...state, 
            //   [type]: buffers,
            //   isLoading: false 
            // }))
            const bufferType = type === 'verbBuffers' ? TYPES.UPDATE_VERB_BUFFERS : TYPES.UPDATE_KIT_BUFFERS
            dispatch({ type: bufferType, value: buffers })
          } 
        }
      )
    }
  }

  const assignReverbBuffer = (buffer) => {
    mixer.reverbBuffer(buffer)
  }

  const setCurrentKitId = index => {
    console.log('setCurrentKit', index)
    dispatch({ type: TYPES.UPDATE_KIT_ID, value: index })
  }

  const onNoteTap = (trackId, barId, stepId) => {
    // e.preventDefault();
    console.log('trackIndex', trackId, 'bar', barId, 'step', stepId);
    const track = tracks[trackId]
    console.log('track', track)
    // const voiceId = track.voiceId
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
    dispatch({ type: TYPES.UPDATE_TEMPO, value })
  }

  const setSwing = value => {
    console.log('setSwing', value)
    dispatch({ type: TYPES.UPDATE_SWING, value })
  }

  const setNumBars = value => {
    console.log('setNumBars', value)
    dispatch({ type: TYPES.UPDATE_NUMBARS, value })
  }

  const setNumBeats = value => {
    console.log('setNumBars', value)
    dispatch({ type: TYPES.UPDATE_NUMBEATS, value })
  }

  const setNumSteps = value => {
    console.log('setNumBars', value)
    dispatch({ type: TYPES.UPDATE_NUMSTEPS, value })
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
    setCurrentKitId,
    isLoading,
    error,
    context,
    kits,
    verbs,
    kitBuffers,
    verbBuffers,
    currentKitId,
    currentVerbId,
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
    addTrack,
    setTracks,
    setTempo,
    setSwing,
    setNumBars,
    setNumBeats,
    setNumSteps
  }
};

export default useDrumr;
