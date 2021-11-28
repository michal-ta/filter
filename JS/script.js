const result=document.querySelector(".user-list");
const input= document.querySelector(".input-filter");
const userList=[];

getData();

input.addEventListener("input" ,function(e){
    dataFilter(e.target.value);
});

async function getData(){
 const allUsers= await fetch("https://randomuser.me/api?results=27");
    
    var data = await allUsers.json();
    console.log(data);
    
    // cistenie HMTL //
    result.innerHTML="";

    data.results.forEach(user => {
        const li = document.createElement("li");
        li.innerHTML = `
         <img src="${user.picture.large}" alt="${user.name.first}">
         <div class="user-info">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p> ${user.location.city}, ${user.location.country}</p>
         </div>
        `
        result.appendChild(li);

        userList.push(li);
    });
        
    
};

function dataFilter(inputText){
    userList.forEach(newUser =>{
        if(newUser.innerHTML.toLowerCase().includes(inputText.toLowerCase())){
            newUser.classList.remove("hide");
        }else{
            newUser.classList.add("hide");
        }
    })
}