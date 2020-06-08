const year = (year) => {
    // handle only 1 number?
    let ifLeap;
    if (year % 4 === 0) {
        ifLeap = true;
    }
    if (year % 100 === 0){
        ifLeap= false;
    }else if (year % 400 === 0){
        ifLeap= true;
    }else{
        ifLeap= false
    }
    return ifLeap;
}

module.exports = year;
