
const pass = document.getElementById('pass');
const h2 =  document.querySelector('h2');
pass.addEventListener('input',()=>{
    let result = pass.value;
    
    if(result.length<8){
        h2.textContent = 'Week';
        h2.style.color =  'brown'
    }

    let capital = false , small = false ,number = false , spacialcar = false;

    for(let i=0;i<result.length;i++){
        let ch = result[i];

        if(ch>='A'&& ch<='Z') capital = true;

        else if(ch>='a'&& ch<='z') small = true;

        else if(ch>='0'&& ch<='9') number = true;

        else spacialcar = true;
    }

    if(capital && small && number && spacialcar){
        h2.textContent = 'Strong';
        h2.style.color =  'green'
    }
})