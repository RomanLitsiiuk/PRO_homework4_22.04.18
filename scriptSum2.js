function sumMinMax() {
    var numbersArray = [-5, 0, 11, 23, -21, 13, 54, 2, 12, -3, 8, 76, 10, 7, 22];
    var i;
    var minValue = numbersArray[0];
    var maxValue = numbersArray[0];
    var indexSum;
    var minIndex;
    var maxIndex;

    for (i = 0; i < numbersArray.length; i++) {
        if(minValue >= numbersArray[i]) {
            minValue = numbersArray[i];
            minIndex = i;
        }

        if(maxValue <= numbersArray[i]) {
            maxValue = numbersArray[i];
            maxIndex = i;
        }
    }

    indexSum = minIndex + maxIndex;

    console.log('Сумма мин и макс позиции:' + indexSum + '');
}

sumMinMax();
