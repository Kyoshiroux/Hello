

const async = require('async')
const fs = require('fs')
const items = []
const q = async.queue((task, callback) =>{
    fs.writeFile("mn" + task.number + ".txt", "this is from process:"+task.number,()=>{
        console.log("Create file"+ task.number + "complete")
        callback()
    })

}, 100)
   
q.drain = ()=> {
    console.log("all item has been processes")
}

for(i=0; i<100; i++)
{
  items.push({number: i})
}

q.push(items, (err) => {
    console.log('finish process item')
})