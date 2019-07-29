import Reverb from '../api/Reverb'
import Delay from '../api/Delay'

class Mixer {
  constructor(context){
    this._context = context
    this._tracks =[]
    this._soloTracks = []
    this._mutedTracks = []
    this.init()
  }
  init(){
    this._context.listener.setOrientation(0, 0, -1, 0, 1, 0);
    this._wetMix = this._context.createGain()
    this._dryMix = this._context.createGain()
    this._masterMix = this._context.createGain()
    this._reverb = new Reverb(this._context, this._wetMix)
    this._delay = new Delay(this._context, this._wetMix)
    //this._compressor = new Compressor(this._context, this._masterMix)
    this._wetMute = false
    this._dryMute = false
    this.connectWetMix()
    this.updateWetVolume(.7)
    this.connectDryMix()
    this.updateDryVolume(.7)
    this.connectMasterMix()
    this.updateMasterVolume(.7)
  }
  connectWetMix(){
    this._wetMix.connect(this._masterMix)
  }
  disconnectWetMix(){
    this._wetMix.disconnect(this._masterMix)
  }
  connectDryMix(){
    this._dryMix.connect(this._masterMix)
  }
  disconnectDryMix(){
    this._dryMix.disconnect(this._masterMix)
  }
  connectMasterMix(){
    this._masterMix.connect(this._context.destination)
  }
  disconnectMasterMix(){
    this._masterMix.disconnect(this._context.destination)
  }
  updateWetVolume(val){
    this._wetMix.gain.value =  val;
  }
  updateDryVolume(val){
    this._dryMix.gain.value = val;
  }
  updateMasterVolume(val){
    this._masterMix.gain.value = val;
  }
  toggleWetMute(){
    this._wetMute = !this._wetMute;
    this._wetMute ? this.disconnectWetMix() : this.connectWetMix()
  }
  toggleDryMute(){
    this._dryMute = !this._dryMute;
    this._dryMute ? this.disconnectDryMix() : this.connectDryMix()
  }
  masterMix(){
    return this._masterMix
  }
  reverb(){
    return this._reverb.node
  }
  delay(){
    return this._delay.node
  }
  compressor(){
    return this._compressor.node
  }
}

export default Mixer