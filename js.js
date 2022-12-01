const { timeEnd } = require('console');
const fs = require('fs')
let a = new Promise((resolve, reject) => {
    fs.readFile('./a.md',function(err,data){
        if (err) reject(err);
        resolve(data);
    })    
})

a.then((value)=>{
    console.log(value.toString())
}),((reson)=>{
    console.log(reson)
})


