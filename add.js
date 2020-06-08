const sum = (num1, num2) => {
    // handle only 1 number?
    if (!num2) {
        num2 = 0;
    }
    return Number(num1) + Number(num2);
}



module.exports = sum;
