//Problem 2

function pandaCost(singaras, samochas, jialapis){
    if(typeof singaras != 'number' && samochas != 'number' && jialapis != 'number' ){
        return 'Please enter numbers';
    }

    const perSingara = 7;
    const perSamocha = 10;
    const perJilapi = 15;

    const singaraQuantity = perSingara * singaras;
    const samochaQuantity = perSamocha * samochas;
    const jilapiQuantity = perJilapi * jialapis;

    totalPrice = singaraQuantity + samochaQuantity + jilapiQuantity;

    return totalPrice;
}

console.log(pandaCost(3, 2, 4));