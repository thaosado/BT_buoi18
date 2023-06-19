//Tạo hàm lấy và lưu giá trị số nhập vào
let arr = [];
function save() {
    let num = +document.getElementById('number').value;
    arr.push(num);
    document.getElementById('arr').innerHTML = arr;
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

    if(select == 'change'){
        document.getElementById('bonusChange').classList.remove('d-none');
    }
    
    if(select == 'arenge' ){
        let result = 0;
        let newArr = arr.sort(bonusSort);
        result = newArr;

        document.getElementById('result').innerHTML = result;
        console.log(result)
    }

    if(select == 'firtOfPrime'){
        let result = -1;
        for(let i = 0; i<arr.length; i++){
        if( arr[i]< 2){
            return result;
        }
        if(arr[i] === 2){
            result = `${arr[i]} là số nguyên tố`;
        }
        if(arr[i] % 2 === 0){
            return result;
        }
    
        for(let i = 3; i < Math.sqrt(arr[i]); i+=2){
            if(arr[i] % i === 0){
                return result;
            }
        }
        }
        document.getElementById('result').innerHTML = result;
        console.log(result)
    }

    if(select == 'compare'){
        let result = "";
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 0) {
                count += 1;
            }
            if(count > arr.length / 2){
                result = "Số lượng số dương nhiều hơn số âm";
            }else if(count == arr.length / 2){
                result = "Số lượng số dương bằng số âm"
            }else{
                result = "Số lượng số âm nhiều hơn số dương";
            }
        }
        document.getElementById('result').innerHTML = result;
        console.log(result)
    }
    console.log(arr)

}


function bonusChange(){
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    let a = arr[num1];
    let b = arr[num2];
    arr[num1] = b;
    arr[num2] = a;

    document.getElementById('result').innerHTML = arr;
    console.log(arr);
}
function bonusSort(a, b){
    return a - b
}

