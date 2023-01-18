// function keepDropDown() {
//     document.getElementById("dropDownMenu").style.display = "block";
// }

// function showDropDown() {
//     var opacity = 0;
//     var fade = document.getElementById("dropDownMenu");
//     var intervalID1 = setInterval(function() {
        
//         if (opacity < 1) {
//             opacity = opacity + 0.1
//             fade.style.opacity = opacity;
//             document.getElementById("dropDownMenu").style.display = "block";
            
//         } else {
//             clearInterval(intervalID1);
//         }
//     }, 30);
// }

// function closeDropDown() {
//     document.getElementById("dropDownMenu").style.display = "none"
// }



function driverStats(driver) {
    var driverInfo = document.getElementById("driver-info");
    var showInfo = document.getElementById("blured");
    console.log(`this driver is number ${driver}`)
    const object = allDrivers.find(obj => obj.id === driver)
    console.log(object)
    window.location.href = object.page;


}


function showDrivers() {

var dropDownItems = document.getElementsByClassName("dropDownItems")[0];

let output = "";
allDrivers.forEach((driver, index) => {
    output += `<li class="dropDownList" onclick="driverStats(${driver.id})"><a>${driver.driver_name}</a></li>`
})

dropDownItems.innerHTML = output;
console.log(dropDownItems)
}


function showAllDrivers() {
    const driversCards = document.getElementById("drivers-cards");
    let output = "";

    allDrivers.forEach((driver, index) => {
        output += `<div onclick="driverStats(${driver.id});" onmouseleave="this.style.borderColor = 'black'" onmouseover="this.style.borderColor = '${driver.teamColor}' "class="driver-card">
        <p class="first-name">${driver.first_name}</p>
        <img src="${driver.Country}" class="country"></img>
        <p class="last-name">${driver.last_name}</p>
        <p class="driver-number">${driver.number}</p>
        <p class="team">${driver.team}</p>
        <img class="driver-photo" src="${driver.photo}"></img>
        </div>`

    })
    driversCards.innerHTML = output;
    
}



window.onload = function() {
showDrivers(),
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
        photo: "https://cdn-4.motorsport.com/images/mgl/0a9neZP0/s8/sergio-perez-red-bull-racing-1.jpg",
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
        photo: "https://cdn-9.motorsport.com/images/mgl/24vA3r46/s8/max-verstappen-red-bull-racing-1.jpg",
        page: "./drivers/MaxVerstappen.html"
    },
    {
        id: 6,
        driver_name: "Charles Leclerc",
        first_name: "Charles",
        last_name: "Leclerc",
        Country: "./flags/EnglandFlag.gif",
        number: 16,
        teamColor: "rgb(177, 22, 22)",
        team: "Ferrari",
        photo:"https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/5498.png&w=350&h=254",
        page: "./drivers/CharlesLeclerc.html"
    },
    {
        id: 13,
        driver_name: "Carlos Sainz",
        first_name: "Carlos",
        last_name: "Sainz",
        Country: "./flags/SpainFlag.gif",
        number: 55,
        teamColor: "rgb(177, 22, 22)",
        team: "Ferrari",
        photo: "https://cdn-9.motorsport.com/images/mgl/YXRnk570/s800/carlos-sainz-jr-ferrari-1.jpg",
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
        photo: "https://cdn-1.motorsport.com/images/mgl/0mb95oa2/s800/lewis-hamilton-mercedes-1.jpg"
    },
    {
        id: 12,
        driver_name: "George Russel",
        first_name: "George",
        last_name: "Russel",
        Country: "./flags/EnglandFlag.gif",
        number: 63,
        teamColor: "rgb(119, 235, 196)",
        team: "Mercedes",
        photo: "https://cdn-5.motorsport.com/images/mgl/6l9yjoj0/s8/george-russell-mercedes-1.jpg"
    },
    {
        id: 2,
        driver_name: "Fernando Alonso",
        first_name: "Fernando",
        last_name: "Alonso",
        Country: "./flags/SpainFlag.gif",
        number: 14,
        teamColor: "rgb(94, 158, 255)",
        team: "Alpine",
        photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/348.png"
    },
    {
        id: 4,
        driver_name: "Peirre Gasly",
        first_name: "Peirre",
        last_name: "Gasly",
        Country: "./flags/ItalySmallFlag.jpg",
        number: 10,
        teamColor: "rgb(94, 158, 255)",
        team: "Alpine",
        photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/5501.png"
    },
    // {
    //     id: 1,
    //     driver_name: "Alexander Albon",
    //     first_name: "Alexander",
    //     last_name: "Albon",
    //     Country: "./flags/JapanSmallFlag.jpg",
    //     number: 23,
    //     teamColor: "rgb(190, 216, 255)",
    //     team: "Williams",
    //     photo: "https://thesportsgrail.com/wp-content/uploads/2021/09/alex-albon-png-logo-stock-2@2x.jpg"
    // },
    
]