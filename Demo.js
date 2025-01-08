import http from 'http'
import fs from 'fs'

const server =http.createServer((req,res)=>{
    if(req.url == ""){
        res.write('<html><head><h1>Welcome to the System</h1></head></html>')
        res.end();
    }
    if(req.url == "/"){
        res.write('<html><head><h1>Dashboard</h1></head></html>')
        res.end();
    }if(req.url == "/add"){
        res.write('<html><head><h1>Add form</h1></head></html>')
        res.end();
    }
});


server.listen(3000);