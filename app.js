'use strict';

let allTrips = [];
let table = document.getElementById('table');
let form = document.getElementById('form');
let submit = document.getElementById('submit'); 

let placeName = document.getElementById('placeName');
let tripPlace = document.getElementById('tripPlace');
let transport = document.getElementById('transport');


function Travel(placeName,tripPlace, transport)
{
this.placeName = placeName;
this.tripPlace = tripPlace;
this.transport = transport;
allTrips.push(this);
}

function render() 
{

    for (let i = 0; i < allTrips.length; i++) {

    let tr = document.createElement('tr');
    table.appendChild(tr);
    let th1 = document.createElement('th');
    tr.appendChild(th1);
    let img = document.createElement('img');
    th1.appendChild(img);
    img.textContent = `images/places/${allTrips[i].placeName}.png`

    let th2 = document.createElement('th');
    tr.appendChild(th2);

    let para1 = document.createElement('p');
    th2.appendChild(para1);
    para1.textContent = `Place name: ${allTrips[i].placeName}`;
    let para2 = document.createElement('p');
    th2.appendChild(para2);
    para2.textContent = `Trip place: ${allTrips[i].tripPlace}`;

    let para3 = document.createElement('p');
    th2.appendChild(para3);
    para3.textContent = `Tybe of transport: ${allTrips[i].transport}`;
        
    }


}


new Travel('EUROPE','HAWAI', 'CAR' );
new Travel('EUROPE2','HAWAI2', 'CAR2');
new Travel('EUROPE3','HAWAI3', 'CAR3');




submit.addEventListener("submit", submitter);

function submitter(event)
{
    event.preventDefault();

    let placeNameTemp = event.target.placeName.value;
    let tripPlaceTemp = event.target.tripPlace.value;
    let transportTemp = event.target.transport.value;

    let temp = new Travel (placeNameTemp, tripPlaceTemp, transportTemp);
setData(); // idk why the compiler ignore this part (submitter part!!!!)

table.innerHTML="";
render();

}



function setData ()
{
    let data = JSON.stringify(allTrips);
    localStorage.setItem('data',data);
}


function getData ()
{

    let stringOne = localStorage.getItem('data');
    let normalOne = JSON.parse(data);

    if (normalOne !== null)
    {
        allTrips = normalOne;
    }
}


render();
// getData();

console.log(allTrips);
