//import json server

const jsonServer=require('json-server')

//create  a server for json file

const mediaPlayerServer=jsonServer.create()

//set up a path for json file

const router=jsonServer.router('db.json')

// return a middleware used by json server

const middlewares=jsonServer.defaults()

//set up a port for json server

const port=4000 || process.env.port

//use  middlwares and routers

mediaPlayerServer.use(middlewares)
mediaPlayerServer.use(router)

//to listen server for resolving requests from server

mediaPlayerServer.listen(port,()=>{
    console.log(`Media Player Server listening at port ${port},and waiting for the client request !!!`);
})
