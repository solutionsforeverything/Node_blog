const fs=require('fs');
const readStreams=fs.createReadStream('./docs/blog3.txt');

readStreams.on('data',(chunk))