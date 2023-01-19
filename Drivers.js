// Created by Lukas Stoyanovski 


function keepDropDown() {
    document.getElementById("dropDownMenu").style.display = "block";
}

function showDropDown() {
    var opacity = 0;
    var fade = document.getElementById("dropDownMenu");
    var intervalID1 = setInterval(function() {
        
        if (opacity < 1) {
            opacity = opacity + 0.1
            fade.style.opacity = opacity;
            document.getElementById("dropDownMenu").style.display = "block";
            
        } else {
            clearInterval(intervalID1);
        }
    }, 30);
}

function closeDropDown() {
    document.getElementById("dropDownMenu").style.display = "none"
}



function driverStats(driver) {
    var driverInfo = document.getElementById("driver-info");
    var showInfo = document.getElementById("blured");
    console.log(`this driver is number ${driver}`)
    const object = allDrivers.find(obj => obj.id === driver)
    console.log(object)
    window.location.href = object.page;
}


// function showDrivers() {

// var dropDownItems = document.getElementsByClassName("dropDownItems")[0];

// let output = "";
// allDrivers.forEach((driver, index) => {
//     output += `<li class="dropDownList" onclick="driverStats(${driver.id})"><a>${driver.driver_name}</a></li>`
// })

// dropDownItems.innerHTML = output;
// console.log(dropDownItems)
// }


function showAllDrivers() {
    const driversCards = document.getElementById("drivers-cards");
    let output = "";

    allDrivers.forEach((driver, index) => {
        output += `<div onclick="driverStats(${driver.id});" onmouseleave="this.style.borderColor = 'black'" onmouseover="this.style.borderColor = '${driver.teamColor}' "class="driver-card">
        <p class="first-name">${driver.first_name}</p>
        <img src="${driver.Country}" class="country"></img>
        <p class="last-name">${driver.last_name}</p>
        <hr>
        <p class="driver-number">${driver.number}</p>
        <p class="team">${driver.team}</p>
        <img class="driver-photo" src="${driver.photo}"></img>
        </div>`

    })
    driversCards.innerHTML = output;
    
}



window.onload = function() {
// showDrivers(),
showAllDrivers()
}

