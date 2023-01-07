function download(url,process){
    setTimeout(()=>{
        console.log('loading', url);
        process(url)
    },1000)


}
function process(picture){

        console.log( `Picturing ${picture} `)

}
let url='https://www.javascripttutorial.net/pic.jpg';
download(url,process);
