function userArrayAction() {
    var userString = prompt('Введите ряд чисел через запятую', '');
    var dirtyArray = userString.split(',');
    var i;
    var userArray = [];
    console.log(dirtyArray);
    var countEven = 0;
    var countOdd = 0;
    var evenSum = 0;
    var oddCalc = 1;
    var minVal;
    var maxVal;

    for (i = 0; i < dirtyArray.length; i++) {
        userArray.push(dirtyArray[i].replace(/[^0-9\-]+/g, ""));
    }
    console.log(userArray);

    for (i = 0; i < userArray.length; i++) {
        if (userArray[i] % 2 === 0 && userArray[i] != 0) {
            countEven += 1;
            evenSum += +userArray[i];
        }
        if (userArray[i] % 2 === 1) {
            countOdd += 1;
            oddCalc *= +userArray[i];
        }
    }

    minVal = userArray[0];
    maxVal = userArray[0];
    for (i = 0; i < userArray.length; i++) {
        if(minVal >= userArray[i] && userArray[i] != '') {
            minVal = +userArray[i];
        }

        if(maxVal <= userArray[i]) {
            maxVal = +userArray[i];
        }
    }

    console.log('Четных: ' + countEven + '');
    console.log('Нечетных: ' + countOdd + '');
    console.log('Сумма четных: ' + evenSum + '');
    console.log('Произведение нечетных: ' + oddCalc + '');
    console.log('Минимальное значение: ' + minVal + '');
    console.log('Максимальное значение: ' + maxVal + '');
}

userArrayAction();
