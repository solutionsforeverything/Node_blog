const fs=require('fs');
//reading files
// fs.readFile('./docs/blog.txt',(err,data)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');
//writing files
fs.writeFile('./docs/blog1.txt',"hello world!!",()=>{
    console.log('file was written');
});
console.log('last line');
//directories




//deleting files