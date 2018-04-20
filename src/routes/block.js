import blockchain from '../model/Blockchain';
import P2P from '../model/P2P';

var getBlocks = (req,res)=>{
res.send(JSON.stringify(blockchain.chain));
}

var addBlock = (req,res)=>{
  console.log("dataaa",req.body);
  let block = JSON.stringify(blockchain.addBlock({
    block:blockchain.nextBlock({data:req.body.data})
  }));
  P2P.broadcast({message:P2P.getResponseForType({type:P2P.messageType.QUERY_LATEST})});
  res.send(block);
}

export {getBlocks,addBlock}
