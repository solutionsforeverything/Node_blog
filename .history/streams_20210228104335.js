const fs=require('fs');
const readStream=fs.createReadStream('./docs/blog3.txt',{encoding:'utf8'});

readStreams.on('data',(chunk)=>{
    console.log('---New chunk---');
    console.log(chunk.toString());
});