import caesar from '../codes/caesar';

test('abcdefgh to bcdefghi', () => {
    expect(caesar('abcdefgh', 1)).toBe('bcdefghi')
})

test('Sebastian to Colkcdskx', () => {
    expect(caesar('Sebastian', 10)).toBe('Colkcdskx')
})

test('Third.test to Drsbn.docd', () => {
    expect(caesar('Third.test', 10)).toBe('Drsbn.docd')
})
