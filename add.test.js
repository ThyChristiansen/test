const sum = require ('./add.js');//this is not working yet

// OUR FIRST UNIT TEST
// sum of 1 and 2 is 3


test('sum of 1 and 2 is 3', () =>{
    //where we actually test stuff!
    expect(sum(1,2)).toBe(3);
})

test('sum of -1 and 2 is 1', () =>{
    expect(sum(-1,2)).toBe(1);
})

test('sum of 1.5, 2 is 3.5', () =>{
    expect(sum(1.5,2)).toBe(3.5);
})

test('only get one number', () =>{
    expect(sum(5)).toBe(5);
})


test('string of `1`, `2` gives 3', () =>{
    expect(sum('1','2')).toBe(3);
})
