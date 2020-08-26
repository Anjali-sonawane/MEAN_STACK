let getWeather = ()=>{

    let cityName = document.querySelector("#textid").value || "pune";
    let url= "https://api.openweathermap.org/data/2.5/weather?appid=6a8646aa2a92b9202a570ecaedc37f9c&units=metric&q=" + cityName;
   
    let url = "https://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml"

    "https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=6a8646aa2a92b9202a570ecaedc37f9c"
    
    //"https://api.openweathermap.org/data/2.5/weather?appid=6a8646aa2a92b9202a570ecaedc37f9c&units=metric&q="
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
const name = outputjson.name;
const maxTemp = outputjson.main.temp_max;

const parent = document.querySelector("#parent");

const newchild = parent.children[0].cloneNode(true);

newchild.style.display = "flex";

newchild.innerHTML = name + " " + maxTemp;

parent.insertBefore(newchild, parent.firstChild);

document.querySelector("#textid").value = "";
};


