import * as root from './root';
import * as block from './block';
import * as peer from './peer';
import * as home from './home';


export default function(app) {

  app.route('/')
  .get(root.initialMsg)

  app.route('/home')
  .get(home.index)

  app.route('/blocks')
  .get(block.getBlocks)
  .post(block.addBlock)

app.route('/peers')
  .get(peer.listPeers)
  .post(peer.addPeers)

}
