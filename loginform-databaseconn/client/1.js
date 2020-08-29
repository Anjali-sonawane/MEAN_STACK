let registerUser = ()=>{
    const id = document.querySelector("#id").value;
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;

    if(username === ""){
        document.querySelector("#username").getElementsByClassName.bordercolor = "red";
        return;
    }

    let url = `http://localhost:3000/adduser?id=${id}&username=${username}&email=${email}`;
    
    let xhr = new XMLHttpRequest();
    xhr.open("GET",url);
    xhr.onload=()=>{
        const res = xhr.responseText;
        console.log(res);

        document.querySelector("#id").value="";
        document.querySelector("#username").value="";
        document.querySelector("#email").value="";
    };
    xhr.send();
};