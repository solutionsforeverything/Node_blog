const fs=require('fs');
const readStreams=fs.createReadStream('./docs/blog3.txt',{end});

readStreams.on('data',(chunk)=>{
    console.log('---New chunk---');
    console.log(chunk.toString());
});