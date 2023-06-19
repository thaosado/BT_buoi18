//Tạo hàm lấy và lưu giá trị số nhập vào
let arr = [];
function save() {
    let num = +document.getElementById('number').value;
    arr.push(num);
    document.getElementById('arr').innerHTML = arr;

    return arr;
}

//Tạo hàm tính toán khi chọn thao tác
function calculator() {
    //lấy giá trị từ select
    let select = document.getElementById('select').value;
    //đặt điều kiện cho mỗi thao tác được chọn
    if (select == 'sumPositive') {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                result += arr[i];
            }
        }
        console.log(result)
        document.getElementById('result').innerHTML = result;
    }
    if (select == 'countPositive') {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                result += 1;
            }
        }
        document.getElementById('result').innerHTML = result;
        console.log(result)
    }
    if (select == 'min') {
        let result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < result) {
                result = arr[i];
            }
        }
        document.getElementById('result').innerHTML = result;
        console.log(result)
    }
    if (select == 'minPositive') {
        let result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (0 <= arr[0] < result) {
                result = arr[i];
            }
        }
        if (result < 0) {
            result = "không tìm thấy số dương trong các số đã lưu"
        }
        document.getElementById('result').innerHTML = result;
        console.log(result)
    }

    if (select == 'findLastOfEven') {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                result = arr[i];
            }
            else{
                result = -1;
            }
        }
        document.getElementById('result').innerHTML = result;
        console.log(result)
    }

    // console.log(arr)
}



function change(a, b) {
    let num1 = arr[a];
    let num2 = arr[b];
}