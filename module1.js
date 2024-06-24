let hello = ()=>{
    console.log("hello from module 1")
}

let ahello = (name)=>{
    console.log("hello " + name)
}

module.exports = {hello, ahello}


