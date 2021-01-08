import { add, sub, mult, div } from '../codes/calculator';

test('1 + 2 to equal 3', () => {
    expect(add(1, 2)).toEqual(3);
});

test('2 - 2 to equal 0', () => {
    expect(sub(2, 2)).toEqual(0);
});

test('3 * 5 to equal 15', () => {
    expect(mult(3, 5)).toEqual(15);
})

test('10 / 5 to equal 2', () => {
    expect(div(10, 5)).toEqual(2)
})

test('10 / 0 to be Null', () => {
    expect(div(10, 0)).toBeNull();
})