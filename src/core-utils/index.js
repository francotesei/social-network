
const URL = "http://localhost:3002";
var updateNetwork =  async function(data){

  let response =  await fetch(URL+'/blocks',{
    method: 'post',
     headers: {
       'Accept': 'application/json, text/plain, */*',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({data:data})
  })

}
export {updateNetwork};
