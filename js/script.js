// variables
var data1;
var data2;
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var results;
var resultfields;

// if any number can be calculated (user entering an invalid calculation)
var InvalidNum = "Mathematic Error!"

// variables to operate Math functions
var tolerancy = 1e-6; // Represented on scientific notation that is equal to 0.000001

// add event listeners
input1.addEventListener('input', saver);
input2.addEventListener('input', saver);

// function that saves info from html
function saver() {
    data1 = document.getElementById("num1").value;
    data2 = document.getElementById("num2").value;
    resultfields = document.getElementById("resultado");

    console.log(input1.value)
    console.log(input2.value)

    return data1 & data2;
}

// function for addition
function addition() {
    results = Number(data1) + Number(data2);
    resultshowing();
    return results
}

// function for sustraction
function sustraction(){
    results = Number(data1) - Number(data2);
    resultshowing();
    return results
}

function division() {
    results = Number(data1) / Number(data2);
    resultshowing();
    return results
}

// function for multiplicacion
function multiplication() {
    results = Number(data1) * Number(data2);
    resultshowing();
    return results
}

// function for exponents squared

function exponents() {
    results = data1**2;
    resultshowing();
    return results
}

// function for exponents with any number

function exponents2() {
    results = data1**data2;
    resultshowing();
    return results
}

// function for square root 

function SquareRoot(){

    if(data1 >= 0){
        aproximation = data1/2;

        while(Math.abs(aproximation * aproximation - data1) > tolerancy){
            aproximation = 0.5 * (aproximation + data1/ aproximation); //Raphson - Newton method
        }

        results = aproximation.toFixed(4);
        resultshowing();
        return results;
    } else if(data1 < 0){
        results = InvalidNum;
        resultshowing();
        return results;
    }
}

// functions for CubeRoots 
 function CubeRoot() {
    let aproximation = (data1 / 3);

        while(Math.abs(aproximation * aproximation * aproximation - data1) > tolerancy){
            aproximation = aproximation - (((aproximation**3) - data1) / (3 * (aproximation**2))) //Harley's method
        }
        
        results = aproximation.toFixed(4);
        resultshowing();
        return results;
}

// function for roots for any number

// function that shows the result of the page
function resultshowing(){
    resultfields.innerHTML = results;
}
