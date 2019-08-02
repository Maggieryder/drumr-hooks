class Processor {
  constructor(context, destination){
    this._context = context
    this._destination = destination
    this._isOn = false;
  }
  init(){

  }
  connect(){

  }
  disconnect() {

  }
  toggleOn(isOn) {
    console.log('[Processor] toggleOn', isOn)
    this._isOn = isOn
    isOn ? this.connect() : this.disconnect()
  }
  isConnected(){ return this._isOn}
}

export default Processor