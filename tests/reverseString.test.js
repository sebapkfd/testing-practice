import reverseString from '../codes/reverseString';

test('Sebastian to naitsabeS', () => {
    expect(reverseString('Sebastian')).toBe('naitsabeS');
})

test('abcdefg to gfedcba', () => {
    expect(reverseString('abcdefg')).toBe('gfedcba');
})

test('redivider to redivider', () => {
    expect(reverseString('redivider')).toBe('redivider')
})

test(" '' to '' ", () => {
    expect(reverseString('')).toBe('');
})