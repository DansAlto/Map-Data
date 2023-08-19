function CreateObject(name, css_class, appendtype) {
    name.classList.add(css_class);
    appendtype.appendChild(name);
}

//Variables

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

//Objects
CreateObject(ClockPlate, 'clock-plate', document.body);
//Clock Plates Children
CreateObject(bluredbg, 'bluredbg', ClockPlate);
CreateObject(TimeContainer, 'time-cont', ClockPlate);
CreateObject(DateContainer, 'date-cont', ClockPlate);
CreateObject(WeatherContainer, 'weather-cont', ClockPlate);
//Weather Container Children
CreateObject(WeatherIcon, 'weathercon', WeatherContainer);
CreateObject(WeatherReport, 'weather-text', WeatherContainer);
CreateObject(CityName, 'place-name', WeatherContainer);


//Extra Functions

function GetTime() {
    let now = new Date;
    setInterval(() => {
        now = new Date();
        if((now.getMinutes()) <= 9) {
            TimeContainer.textContent = `${now.getHours()}:0${now.getMinutes()}`;
        } else {
            TimeContainer.textContent = `${now.getHours()}:${now.getMinutes()}`;
        }
        console.log();
    }, 1);
    DateContainer.innerText = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
}


fetch('http://api.weatherapi.com/v1/current.json?key=397e739f0a2c4f3a91795336231808&q=Cape Town&aqi=no')
.then((res) => res.json())
.then((data) => {
    WeatherIcon.style.backgroundImage = `url(${data.current.condition.icon})`;
    WeatherReport.innerText = data.current.condition.text;
    CityName.innerHTML = data.location.name;
    GetTime();
});

let waitingForkey = false;
let clockIsOpen = false;

window.addEventListener(`keypress`, (e) => {
    let key = e.key;

    if(waitingForkey) {
        return;
    }

    if(key === 'm') {
        waitingForkey = true;

        if(clockIsOpen) {
            clockIsOpen = false;
            ClockPlate.style.opacity = 0;
            ClockPlate.style.transform = "translateX(60vh)";
        } else if(!clockIsOpen) {
            clockIsOpen = true;
            ClockPlate.style.opacity = 1;
            ClockPlate.style.transform = "translateX(0vh)";
        }

        setTimeout(() => {
            waitingForkey = false;
        }, 500);


    }
});
