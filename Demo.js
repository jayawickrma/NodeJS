import http from 'http'
import fs from 'fs'

const server =http.createServer((req,res)=>{
    console.log(req.url,req.method)
    res.getHeader('content-type','text/html')
    res.write('<html><head><h1>hello world</h1></head></html>')
});


server.listen(3000)