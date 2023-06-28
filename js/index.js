//Tạo hàm lấy và lưu giá trị số nhập vào
let arr = [];
function save() {
    let num = +document.getElementById('number').value;

    if (!num && num != 0) {
        return alert("vui lòng nhập đúng số nguyên")
    }
    if (Math.floor(num) !== Math.ceil(num)) {
        return alert("vui lòng nhập đúng số nguyên")
    }

    arr.push(num);
    document.getElementById('arr').innerHTML = arr;

    reset("number");
}


//Tạo hàm tính toán khi chọn thao tác
function calculator() {
    //lấy giá trị từ select
    let select = document.getElementById('select').value;
    //đặt điều kiện cho mỗi thao tác được chọn

    if (select == 'sumPositive') {
        clearBonus();
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                result += arr[i];
            }
        }
        return document.getElementById('result').innerHTML = result;
    }
    if (select == 'countPositive') {
        clearBonus();
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                result += 1;
            }
        }
        return document.getElementById('result').innerHTML = result;
    }
    if (select == 'min') {
        clearBonus();
        let result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < result) {
                result = arr[i];
            }
        }
        return document.getElementById('result').innerHTML = result;
    }
    if (select == 'minPositive') {
        clearBonus();
        let arrPositive = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 0) {
                arrPositive.push(arr[i])
            }
        }
        let arengeArrPositive = arrPositive.sort(bonusSort);
        result = arengeArrPositive[0];

        return document.getElementById('result').innerHTML = result;
    }

    if (select == 'findLastOfEven') {
        clearBonus();
        let result = -1;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                result = arr[i];
            }
        }
        return document.getElementById('result').innerHTML = result;

    }

    if (select == 'change') {
        document.getElementById('bonusChange').classList.remove('d-none');
        document.getElementById("formResult").innerHTML = `Mảng hiện tại: ${arr}`;
    }

    if (select == 'arenge') {
        clearBonus();
        let result = [];
        let newArr = arr.sort(bonusSort);
        result = newArr;

        console.log(arr, newArr)

        return document.getElementById('result').innerHTML = result;
    }

    if (select == 'firtOfPrime') {
        let result = -1;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 2) {
                result = `${arr[i]} là số nguyên tố`;
            }
            if (arr[i] > 2) {
                for (let j = 3; j < Math.sqrt(arr[i]); j += 2) {
                    if (arr[i] % j !== 0) {
                        result = `${arr[i]} là số nguyên tố`;
                    }
                    result = `${arr[i]} là số nguyên tố`;
                }
            }
        }

        console.log(result)
        document.getElementById('result').innerHTML = result;

    }

    if (select == 'compare') {
        clearBonus();
        let result = "";
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 0) {
                count += 1;
            }
            if (count > arr.length / 2) {
                result = "Số lượng số dương nhiều hơn số âm";
            } else if (count == arr.length / 2) {
                result = "Số lượng số dương bằng số âm"
            } else {
                result = "Số lượng số âm nhiều hơn số dương";
            }
        }
        return document.getElementById('result').innerHTML = result;

    }

    if (select == 'addToFind') {
        clearBonus();
        document.getElementById('addMore').classList.remove('d-none');
        document.getElementById("formResult").classList.add('d-none');
    }

}


function bonusChange() {
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    let a = arr[num1];
    let b = arr[num2];
    arr[num1] = b;
    arr[num2] = a;

    document.getElementById('resultChange').innerHTML = arr;
    console.log(arr);
}
function bonusSort(a, b) {
    return a - b
}
let arr2 = [];
function saveReal() {
    let numReal = +document.getElementById("numberReal").value;
    if (!numReal && numReal != 0) {
        return alert("vui lòng nhập đúng số thực")
    }

    arr2.push(numReal);
    document.getElementById('arr2').innerHTML = arr2;

    reset("numberReal");
}
function countInterge() {
    let count = 0;
    for (let i = 0; i < arr2.length; i++) {
        if (Math.ceil(arr2[i]) === Math.floor(arr2[i])) {
            count += 1;
        }
        document.getElementById("resultReal").innerHTML = `Có ${count} số nguyên trong mảng`
    }
}

function reset(id) {
    document.getElementById(id).value = "";
}
function clearBonus(){
    document.getElementById('bonusChange').classList.add('d-none');
    document.getElementById('addMore').classList.add('d-none');
    document.getElementById("formResult").classList.remove('d-none');
    document.getElementById("formResult").innerHTML = `Kết quả: <span id="result"></span>`;

}