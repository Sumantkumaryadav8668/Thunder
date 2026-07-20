
        // What is return async function

// async function order() {
//     return {name: 'sumant',age:21}
// }        

// let asyn = order()
// // console.log(asyn);  // async function return the promise

// .then((ele)=>{
//     console.log(ele);
// })



                /// fetch githud  user data

async function github() {
        try{
                const respose = await fetch(`https://api.github.com/users?per_page=${number}`)
                if(!respose.ok) throw new Error("unable to fetch data")
                const data = await respose.json()
        
                console.log(data);
        }
        catch(error){
                console.log(error)
        }
}                