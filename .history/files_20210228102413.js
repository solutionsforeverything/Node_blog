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
// fs.writeFile('./docs/blog1.txt',"hello world!!",()=>{
//     console.log('file was written');
// });
// console.log('last line');


//directories
if(!fs.existsSync('./assets'))
{
    fs.mkdir('./assets',(err)=>{
        if(err)
        {
            console.log(err);
        }
    console.log('folder created');
    })
}
else{
    fs.rmdir('./assets',(err)=>{
        if(err)
        {
        console.log(err);
        }
        console.log('folder deleted');
    })
}

//deleting files

if(fs.existsSync('./docs/blog1.txt'))
{
    
}