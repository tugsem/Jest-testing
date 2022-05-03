const calc = require('./calc');

describe('add', () => {
    test('2 + 2', () => 
        expect(calc.add(2, 2)).toBe(4)
    );
    test('10 + 2', () => 
        expect(calc.add(10, 2)).toBe(12)
    );
    test('100 + 25', () => 
        expect(calc.add(100, 25)).toBe(125)
    );
 });


 describe('substract', () => {
     test('10 - 2', () => 
        expect(calc.subtract(10, 2)).toBe(8)
     );
     test('2 - 4', () => 
        expect(calc.subtract(2, 4)).toBe(-2)
     );
    test('4 - 0', () => 
        expect(calc.subtract(4, 0)).toBe(4)
     );
 });

 describe('divide', () => {
    test('20 / 5', () => 
        expect(calc.divide(20, 5)).toBe(4)
    );
    test('8 / 5', () => 
        expect(calc.divide(8, 5)).toBe(1.6)
    );
    test('0 / 5', () => 
        expect(calc.divide(0, 5)).toBe(0)
    );
 })

 describe('multiply', () => {
    test('10 * 2', () => 
        expect(calc.multiply(10, 2)).toBe(20)
    );
    test('0 * 2', () => 
        expect(calc.multiply(0, 2)).toBe(0)
    );
    test('10 * 10', () => 
        expect(calc.multiply(10, 10)).toBe(100)
    );
 })