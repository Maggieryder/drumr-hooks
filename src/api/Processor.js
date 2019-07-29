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
  toggle() {
    this._isOn = !this._isOn
    this._isOn ? this.connect() : this.disconnect()
  }
  isConnected(){ return this.isOn}
}

export default Processor