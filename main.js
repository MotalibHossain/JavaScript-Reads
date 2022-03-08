console.log("Ajax")
loadfunction=()=>{
    // for(i in features){
    //     console.log(i)
    // }
    let xhr=new XMLHttpRequest()
    xhr.open('GET', 'citylots.json', true)

    xhr.onload=function(){
        if(this.status ==200){
            console.log('Success')
        }
        else{
            console.log("Sorry something is wrong")
        }
    }
    xhr.send();
}
loadfunction()