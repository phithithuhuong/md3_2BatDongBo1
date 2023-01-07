let dollar =150

let  money =()=>{
    return new  Promise((resolve, reject) => setTimeout(()=>{

            if(dollar<150){
                reject('Not dollar buy car !')
            }else {
                resolve('Buy car')
            }

    },1000
    ))
}
money().then((result)=>{
    console.log(result)
    }
).catch(reason => {
    console.log(reason)
})