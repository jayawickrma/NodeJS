import http from 'http'
import fs from 'fs'
import { routes } from './itemController.js';
import express from 'express'
import { log } from 'console';


const app=express();
app.use((req,res,next)=>{
    console.log("MidleWara 1");
    res.send('');

});

app.use((req,res,next)=>{
    console.log("MidddleWare 2");
    res.send('')
})


app.listen(3000,()=>{
    console.log("the server is started...server port :3000")
});