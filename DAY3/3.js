let getWeather = ()=>{

    let sea_level = document.querySelector("#textid").value;
    let url= "https://api.openweathermap.org/data/2.5/forecast?appid=6a8646aa2a92b9202a570ecaedc37f9c&q=" + sea_level;
   
    
    let xhr= new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.onload = ()=>{
        const outputjson = JSON.parse(xhr.responseText);

        console.log(outputjson);
        domOperationjson(outputjson);

    };

    xhr.send();
};

let domOperationjson = (outputjson)=>
{

console.log(outputjson.main);
const sea_level = outputjson.sea_level;


const parent = document.querySelector("#parent");

const newchild = parent.children[0].cloneNode(true);

newchild.style.display = "flex";

newchild.innerHTML = sea_level;

parent.insertBefore(newchild, parent.firstChild);

document.querySelector("#textid").value = "";
};


