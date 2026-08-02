
const http = require('http')
const url = require('url')

const database = [
    {name:'sumant',age:21,city:'jharkhand',email:'sumant@12'},
    {name:'samir',age:20,city:'bihar',email:'samir@12'}
]

                   http://localhost:3000/daleteuser?email=nitish@122
// const server = http.createServer((req,res)=>{
//     let url = req.url;

//     if(url == '/createuser'){
//         database.push({name:'nitish',age:22,city:'bihar',email:'nitish@122'})
//         res.end('created user data')
//     }

//     else if(url == '/deleteuser'){
//         database.pop()
//         res.end('deletes user data')
//     }
//     else if(url == '/getuser'){
//         res.end(JSON.stringify(database))
//     }
//    else if (url.startsWith('/patch/')) {
//         const email = url.split('/')[2]; // sumant@12

//         for (let i = 0; i < database.length; i++) {
//             if (database[i].email === email) {
//                 database[i].email = 'rohit@123';
//             }
//         }
//         res.end("Patch successful");
//     }
// })


function Createuser(data){    // create
    database.push(data)
}

function Deleteuser(user){
    for(let i=0;i<database.length;i++){
        if(database[i].email == user.email){
            database.splice(i,2);
        }
    }
}

                 // http://localhost:3000/createuser?name='rohit'&age=25&city='bhopal'&email='rohit@123'
const server = http.createServer((req,res)=>{
    const parsed = url.parse(req.url, true);
    const path = parsed.pathname.slice(1);
    console.log(path);

    if(path == 'createuser'){
        Createuser(parsed.query);
        res.end('create user data')
    }

    else if(path == 'deleteuser'){
        Deleteuser(parsed.query);
        res.end('delete user data')
    }

    else if(path == 'getuser'){
        res.end(JSON.stringify(database))
    }

    else if (path.startsWith('patch/')) {

        const email = path.split('/')[1];

        for (let i = 0; i < database.length; i++) {
            if (database[i].email === email) {
                database[i].email = 'rohit@123';
            }
        }
        res.end("Patch successful");
    }
})


server.listen(3000,()=>{
    console.log('i am present')
})