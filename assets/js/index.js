function sumInput (){
    const arr = [];
    while (true) {
        let x = +prompt ('Введите число');
        if ((!x) || (typeof x !=="number")) {
            break;
        }
            else
                arr.push (x);
                console.log (arr);
    }
    arr.sort ((a,b) => a-b);
    document.querySelector('#resA').innerHTML = arr;
    let sumA = 0;
    for (i = 0; i < arr.length; i++ ) {
    sumA += arr[i];
    }
    console.log (sumA);
    document.querySelector('#sumA').innerHTML = sumA;
}

function calcMoto(){
    let prise = document.querySelector("#priseMoto").value;
    const volume = document.querySelector ("#volumeMoto").value;
    const power = document.querySelector("#powerMoto").value;
    const currency = document.querySelector ('#accept:checked');
    const typeEngine = document.getElementsByName ('typeEngine');
    const age = document.getElementsByName ('ageMoto');
    const service = document.querySelector('#accept:checked');

    // Пересчет в валюте
    if (currency.value == "82") {
        let prise = prise/82;
    }
    else if (currency.value == 0.93) {
        let prise = prise*0.93;
    }
    // Таможенное оформление
        if (prise < 2500) {
            let customs = 1550;
        }
        else if (prise >=2500 && prise <5000) {
            let customs = 3100;
        }
        else {
            let customs = 8530;
        }
    // Выбор типа двигателя
        if (typeEngine == null) { alert ('Укажите тип двигателя');}
        else if (typeEngine.value == "Бензин" || typeEngine.value == "Дизель") {
            let recycle = 5200; //утилизационный сбор
            // Проверка возраста
            if (age == null) { alert ('Укажите возраст');}
            else if (age.value == "меньше 5 лет") {
                let bid = 1.5*volume; //единая ставка
            }
            else if (age.value == "от 5 до 7 лет" || age.value == "больше 7") {
                let bid = 3*volume;
            }
            let expenses = customs + bid + recycle;
        }
        else {
            let expenses = 0.15*prise + 511*power + 0.2*prise + 3400;
        }
        if (service == null) {
            let result = expenses;
        }
        else if (service.value == "С сопровождением по России") {
            let result = expenses + 2000;
        }
        else if (service.value == "С сопровождением по Японии") {
            let result = expenses + 1000;
        }
        else {
            let result = expenses + 3000;
        }
        console.log (result);
        document.querySelector('#sumMoto').innerHTML = result;
}

function array2 () {
    let arr2 = ['js', 'css', 'html'];
    console.log (arr2[0]);
}

function array3 (){
    let arr3 = [0, 1, false, 2, undefined, '', 3, null];
    let Newarr3 = arr3.filter(function(number) {
        return number > 0;
    });
    console.log (Newarr3);
}

function array4 () {
    let arr4 = [[1,2], [1,2,3], [1,2,3,4]];
    for (i=0; i<arr4.length; i++) {
        let Newarr4 = arr4[i];
        if (Newarr4.length>3){
            let result = i;
        }
    }
console.log (result);
}