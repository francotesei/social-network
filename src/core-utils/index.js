

var updateNetwork =  async function(data){

  let response =  await fetch('http://localhost:3001/blocks',{
    method: 'post',
     headers: {
       'Accept': 'application/json, text/plain, */*',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({data:data})
  })

}
export {updateNetwork};
