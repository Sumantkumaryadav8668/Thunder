
const board = document.getElementById('board');
const player = document.getElementById('player');


const arr = ['','','','','','','','','','']
let winner = false;
let count = 0;
let flag = true;

board.addEventListener('click',(obj)=>{
    const value = obj.target;
    const index = obj.target.id;
    // console.log(index);
    // console.log(value);
    if(arr[index] != '' || winner || count == 9) return;

    
    if(flag){
        obj.target.textContent = 'X';
        player.textContent = "Player O Turn";
        arr[index] = 'X'
        // count++;
    } 
    else{
        obj.target.textContent = 'O';
        player.textContent = "Player X Turn";
        arr[index] = 'O'
        // count++
    }
    count++;
    flag = !flag;

    check();
    // console.log(count);
   
})


function check(){
    if(
    (arr[0]=='X' && arr[1]=='X' && arr[2]=='X') || 
    (arr[3]=='X' && arr[4]=='X' && arr[5]=='X') || 
    (arr[6]=='X' && arr[7]=='X' && arr[8]=='X') || 
    (arr[0]=='X' && arr[3]=='X' && arr[6]=='X') || 
    (arr[1]=='X' && arr[4]=='X' && arr[7]=='X') || 
    (arr[2]=='X' && arr[5]=='X' && arr[8]=='X') || 
    (arr[0]=='X' && arr[4]=='X' && arr[8]=='X') || 
    (arr[2]=='X' && arr[4]=='X' && arr[6]=='X')) { 
        player.textContent = "Player X Won🏆🥇";
        celebrate();
        winner = true;
    }
    else if(
    (arr[0]=='O' && arr[1]=='O' && arr[2]=='O') ||
    (arr[3]=='O' && arr[4]=='O' && arr[5]=='O') ||
    (arr[6]=='O' && arr[7]=='O' && arr[8]=='O') ||
    (arr[0]=='O' && arr[3]=='O' && arr[6]=='O') ||
    (arr[1]=='O' && arr[4]=='O' && arr[7]=='O') ||
    (arr[2]=='O' && arr[5]=='O' && arr[8]=='O') ||
    (arr[0]=='O' && arr[4]=='O' && arr[8]=='O') ||
    (arr[2]=='O' && arr[4]=='O' && arr[6]=='O')){ 
        player.textContent = "Player O Won🏆🥇";
        celebrate();
        winner = true;
   }
   else if(count==9){
        player.textContent = "Game draw Restart game";
   }
}
            // celebration

function celebrate() {
    const duration = 3000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {

        // left side
        confetti({
            particleCount: 20,
            spread: 70,
            origin: { x: 0, y: Math.random() }
        });

        // right side
        confetti({
            particleCount: 20,
            spread: 70,
            origin: { x: 1, y: Math.random() }
        });

        // top side
        confetti({
            particleCount: 20,
            spread: 120,
            origin: { x: Math.random(), y: 0 }
        });

        if (Date.now() > end) {
            clearInterval(interval);
        }

    }, 300);
}

               // reset

document.getElementById('restart').addEventListener('click',()=>{
    for(let i=0;i<9;i++){
        document.getElementById(i).innerText = null
        arr[i] ="";      

    }
    count = 0;
    winner = false;
    flag = !flag;

    if(flag){
        player.textContent = "Player X Turn";
    }
    else{
        player.textContent = "Player O Turn";
    }
})