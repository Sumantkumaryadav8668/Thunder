           // how to solve this url formate - http://localhost:4000/add?num1=10&num2=20

     //add num1 and num2 
     
const http = require('http')
const url = require('url')

const server = http.createServer((req,res)=>{
    
    const path = url.parse(req.url,true)

    const operator = path.pathname.slice(1);
    const num1 = Number(path.query.num1);
    const num2 = Number(path.query.num2)

    if(operator == 'add') return res.end(JSON.stringify(num1+num2));

    else if(operator == 'sub') return res.end(JSON.stringify(num1-num2));

    else if(operator == 'mul') return res.end(JSON.stringify(num1*num2));

    else if(operator == 'div') return res.end(JSON.stringify(num1/num2));

    else res.end('invalied operator');

})


server.listen(4000,()=>{
    console.log('i am port number 4000')
})