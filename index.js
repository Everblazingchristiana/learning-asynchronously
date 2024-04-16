const fs = require("fs")
const content = fs.readFileSync("./Files/idris.txt", "utf-8")
console.log(content)


const christiana = fs.readFileSync("./Files/content.txt", "utf-8")
console.log(christiana)

const junior = "he is my husband"
fs.writeFileSync("./Files/junior.txt", junior)

const femi = "he is my classmate"
fs.writeFileSync("./Files/femi.txt", femi)

//Reading Files Asynchronously//
fs.readFile("./Files/gift.txt", "utf-8", (error, data) => {
    if(error){
        console.log(error)
    } else {
        console.log(data)
    }
})

fs.readFile("./Files/john.txt", "utf-8", (error, data) => {
    if(error){
        console.log(error)
    } else {
        console.log(data)
    }
})

fs.readFile("./Files/blessing.txt", "utf-8", (error, data) => {
    if(error){
        console.log(error)
    } else {
        console.log(data)
    }
})

fs.readFile("./Files/blessing.txt", "utf-8", (error,data)=> {
    if(error){
        console.log(error)
    } else {
        console.log(data)
    }
})


