
const text = document.getElementById('area');
const string = document.getElementById('stringcount');
const word = document.getElementById('wordcount');

text.addEventListener('input',()=>{
    let result = text.value.trim();
    
    string.textContent = `Stringcount: ${result.length}`;
     
    let arr = result.split(" ");
    if(result.length == 0){
        word.textContent = `Wordcount: 0`;
    }
    else word.textContent = `Wordcount: ${arr.length}`;
})