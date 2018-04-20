class SocketServer {
  constructor() {
    this.s = {socket:{}};
  }
  initConnection(params){
    this.s.socket = params.socket;
  }

  send(data){
     this.s.socket.emit("FromAPI", {res:data});
  }

}
var instance = new SocketServer();
Object.freeze(instance);
export default instance;
