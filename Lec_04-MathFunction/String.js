                       // why do use String

    // creating string 
// const str1 = 'hello sumant';   // not write ngain next text in next line that is error
// const str2 = "how are you ?"    // not write ngain next text in next line that is error
// const str3 = `i am fine and you
// main bhi thik hu`;   // write ngain next text in next line that is not error     


// console.log(str1)
// console.log(str2)
// console.log(str3)
// console.log(str1.length)

               // create a string include the number
// const num = 21
// const str = `hiii sumant your sge is ${num}`
// console.log(str)        


                           //  using inbuild function
// const str = `Hello Sumant Kaise ho app`;

// console.log(str.toLowerCase())
// console.log(str.toUpperCase())
// console.log(str.toLocaleLowerCase())
// console.log(str.toLocaleUpperCase())
// console.log(str.toWellFormed())
// console.log(str.toString())

// console.log(str.indexOf('a'))
// console.log(str.lastIndexOf('a'))
// console.log(str.slice(6,12))   // yah diye huye index se bich ke value ko lata hai
// console.log(str.slice(1))
// console.log(str.split(' '))   // yah divide karne ka kam karta hai
// console.log(str.replace('Sumant','Yadav'))
// console.log(str.replaceAll('a','e'))

// console.log(str.includes('hoa'))  // yha string me check karta hai yadi hai to true otherwise false
// console.log(str.substring(1,4))



                             // .trim() finction
// const str = '    Hello Sumant     ';
// console.log(str.trim())          // yah space ko remove karta hai starting and ending ka
// console.log(str.trimEnd())
// console.log(str.trimStart())




                           // Template Litrals(ES6) 
//             // old way               
// const name = 'sumant kumar';
// const age = 21;
// const result = 'Hello, my name is ' + name + ' and i am ' + age + ' year old'

// console.log(result)

//                // new way

// const result1 = `Hello, my name is ${name} and i am ${age} year old`

// console.log(result1)



                             // Multi line String 
const date = 15;                             
const result = `
           <div>
                <p>
                       hello sir ${date}
                /<p>
           </div>
`;
console.log(result)                             