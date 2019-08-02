import Reverb from '../api/Reverb'
import Delay from '../api/Delay'

class Mixer {
  constructor(context){
    this._context = context
    this._tracks = []
    this._soloTracks = []
    this._mutedTracks = []
    this.init()
  }
  init(){
    this._context.listener.setOrientation(0, 0, -1, 0, 1, 0);
    this._wetMix = this._context.createGain()
    this._dryMix = this._context.createGain()
    this._masterMix = this._context.createGain()
    this._reverb = new Reverb(this._context, this.wetMix())
    this._delay = new Delay(this._context, this.wetMix())
    // console.log('this._reverb', this.reverb())
    //this._compressor = new Compressor(this._context, this._masterMix)
    this._wetMute = false
    this._dryMute = false
    this.connect()
    // this.connectWetMix()
    // this.updateWetVolume(.7)
    // this.connectDryMix()
    // this.updateDryVolume(.7)
    // this.connectMasterMix()
    // this.updateMasterVolume(.7)
  }
  connect() {
    this.connectWetMix()
    // this.updateWetVolume(.7)
    this.connectDryMix()
    // this.updateDryVolume(.7)
    this.connectMasterMix()
    // this.updateMasterVolume(.7)
  }
  connectWetMix(){
    this.updateWetVolume(.7)
    this._wetMix.connect(this._masterMix)
    console.log('this.wetMix()', this.wetMix().gain.value)
  }
  disconnectWetMix(){
    this._wetMix.disconnect(this._masterMix)
  }
  connectDryMix(){
    this.updateDryVolume(.7)
    this._dryMix.connect(this._masterMix)
    console.log('this.dryMix()', this.dryMix().gain.value)
  }
  disconnectDryMix(){
    this._dryMix.disconnect(this._masterMix)
  }
  connectMasterMix(){
    this.updateMasterVolume(.7)
    this._masterMix.connect(this._context.destination)
    console.log('this.masterMix()', this.masterMix().gain.value)
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
  wetMix(){
    return this._wetMix
  }
  dryMix(){
    return this._dryMix
  }
  reverb(){
    return this._reverb.node()
  }
  delay(){
    return this._delay.node()
  }
  compressor(){
    return this._compressor.node()
  }
  
  toggleReverb(isOn){
    this._reverb.toggleOn(isOn)
  }
  reverbBuffer(buffer){
    this._reverb.setImpulse(buffer)
  }
  toggleDelay(isOn){
    this._delay.toggleOn(isOn)
  }
  // addTrack(){
  //   const id = this._tracks.length
  //   const track = new Track(id, this._context, this._masterMix, this.reverb(), this.delay())
  //   this._tracks = [...this._tracks, track]
  // }
}

export default Mixer