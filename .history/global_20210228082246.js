//console.log(global);

const int=setInterval(()=>{
    console.log("in the interval");
},1000);

setTimeout(()=>{
    console.log("in the timeout");
    clearInterval(int)
})