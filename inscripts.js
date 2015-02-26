function add(x, y){
    return x+y;
}

function subtract(x, y){
    return x-y;
}

function mutiply(x, y){
    return x*y;
}

function divide(x, y){
    return x/y;
}

function root(x){
    return Math.sqrt(x);
}

function square(x){
    return x*x;
}

function percent(x){
    return x/100;
}

function wbisit(button){
    var x = $(button).text();
    x = (Number(x) instanceof Number) ? x=Number(x):x;
    return x;
}

function genNum(numberFromButton, OldNumber) 
/*
This funciton will be the one that will add clickd numbers to the
end of the other string holding the entire number untill an 
operatior is clicked
*/ 