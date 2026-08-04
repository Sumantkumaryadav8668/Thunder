                // how to create user

import http from 'http';

let database = [
    {name:'sumant',age:21,amount:526,email:'sumant@123'},
    {name:'rohit',age:22,amount:635,email:'rohit@123'},
    {name:'satish',age:19,amount:2321,email:'satish@123'}
]

const server = http.createServer((req,res)=>{
                    // wait karo jab tak pura data user bhej na de

    if(req.method == 'POST' && req.url == '/user'){     // create data in database
        let body = "";
        req.on("data",(chunk)=>{     // is line me data chunk ke form me aa raha hai
            body+= chunk;
            // store the data in secondary storage
        })  

        req.on("end",()=>{     // jab pura data aa jata hai to ye end kar deta hai
                // write code where
            const user = JSON.parse(body);       // is line se JSON object ke formate aa jayega
            database.push(user);   
            res.end('user data created successfully') 
        })
    }

    else if(req.method == 'GET' && req.url == '/user'){      // read data in the database
        res.end(JSON.stringify(database,null,2))
    }

    else if(req.method == 'PATCH' && req.url == '/user'){    // update data in database
        let body = "";
        req.on("data",(chunk)=>{     // is line me data chunk ke form me aa raha hai
            body+= chunk;
            // store the data in secondary storage
        })  

        req.on("end",()=>{     // jab pura data aa jata hai to ye end kar deta hai
                // write code where
            const user = JSON.parse(body)   // is line se JSON object ke formate aa jayega 
            const finddata = database.find((data)=>data.email == user.email)
            Object.assign(finddata,user)  

            res.end('user data uddated successfully') 
        })
    }

    else if(req.method == 'DELETE' && req.url == '/user'){    // delete data in the database
        let body = "";
        req.on("data",(chunk)=>{     // is line me data chunk ke form me aa raha hai
            body+= chunk;
            // store the data in secondary storage
        })  

        req.on("end",()=>{     // jab pura data aa jata hai to ye end kar deta hai
                // write code where
            const user = JSON.parse(body)   // is line se JSON object ke formate aa jayega 
            const index = database.findIndex((data)=>data.email == user.email)   // iterate in the database nnd return the index

            if (index !== -1) {
                database.splice(index, 1);
                res.end("User deleted successfully");
            } else {
                res.end("User not found");
            } 
        })
    }

})


server.listen(3000,()=>{
    console.log('i am listening port 3000')
})