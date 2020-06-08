const year = require ('./year.js');//this is not working yet


test('if year is leap', () =>{
    expect(year(400)).toBe(false);
})