const http = require("http")
const port = 9100

//creating the server//
const server = http.createServer((req, res) => {
    let path = req.url
    if (path === "/" || path === "/home"){
        res.end('welcome to home')
    }else if (path === '/about'){
        res.end("welcome to about page")
    }else if (path === "/home"){
        res.end("welcome to the home page")
    }else if (path === "/testimonial"){
        res.end('welcome to the testimonial page')
    }else if (path === "/contact"){
        res.end("welcome to the contact page")
    }else if (path === "/project"){
        res.end("welcome to the project page")
    }else{
        res.end("error 404 page not found")
    }
    
    

})

server.listen(port, () => {
    console.log('start server')
})