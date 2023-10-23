// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});



test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One dollar should be 156.5 Yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen  } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromDollarToYen (3.5);

    // Si 1 dollar son 156.5 yen, entonces 3.5 dollars debe ser (3.5 *  156.5)
    const expected = 3.5 *  156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen (3.5)).toBe(547.75); // 1 dollar son 156.5 yen, entonces 3.5 dollares deberían ser = (3.5 * 156.5)
})


test("One euro should be 0.87 Gbp", function() {
    const { fromYenToPound } = require('./app.js');

    const gbp = fromYenToPound(156.5);

    const expected = 156.5 * 0.87;

    expect(fromYenToPound(156.5)).toBe(136.155); 
})