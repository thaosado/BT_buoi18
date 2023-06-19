

function save() {
    let stringArr = document.getElementById("number").value;
    let arr = stringArr.split(" ");
    document.getElementById('arr').innerHTML = `Các số đã lưu: ${stringArr}`;
    console.log(arr)

    return arr;
}

console.log(arr)

function sum() {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result += arr[i];
        }
    }
    console.log(result)
}
sum()

function count() {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result += 1;
        }
    }
    console.log(result)
}
count()

function min() {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < result) {
            result = arr[i];
        }
    }
    console.log(result)
}
min()

function minPositive() {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (0 <= arr[0] < result) {
            result = arr[i];
        }
    }
    if (result < 0) {
        result = "không tìm thấy số dương trong các số đã lưu"
    }
    console.log(result)
}

minPositive()

function findLastOfPositive() {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            result = arr[i]
        } else result = -1;
    }
    console.log(result)
}
findLastOfPositive()

function change(a, b) {
    let num1 = arr[a];
    let num2 = arr[b];
}