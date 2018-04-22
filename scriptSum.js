function sumBetweenZero() {
    var numbersArray = [1, 3, 11, 23, 0, 13, 54, 2, 12, 0, 8, 76, 10, 0, 22];
    console.log(numbersArray);
    var i;
    var zeroArray = [];
    var sumBetween0 = 0;

    for (i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] === 0) {
            zeroArray.push(i);
        }
    }

    for (i = zeroArray[0] + 1; i < zeroArray[1]; i++) {
        sumBetween0 += numbersArray[i];
    }

    console.log('Сумма чисел между первыми двумя нулями равна: ' + sumBetween0 + '');
}

sumBetweenZero();
