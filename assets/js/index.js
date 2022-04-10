
function sumInput (){
    const arr = [];
    while (true) {
        let x = +prompt ('Введите число');
        if (!x) {
            break;
        }
            else if (typeof x !=="number") {
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