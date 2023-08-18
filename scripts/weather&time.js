let CreateRoot = document.querySelector(':root');
let CreateRootStyle = getComputedStyle(CreateRoot);

let ClockPlate = document.createElement(`div`);

let bluredbg = document.createElement(`div`);
let TimeContainer = document.createElement(`div`);
let DateContainer = document.createElement(`div`);
let WeatherContainer = document.createElement(`div`);

let WeatherIcon = document.createElement(`div`);
let WeatherReport = document.createElement(`div`);
let CityName = document.createElement(`div`);

function CreateObject(name, backgroundcolor, width, height, zindex, right, left, top, bottom, position, appendtype) {
    name.style.backgroundColor = backgroundcolor;
    name.style.width = width;
    name.style.height = height;
    name.style.zIndex = zindex;

    if (right != undefined) {
        name.style.right = right;
    }

    if (left != undefined) {
        name.style.left = left;
    }

    if (top != undefined) {
        name.style.top = top;
    }

    if (bottom != undefined) {
        name.style.bottom = bottom;
    }

    name.style.position = position;
    appendtype.appendChild(name);
}


//Objects
CreateObject(ClockPlate, 'transparent', '60vh', '35vh', 11, '0px', undefined, '0px', undefined, 'absolute', document.body);
//Clock Plates Children
CreateObject(bluredbg, '#7070705b', '100%', '100%', 1, undefined, undefined, undefined, undefined, 'absolute', ClockPlate);
CreateObject(TimeContainer, 'transparent', '32vh', '15vh', 1, undefined, '5vh', '5vh', undefined, 'absolute', ClockPlate);
CreateObject(DateContainer, 'transparent', '32vh', '3vh', 1, undefined, '5vh', '20vh', undefined, 'absolute', ClockPlate);
CreateObject(WeatherContainer, 'transparent', '15vh', '15vh', 1, '8vh', undefined, '8vh', undefined, 'absolute', ClockPlate)
//Weather Container Children
CreateObject(WeatherIcon, 'transparent', '8vh', '8vh', 1, undefined, undefined, undefined, undefined, 'absolute', WeatherContainer);
CreateObject(WeatherReport, 'transparent', '15vh', '3.5vh', 1, undefined, undefined, '7vh', undefined, 'absolute', WeatherContainer);
CreateObject(CityName, 'transparent', '15vh', '3.5vh', 1, undefined, undefined, '10vh', undefined, 'absolute', WeatherContainer);

//Extra Properties
bluredbg.style.filter = "blur(8px)";
bluredbg.style.borderBottom = "0.5vh solid #70707094";
bluredbg.style.borderLeft = "0.5vh solid #70707094";

TimeContainer.style.fontFamily = "cursive";
TimeContainer.style.color = CreateRootStyle.getPropertyValue('--body');
TimeContainer.style.fontSize = "10vh";
TimeContainer.style.textAlign = "center";

DateContainer.style.fontFamily = "cursive";
DateContainer.style.color = CreateRootStyle.getPropertyValue('--body');
DateContainer.style.fontSize = "2.8vh";
DateContainer.style.lineHeight = "-1px"
DateContainer.style.textAlign = "center";

WeatherContainer.style.fontSize = "2vh";
WeatherContainer.style.textAlign = "center";
WeatherContainer.style.fontFamily = "cursive";
WeatherContainer.style.color = CreateRootStyle.getPropertyValue('--body');

WeatherIcon.style.backgroundRepeat = "no-repeat";
WeatherIcon.style.backgroundSize = "cover";


//Extra Functions

function GetTime() {
    let now = new Date;
    setInterval(() => {
        now = new Date();
        TimeContainer.textContent = `${now.getHours()}:${now.getMinutes()}`;
    }, 1);

    DateContainer.innerText = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;

}


fetch('http://api.weatherapi.com/v1/current.json?key=397e739f0a2c4f3a91795336231808&q=Cape Town&aqi=no')
.then((res) => res.json())
.then((data) => {
    WeatherIcon.style.backgroundImage = `url(${data.current.condition.icon})`;
    WeatherReport.innerText = data.current.condition.text;
    CityName.innerHTML = data.location.name;
});

GetTime();