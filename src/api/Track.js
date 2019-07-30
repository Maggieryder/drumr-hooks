// import * as Types from '../actions/types'
// import Sample from './Sample'
// import Panner from './Panner'
// import AudioProcessor from './AudioProcessor'


export default class Track {
  constructor(id, context, destination, reverb, delay){
    this._id = id
    this._context = context
    this._destination = destination
    this._reverbNode = reverb
    this._delayNode = delay
    // this.store = store;
    // this.store.subscribe(this.updateState.bind(this));

    this._outputGain = this._context.createGain()
    this._reverbSendGain = this._context.createGain()
    this._delaySendGain = this._context.createGain()
    // this._panner = new Panner(this._context, this._id)
    // this._meter = new AudioProcessor(this._context, this._id)
    // this._meter.init(this._outputGain, this._destination)


    
    // this.sourceNode;
    // this.sample;
    // this.buffer;
    this._mute = false
    this._solo = false
    this.connect()
  }

//   updateState(){
//     let { tracks, kits, controller } = this.store.getState();
//     // let trackData = tracks.filter(t => t.id === this.id);
//     let trackData = tracks[this.id];
//     let { buffers } = kits;
//     // console.log('buffers', buffers)
//     // console.log('thisTrackData', tracks);
//     if (trackData){
//       console.log('thisTrackData', trackData);
//       let { bufferId,
//         volume,
//         mute,
//         solo,
//         reverbSend,
//         delaySend } = trackData;
//       // console.log('bufferId', bufferId);
//       if (this.buffer !== buffers[bufferId]) this.assignSample(buffers[bufferId]);
//       if (Math.round(this.getVolume()*10) !== volume ) this.updateVolume(volume/10);
//       if (Math.round(this.getSendGain(0)*10) !== reverbSend ) this.updateSendGain(0, reverbSend/10);
//       if (Math.round(this.getSendGain(1)*10) !== delaySend ) this.updateSendGain(1, delaySend/10);
//       if (this.mute !== mute ) this.toggleMute(mute);
//       if (this.isSolo !== solo ) this.toggleSolo(solo);
//     }
//   }

  init(destination, reverbNode, delayNode){
    
  }
  id(){
    return this._id;
  }
//   assignSample(buffer){
//     this.buffer = buffer;
//     this.sample = new Sample(this.context, buffer, this.panner.node(), this.outputGain,this.sendGains[0],this.sendGains[1]);
//   }
//   triggerSample(time){
//     this.sample.trigger(time);
//   }
  toggleMute(){ 
    this._mute = !this._mute
    this._mute ? this.disconnect() : this.connect();
  }
  isMute(){
    return this._mute;
  }
  toggleSolo(){
    this._solo = !this._solo
  }
  isSolo(){
    return this._solo;
  }
  updateVolume(value){
    // console.log('Track '+this.id+' volume', value )
    this._outputGain.gain.value = value;
  }
  getVolume(){
    return this._outputGain.gain.value;
  }
  updatePan(value){
    // console.log('Track '+this.id+' volume', value )
    // this._outputGain.gain.value = value;
  }
  updateReverbSend(value){
    // console.log('Track '+this.id+' send ' + index, 'value '+value )
    this._reverbSendGain.gain.value = value;
  }
  reverbSend(){
    return this._reverbSendGain.gain.value;
  }
  updateDelaySend(value){
    // console.log('Track '+this.id+' send ' + index, 'value '+value )
    this._delaySendGain.gain.value = value;
  }
  delaySend(){
    return this._delaySendGain.gain.value;
  }
  connect(){
    this._reverbSendGain.connect(this._reverbNode);
    this._delaySendGain.connect(this._delayNode);
    // this._meter.connect();
    this._outputGain.connect(this._destination);
  }
  disconnect(){
    // console.log('Track '+this.id+' disconnect')
    this._reverbSendGain.disconnect(this._reverbNode);
    this._delaySendGain.disconnect(this._delayNode);
    // this._meter.disconnect();
    this._outputGain.disconnect(this._destination);
  }
}
