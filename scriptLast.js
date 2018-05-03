function userArrayAction() {
    var i;
    var userArray = [];
    var userNumber;
    var countEven = 0;
    var countOdd = 0;
    var evenSum = 0;
    var oddCalc = 1;
    var minVal;
    var maxVal;
    var userString = prompt('Введите ряд чисел через запятую', '');
    var dirtyArray = userString.split(',');
    console.log(dirtyArray);

    for (i = dirtyArray.length - 1; i >= 0; i--) {
        userNumber = dirtyArray[i].replace(/[^0-9\-]+/g, "");
        if (userNumber !== '') {
            userArray.unshift(+userNumber);
        }
    }
    console.log(userArray);

    for (i = 0; i < userArray.length; i++) {
        if (userArray[i] % 2 === 0) {
            countEven += 1;
            evenSum += userArray[i];
        }
        if (userArray[i] % 2 !== 0) {
            countOdd += 1;
            oddCalc *= userArray[i];
        }
    }

    minVal = userArray[0];
    maxVal = userArray[0];
    for (i = 0; i < userArray.length; i++) {
        if(minVal >= userArray[i]) {
            minVal = userArray[i];
        }

        if(maxVal <= userArray[i]) {
            maxVal = userArray[i];
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
