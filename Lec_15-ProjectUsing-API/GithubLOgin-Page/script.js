
async function profile(number) {
    document.getElementById('profiles').innerHTML = "";

    const respose = await fetch(`https://api.github.com/users?per_page=${number}`);
    const data = await respose.json();
    // console.log(data)

    for(let user of data){
        const div = document.createElement('div');
        div.className = "card";

        const img = document.createElement('img');
        img.src = user.avatar_url;
        img.className = "avatar";

        const h3 = document.createElement('h3');
        h3.textContent = user.login
        h3.className = "name";
        
                   // Follower and Following count for fetch

        const details = await fetch(user.url);
        const userData = await details.json();


        // Followers

        const div1 = document.createElement('div');
        div1.className = "stat";

        const follwernum = document.createElement('h4');
        follwernum.textContent = userData.followers;

        const follwer = document.createElement('p');
        follwer.textContent = "Followers";

        div1.append(follwernum, follwer);



        // Following

        const div2 = document.createElement('div');
        div2.className = "stat";

        const followingnum = document.createElement('h4');
        followingnum.textContent = userData.following;

        const follwing = document.createElement('p');
        follwing.textContent = "Following";

        div2.append(followingnum, follwing);



        div.append(img,h3,div1,div2);

        document.getElementById('profiles').append(div);
    
    }
}


const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener("click",(e)=>{

    e.preventDefault();
    if(input.value > 20){

        alert("Maximum 20 users allowed");
        return;
    }
    
    profile(input.value);

});