// import json server
const jsonServer = require('json-server')

// create server for mediaplayer application
const MpServer = jsonServer.create()

// create middleware - smooth communication b/w frontend and backend
const middleware = jsonServer.defaults()

// setup routes for json file in server
const route = jsonServer.router('db.json')

//setting port for running server app
const PORT=3000||process.env.PORT

// use created middleware and route
MpServer.use(middleware)
MpServer.use(route)

// check is running or not ()=>{console.log(`medi`); 
MpServer.listen(PORT,()=>{
    console.log(`mediaplayer server is running at the port ${PORT} ad waiting for client request`);
})