var allDrivers = [
    {
        id: 1,
        driver_name: "Sergio Perez",
        first_name: "Sergio",
        last_name: "Perez",
        Country: "./flags/CanadaSmallFlag.jpg",
        number: 11,
        team: "RedBull Racing",
        teamColor: "rgb(34, 54, 168)",
        photo: "https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col-retina/image.png",
        page: "./drivers/SergioPerez.html"
    },
    {
        id: 2,
        driver_name: "Max Verstappen",
        first_name: "Max",
        last_name: "Verstappen",
        Country: "./flags/BelgiumSmallFlag.jpg",
        number: 1,
        team: "RedBull Racing",
        teamColor: "rgb(34, 54, 168)",
        photo: "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col-retina/image.png",
        page: "./drivers/MaxVerstappen.html"
    },
    {
        id: 3,
        driver_name: "Charles Leclerc",
        first_name: "Charles",
        last_name: "Leclerc",
        Country: "./flags/EnglandFlag.gif",
        number: 16,
        teamColor: "rgb(255, 0, 0)",
        team: "Ferrari",
        photo:"https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col-retina/image.png",
        page: "./drivers/CharlesLeclerc.html"
    },
    {
        id: 4,
        driver_name: "Carlos Sainz",
        first_name: "Carlos",
        last_name: "Sainz",
        Country: "./flags/SpainFlag.gif",
        number: 55,
        teamColor: "rgb(255, 0, 0)",
        team: "Ferrari",
        photo: "https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col-retina/image.png",
        page: "./drivers/CarlosSainz.html"
    },
    {
        id: 5,
        driver_name: "Lewis Hamilton",
        first_name: "Lewis",
        last_name: "Hamilton",
        Country: "./flags/EnglandFlag.gif",
        number: 44,
        teamColor: "rgb(119, 235, 196)",
        team: "Mercedes",
        photo: "https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col-retina/image.png",
        page: "./drivers/LewisHamilton.html"
    },
    {
        id: 6,
        driver_name: "George Russel",
        first_name: "George",
        last_name: "Russel",
        Country: "./flags/EnglandFlag.gif",
        number: 63,
        teamColor: "rgb(119, 235, 196)",
        team: "Mercedes",
        photo: "https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col-retina/image.png",
        page: "./drivers/GeorgeRussel.html"
    },
    {
        id: 7,
        driver_name: "Esteban Ocon",
        first_name: "Esteban",
        last_name: "Ocon",
        Country: "./flags/SpainFlag.gif",
        number: 31,
        teamColor: "rgb(94, 158, 255)",
        team: "Alpine",
        photo: "https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/2col-retina/image.png",
        page: "./drivers/EstebanOcon.html"
    },
    {
        id: 8,
        driver_name: "Pierre Gasly",
        first_name: "Pierre",
        last_name: "Gasly",
        Country: "./flags/ItalySmallFlag.jpg",
        number: 10,
        teamColor: "rgb(94, 158, 255)",
        team: "Alpine",
        photo: "https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/2col-retina/image.png",
        page: "./drivers/PierreGasly.html"
    },
    {
        id: 9,
        driver_name: "Lando Norris",
        first_name: "Lando",
        last_name: "Norris",
        Country: "./flags/EnglandFlag.gif",
        number: 4,
        teamColor: "rgb(240, 127, 52)",
        team: "Mclaren",
        photo: "https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col-retina/image.png",
        page: "./drivers/LandoNorris.html"
    },
    {
        id: 10,
        driver_name: "Valteri Bottas",
        first_name: "Valteri",
        last_name: "Bottas",
        Country: "./flags/BelgiumSmallFlag.jpg",
        number: 77,
        teamColor: "rgb(150, 2, 2)",
        team: "Alpha Romeo",
        photo: "https://www.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/2col-retina/image.png",
        page: "./drivers/ValteriBottas.html"
    },
    {
        id: 11,
        driver_name: "Zhou Guanyu",
        first_name: "Zhou",
        last_name: "Guanyu",
        Country: "./flags/JapanSmallFlag.jpg",
        number: 24,
        teamColor: "rgb(150, 2, 2)",
        team: "Alpha Romeo",
        photo: "https://www.formula1.com/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png.transform/2col-retina/image.png",
        page: "./drivers/ZhouGuanyu.html"
    },
    {
        id: 12,
        driver_name: "Alexander Albon",
        first_name: "Alexander",
        last_name: "Albon",
        Country: "./flags/PolandSmallFlag.jpg",
        number: 23,
        teamColor: "rgb(0, 225, 255)",
        team: "Williams",
        photo: "https://www.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/2col-retina/image.png",
        page: "./drivers/AlexanderAlbon.html"
    },
    {
        id: 13,
        driver_name: "Lance Stroll",
        first_name: "Lance",
        last_name: "Stroll",
        Country: "./flags/CanadaSmallFlag.jpg",
        number: 18,
        teamColor: "rgb(0, 97, 84)",
        team: "Aston Martin",
        photo: "https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/2col-retina/image.png",
        page: "./drivers/LanceStroll.html"
    },
    {
        id: 14,
        driver_name: "Fernando Alonso",
        first_name: "Fernando",
        last_name: "Alonso",
        Country: "./flags/SpainFlag.gif",
        number: 14,
        teamColor: "rgb(0, 97, 84)",
        team: "Aston Martin",
        photo: "https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col-retina/image.png",
        page: "./drivers/FernandoAlonso.html"
    },
    {
        id: 15,
        driver_name: "Kevin Magnussen",
        first_name: "Kevin",
        last_name: "Magnussen",
        Country: "./flags/BelgiumSmallFlag.jpg",
        number: 20,
        teamColor: "gray",
        team: "Faas F1 Team",
        photo: "https://www.formula1.com/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png.transform/2col-retina/image.png",
        page: "./drivers/KevinMagnussen.html"
    },
    {
        id: 16,
        driver_name: "Yuki Tsunoda",
        first_name: "Yuki",
        last_name: "Tsunoda",
        Country: "./flags/JapanSmallFlag.jpg",
        number: 22,
        teamColor: "rgb(0, 72, 105)",
        team: "AlphaTauri",
        photo: "https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/2col-retina/image.png",
        page: "./drivers/YukiTsunoda.html"
    },
    
    
]