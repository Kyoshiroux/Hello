

const async = require('async')
const request = require('request')
const items = []
const q = async.queue((task, callback) => {
    request('http://apptitude.co.th/', (err,response,body) => {
        if(err){
            console.log(err)
            callback()
        }
        console.log("process:", task.number)
        console.log('statusCode frp, apptitude', response && response.statustCode)
        callback()
 })
}, 1000)
   
q.drain = ()=> {
    console.log("all item has been processes")
}

for(i=0; i<10; i++)
{
  items.push({number: i})
}

q.push(items, (err) => {
    console.log('finish process item')
})

