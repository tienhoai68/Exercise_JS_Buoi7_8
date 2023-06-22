var listNumber = [];

function getEle(id) {
    return document.getElementById(id);
}
// Bài 1
function btnThemSo() {
    var number = getEle("soNguyen").value * 1;
    var result = "Số nhập vào là: ";
    listNumber.push(number);
    for (var i = 0; i < listNumber.length; i++) {
        result += listNumber[i] + " ";
    }
    getEle("soDaNhap").innerHTML = result;
    return result;
}
// hàm tính tổng các số dương trong mảng
function tinhTong(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            total += array[i];
        }
    }
    return total;
}
// hàm in ra kết quả tính tổng
function btnTinhTong() {
    getEle("ketQuaTinhTong").innerHTML = "Kết quả tính tổng là: " + tinhTong(listNumber);
}
// Bài 2
// hàm đếm số dương
function demSo(arr) {
    var count = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    return count;
}
// hàm in kết quả đếm số
function demSoDuong() {
    document.querySelector(".demSoDuong").innerHTML = "tổng số dương nhập vào là: " + demSo(listNumber);
}
// Bài 3
// hàm tìm số nhỏ nhất 
function soNhoNhat(array) {
    var soNhoNhat = array[0];
    for (var i = 0; i < array.length; i++) {
        if (soNhoNhat > array[i]) {
            soNhoNhat = array[i];
        }
    }
    console.log(soNhoNhat)
    return soNhoNhat;
}
// hàm in ra số nhỏ nhất
function ketQuaSNN() {
    document.querySelector(".soNhoNhat").innerHTML = "Số nhỏ nhất là: " + soNhoNhat(listNumber);
}
// Bài 4
// hàm tìm số dương
function soDuongNN(arr) {
    var soDuong = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            soDuong.push(arr[i]);
        }
    }
    var soDuongNN = soDuong[0];
    for (var j = 0; j < soDuong.length; j++) {
        if (soDuongNN > soDuong[j]) {
            soDuongNN = soDuong[j];
        }
    }
    return soDuongNN;
}
// hàm in ra kết quả số dương nhỏ nhất
function btnSoDuongNN() {
    document.querySelector(".timSoDuongNN").innerHTML = "Số dương nhỏ nhất là: " + soDuongNN(listNumber);
}
// Bài 5
// hàm tìm số chẵn cuối cùng
function soChan(arr) {
    var soChan = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] >= 0) {
            soChan.push(arr[i]);
        }
    }
    for (var i = 0; i < soChan.length; j++) {
        // lấy ra phần tử cuối của mảng
        return soChan.pop();
    }
    return -1;
}
// hàm in ra sô chẵn cuối 
function soChanCuoi() {
    document.querySelector(".timSoChan").innerHTML = "Số chẵn cuối là: " + soChan(listNumber);
}
// Bài 6
// hàm hoán đổi 2 giá trị
function doiChoHaiGiaTri(arr, first, second) {
    if (first < 0 || first >= arr.length || second < 0 || second >= arr.length) {
        alert("Vui lòng nhập vị trí phù hợp")
        return;
    }
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
    return arr;
}
// hàm in ra kết quả
function btnDoiCho() {
    var first = getEle("first").value * 1;
    var second = getEle("second").value * 1;
    document.querySelector(".doiCho").innerHTML = "Kết quả đổi chổ là: " + doiChoHaiGiaTri(listNumber, first, second);
}
// Bài 7
// hàm in ra kết quả sắp xếp
function btnSapXep() {
    for (var i = 0; i < listNumber.length - 1; i++) {
        for (var j = i + 1; j < listNumber.length; j++) {
            if (listNumber[i] > listNumber[j]) {
                var temp = listNumber[i];
                listNumber[i] = listNumber[j];
                listNumber[j] = temp;
            }
        }
    }

    document.querySelector(".sapXepSo").innerHTML = "Mảng sau khi sắp xếp: " + listNumber;
}
// Bài 8
//hàm tìm số nguyên tố
function soNguyenTo(arr) {
    var SNT = true;
    if (arr < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(arr); i++) {
        if (arr % i === 0) {
            return SNT = false;
        }
    }
    return SNT;
}
// hàm lấy ra số nguyên tố
function soNguyenToDau(array) {
    for (var i = 0; i < array.length; i++) {
        if (soNguyenTo(array[i])) {
            return array[i];
        }
    }
    return -1;
}
// hàm in ra kết quả số nguyên tố
function btnSoNguyenTo() {
    document.querySelector(".soNguyenTo").innerHTML = "Số nguyên tố đầu tiên là: " + soNguyenToDau(listNumber);
}
//Bài 9
// hàm thêm số nguyên
var newListNumber = []; 
function themSoNguyen() {
    var soNguyen = getEle("themSoNguyen").value * 1;
    newListNumber.push(soNguyen);
    document.querySelector(".ketQuaThemSoNguyen").innerHTML = "Số nguyên tố đã thêm là: " + newListNumber;
}
// hàm đếm số nguyên
function demSoNguyen(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i])) {
            count++;
        }
    }
    return count;
}
// hàm in ra kết quả đếm số nguyên
function ketQuaSoNguyen() {
    document.querySelector(".demSoNguyen").innerHTML = "Số nguyên là: " + demSoNguyen(newListNumber);
}
// Bài 10
// hàm đếm số âm
function soAm(arr) {
    var soAm = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            soAm++;
        }
    }
    return soAm;
}
// hàm đếm số duong
function soDuong(arr) {
    var soDuong = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            soDuong++;
        }
    }
    return soDuong;
}
// hàm so sánh so âm và số dương
function soSanh(arr) {
    var result = "";
    if (soAm(arr) > soDuong(arr)) {
        result = "Số âm > Số dương";
    } else if (soDuong(arr) > soAm(arr)) {
        result = "Số Dương > Số âm";
    } else {
        result = "Số âm = Số dương";
    }
    return result;
}
// hàm in ra kết quả
function ketQuaSoSanh() {
    document.querySelector(".soSanh").innerHTML = soSanh(listNumber);
}