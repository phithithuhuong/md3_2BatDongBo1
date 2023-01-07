function f(s) {
    return new Promise((resolve)=> setTimeout(resolve,s)
    )
}
async function countDown(i){
    while (i > 0){
        document.getElementById('time').innerHTML= i;
        i--;
        await f(1000);
    }
    return "counter finished";
}
let  count =countDown(5);
count.then((msg)=>{
    document.getElementById('time').innerHTML=msg
     }
)
