const stringLength = require('./stringLength');


test('empty', () => expect(stringLength('as')).toBeGreaterThan(1))

test('long', () => expect(stringLength('hjsdf')).toBeLessThanOrEqual(10))