//creating a function
function swap(str){
    let str1 = str.split('');//creating a variable
    let arr=[];//creating a variable
    str1.map(function(char){
    if(char === char.toLowerCase()){//change lowercase to uppercase
    arr.push(char.toUpperCase())
    }else{
    arr.push(char.toLowerCase())//change uppercase to lowercase
    }
    })
    return arr.join('')//return
    }
    //input & output
    console.log(swap('The Quick Brown Fox'))