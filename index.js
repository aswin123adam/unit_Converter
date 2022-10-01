/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
/*
20 meters = 65.616 feet | 20 feet = 6.096 meters
20 liters = 5.284 gallons | 20 gallons = 75.708 liters
20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
*/

const getinput = document.getElementById("get-input");
const mtft = document.getElementById("c1");
const litgal = document.getElementById("c2");
const kilpd = document.getElementById("c3");
let input;
let ft;
let mtr;
let gln;
let lit;
let pd;
let kil;
document.addEventListener("click", ()=>{
    input = getinput.value;
    mtr = toMeter(input);
    ft = toFeet(input);
    lit = toLiter(input);
    gln = toGallon(input);
    kil = toKilo(input);
    pd = toPound(input);

    mtft.innerText = `${input} meters = ${ft} feet | ${input} feet = ${mtr} meters`;
    litgal.innerText = `${input} liters = ${gln} gallons | ${input} gallons = ${lit} liters`;
    kilpd.innerText = `${input} kilos = ${pd} pounds | ${input} pounds = ${kil} kilos`;


    // console.log(ft);
    // console.log(mtr);
    // console.log(gln);
    // console.log(lit);
    // console.log(pd);
    // console.log(kil);
})



function toMeter(mm){
    let meter;
    meter = mm * 0.3048;
    return meter;
}

function toFeet(mm){
    let feet ;
    feet = mm * 3.281;
    return feet;
}

function toLiter(mm){
    let liter;
    liter = mm * 3.78541;
    return liter;
}

function toGallon(mm){
    let gallon;
    gallon = mm * 0.264;
    return gallon;
}

function toKilo(mm){
    let kilo;
    kilo = mm * 0.453592;
    return kilo;
}

function toPound(mm){
    let pound;
    pound = mm * 2.204;
    return pound;
}