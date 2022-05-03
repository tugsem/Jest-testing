const capitalizeStr = require('./capitalizeStr');

test('awesome', () => 
    expect(capitalizeStr('awesome')).toBe('Awesome')
)

test('tree', () => 
    expect(capitalizeStr('tree')).toBe('Tree')
)

test('7', () => 
    expect(capitalizeStr(7)).toThrow(Error)
)