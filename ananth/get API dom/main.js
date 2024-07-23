let getdata = document.querySelector("#get-data");
let getbtn = document.querySelector("#get-btn");

getbtn.addEventListener("click", getTextFile);
function getTextFile() {
  fetch("data.txt")
    .then((res) => res.text())
    .then((data) => {
      getdata.innerHTML = data;
    });
}


// ---------------------------------------------------------------------

let getjson=document.querySelector("#get-json");
let josnbtn=document.querySelector("#get-btn");

josnbtn.addEventListener('click',getText());

function getText(){
    fetch("ananth.json")
    .then((res)=>res.json())
    .then((users) =>{
        let data="<ul>";
       users.forEach((user)=> {
        data += `<li>${user.id} </li>
                                      <li>${user.title} </li>`
        
       });
        data+="</ul>"
        getjson.innerHTML=data;
    })
}




const get=document.querySelector("#get-api")
const api=document.querySelector("#api-btn")

api.addEventListener("click",getApi());

async function getApi(){
    const response=await fetch("https:jsonplaceholder.typicode.com/posts");
    const jsonData=await response.json();

    let output="";
    jsonData.forEach((post)=>{
        output+=`<div class="post">
        <h4>${post.id}</h4>
        <p>${post.body}
        </div>`;
    });
    get.innerHTML=output;
}







