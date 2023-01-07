let a = (birthday) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                if (!birthday) {
                    reject('Im sick')
                } else {
                    resolve('Im make three cake')
                }
            },1000
        )

    })

}
a(true)
.then((result)=>{
    console.log(result)

})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log('Party')
})