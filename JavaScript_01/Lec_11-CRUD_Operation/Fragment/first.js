
                // supose you have data then you display ui in unorder list

const fruit = ['Apple','Banana','Papaya','Orange','Blubarry'];

        // select unorder list 
const ul = document.getElementById('first');

const fragment = document.createDocumentFragment(); // fragment

for(const data of fruit){
    const li = document.createElement('li');
    li.textContent = data;

    // ul.append(li)        // this is not good habbit
    // you can use fragment 
    
    fragment.appendChild(li);
}
ul.append(fragment)
ul.remove();    // all element remove the unorder list