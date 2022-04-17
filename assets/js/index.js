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

function calcMoto (){
    const prise = document.querySelector("#priseMoto").value;
    const volume = document.querySelector ("#volumeMoto").value;
    const power = document.querySelector("#powerMoto").value;
    const typeEngine = document.getElementsByName ('typeEngine');
    const age = document.getElementsByName ('ageMoto');
    const service = document.querySelector('#accept:checked');
    for (let i=0; i<typeEngine.length; i++) {
        if (typeEngine[i].checked && i<= 1) {
            for (let i=0; i<age.length; i++) {
                if (age[i].checked && i==0) {
                    let bid = 1.5*volume;
                    if (prise <= 2500) {
                        let customs = 1550;
                    }
                    if (prise > 15000) {
                        let customs = 8530;
                    }
                    let customs = 3100;
                    let recycle = 5200;
                    let result = customs + bid + recycle;
                    }
                if (age[i].checked && i>=1) {
                    let bid = 3*volume;
                    if (prise <= 2500) {
                        let customs = 1550;
                    }
                    if (prise > 15000) {
                        let customs = 8530;
                    }
                    let customs = 3100;
                    let recycle = 5200;
                    let result = customs + bid + recycle;
                    }
            }
        }
        let result = 0.15*prise + 511*power + 0.2*prise + 3400;
        console.log (result);
        document.querySelector('#sumMoto').innerHTML = result;
    }

}