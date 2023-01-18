// function showDropDown() {
//     document.getElementById("dropDownMenu").style.display = "block";
// }
var opacity = 0;
var fade = document.getElementById("dropDownMenu");

function showDropDown() {
    var intervalID1 = setInterval(function() {
        
        if (opacity < 1) {
            opacity = opacity + 0.1
            fade.style.opacity = opacity;
            document.getElementById("dropDownMenu").style.display = "block";
        } else {
            clearInterval(intervalID1);
        }
    }, 20);
}

function closeDropDown() {

    var intervalID2 = setInterval(function() {
        
        if (opacity >= 1) {
            opacity = opacity - 0.1;    
            fade.style.opacity = opacity;
            
        } else {
            clearInterval(intervalID2);
        }
        
    }, 50);
}

function showDrivers() {

var dropDownItems = document.getElementsByClassName("dropDownItems")[0];

allDrivers.forEach((driver, index) => {
    let item = document.createElement("li");
    item.className = "dropDownList";
    let itemLink = document.createElement("a");
    let itemText = document.createTextNode(driver.driver_name)
    item.appendChild(itemLink);
    itemLink.appendChild(itemText);
    dropDownItems.appendChild(item);



})
console.log(dropDownItems)
}

function showAllDrivers() {

    

    for (let i = 0; i < allDrivers.length; i++) {
        const driversCards = document.getElementById("drivers-cards");
        const div = document.createElement('div');
        div.className = "driver-card"
        const driverFirstName = document.createElement('p');
        driverFirstName.className = "first-name"
        const driverLastName = document.createElement('p');
        driverLastName.className = "last-name"
        const driverCountry = document.createElement('p');
        driverCountry.className = "country"
        const driverNumber = document.createElement('p');
        driverNumber.className = "driver-number"
        const driverTeam = document.createElement('p');
        driverTeam.className = "team"
        driverFirstName.innerHTML = allDrivers[i].first_name   
        driverLastName.innerHTML = allDrivers[i].last_name       
        driverCountry.innerHTML = allDrivers[i].Country       
        driverNumber.innerHTML = allDrivers[i].number       
        driverTeam.innerHTML = allDrivers[i].team   
        driversCards.appendChild(div);
        div.appendChild(driverFirstName)
        div.appendChild(driverLastName)
        div.appendChild(driverCountry)
        div.appendChild(driverNumber)
        div.appendChild(driverTeam)
    }
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
        Country: "Mexico",
        number: 11,
        team: "RedBull Racing"
    },
    {
        id: 2,
        driver_name: "Max Verstappen",
        first_name: "Max",
        last_name: "Verstappen",
        Country: "Netherlands",
        number: 1,
        team: "RedBull Racing"
    },
    {
        id: 6,
        driver_name: "Charles Leclerc",
        first_name: "Charles",
        last_name: "Leclerc",
        Country: "Monaco",
        number: 16,
        team: "Ferrari"
    },
    {
        id: 13,
        driver_name: "Carlos Sainz",
        first_name: "Carlos",
        last_name: "Sainz",
        Country: "Spain",
        number: 55,
        team: "Ferrari"
    },
    {
        id: 5,
        driver_name: "Lewis Hamilton",
        first_name: "Lewis",
        last_name: "Hamilton",
        Country: "United Kingdom",
        number: 44,
        team: "Mercedes"
    },
    {
        id: 12,
        driver_name: "George Russel",
        first_name: "George",
        last_name: "Russel",
        Country: "United Kingdom",
        number: 63,
        team: "Mercedes"
    },
    {
        id: 1,
        driver_name: "Alexander Albon",
        first_name: "Alexander",
        last_name: "Albon",
        Country: "Thailand",
        number: 23,
        team: "Williams"
    },
    // {
    //     id: 2,
    //     driver_name: "Fernando Alonso",
    //     first_name: "Fernando",
    //     last_name: "Alonso",
    //     Country: "Spain",
    //     number: 14,
    //     team: "Alpine"
    // },
    {
        id: 4,
        driver_name: "Peirre Gasly",
        first_name: "Peirre",
        last_name: "Gasly",
        Country: "France",
        number: 10,
        team: "Alpine"
    },
    {
        id: 9,
        driver_name: "Esteban Oco",
        first_name: "Esteban",
        last_name: "Oco",
        Country: "France",
        number: 31,
        team: "Alpine"
    },
    {
        id: 3,
        driver_name: "Valterri Botas",
        first_name: "Valterri",
        last_name: "Botas",
        Country: "Finland",
        number: 77,
        team: "Alfa Romeo"
    },
    {
        id: 8,
        driver_name: "Lando Norris",
        first_name: "Lando",
        last_name: "Norris",
        Country: "United Kingodm",
        number: 4,
        team: "McLaren"
    },
    
    
    {
        id: 11,
        driver_name: "Daniel Ricciardo",
        first_name: "Daniel",
        last_name: "Ricciardo",
        Country: "Australia",
        number: 81,
        team: "McLaren"
    },
    {
        id: 7,
        driver_name: "Kevin Magnussen",
        first_name: "Kevin",
        last_name: "Magnussen",
        Country: "Denmark",
        number: 20,
        team: "Haas F1 Team"
    },
    {
        id: 14,
        driver_name: "Lance Stroll",
        first_name: "Lance",
        last_name: "Stroll",
        Country: "Canada",
        number: 18,
        team: "Aston Martin"
    },
    {
        id: 15,
        driver_name: "Yuki Tsunoda",
        first_name: "Yuki",
        last_name: "Tsunoda",
        Country: "Japan",
        number: 22,
        team: "AlphaTauri"
    },
    
    {
        id: 17,
        driver_name: "Zhou Guanyu",
        first_name: "Zhou",
        last_name: "Guanyu",
        Country: "China",
        number: 24,
        team: "Alpha Romeo"
    }
]