// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInGbp = valueInYen * 0.87;
    // Retornamos el valor en dólares
    return valueInGbp;
}

// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen  = function(valueInDollar) {
    // Convertimos el valor a Yen (1eur=156.5Yen)
    let valueInYen = valueInDollar * 156.5;
    // Retornamos el valor en Yen
    return valueInYen;
}


// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}



// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }