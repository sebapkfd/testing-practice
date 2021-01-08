import capitalize from '../codes/capitalize';

test('SeBaStIaN to be Sebastian', () =>{
    expect(capitalize('SeBaStIaN')).toBe('Sebastian');
})

test(" '' to be '' ", () =>{
    expect(capitalize('')).toBe('');
})

test('SEBASTIAN to be Sebastian', () =>{
    expect(capitalize('SEBASTIAN')).toBe('Sebastian');
})

test('sebastian to be Sebastian', () =>{
    expect(capitalize('sebastian')).toBe('Sebastian')
})