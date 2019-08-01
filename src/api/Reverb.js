import Processor from './Processor'

class Reverb extends Processor {
  constructor(context, destination){
    super(context, destination)
    this.init()
  }
  init(){
    this._convolver = this._context.createConvolver()
    this._convolverGain = this._context.createGain()
    this._convolverGain.gain.value = 0
    this._convolver.loop = true
    this._convolver.normalize = true
    this.connect()
  }
  loadImpulse(url){
    const self = this
    this._convolverGain.gain.value = 0;
    const request = new XMLHttpRequest();
    //header('Access-Control-Allow-Origin: *');
    request.open('get', url, true);
    request.responseType = 'arraybuffer';
    request.onload = function() {
      self.context.decodeAudioData(request.response, function(buffer) {
        //console.log('LOAD IMPULSE', buffer);
        self.setImpulse(buffer)
      });
    };
    request.send();
  }
  setImpulse(buffer){
    console.log('[ Reverb] setImpulse', buffer)
    this._convolver.buffer = buffer;
    this._convolverGain.gain.value = .7
  }
  connect() {
    this._convolverGain.connect(this._convolver)
    this._convolver.connect(this._destination)
  }
  disconnect() {
    this._convolverGain.disconnect(this._convolver)
    this._convolver.disconnect(this._destination)
  }
  node(){
    return this._convolver
  }
  gain(){
    return this._convolverGain.gain
  }
}

export default Reverb