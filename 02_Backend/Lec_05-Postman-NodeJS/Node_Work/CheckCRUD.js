
import http from 'http'

const server = http.createServer((req,res)=>{
    if(req.method == 'GET' && req.url == '/user')
        res.end('i am get operation ')

    else if(req.method == 'POST' && req.url == '/user')
        res.end('i am post operation ')

    else if(req.method == 'PUT' && req.url == '/user')
        res.end('i am put operation ')

    else if(req.method == 'PATCH' && req.url == '/user')
        res.end('i am patch operation ')

    else if(req.method == 'DELETE' && req.url == '/user')
        res.end('i am delete operation ')
})


server.listen(5000,()=>{
    console.log('i am listening port number 5000')
})