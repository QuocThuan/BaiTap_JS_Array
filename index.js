/** Bài tập Array
 * - Input : nhập vào các số nguyên và được lưu trữ trong mảng
 * 
 */

/** 1. 
 * - Process :
 *  + Khai báo mảng chứa số nguyên nhập vào
 *  + Khai báo biến lấy gtri từ input
 *  + Chạy vòng lặp lấy các số trong mảng
 *  + Lập điều kiện để lấy số dương tính tổng
 * - Output : Tổng các số dương có trong mảng 
 */

var arrSoNguyen = [];
document.getElementById('mang').onclick = function () {
    var soNguyen = document.getElementById('txtSoNguyen').value*1;
    arrSoNguyen.push(soNguyen);
    document.getElementById('showMang').innerHTML = arrSoNguyen;
}

// Tính tổng các số dương
document.getElementById('tinhTongSoDuong').onclick = function () {
    var tong = 0 ;
    for (var i = 0; i < arrSoNguyen.length; i++) { 
        if (arrSoNguyen[i] > 0) {
            tong += arrSoNguyen[i];
        }
    }
    document.getElementById('showTongSoDuong').innerHTML = tong;
}

// Đếm các số dương
document.getElementById('demSoDuong').onclick = function () {
    var count = 0 ;
    for (var i = 0; i < arrSoNguyen.length; i++) { 
        if (arrSoNguyen[i] > 0) {
            count++ ;
        }
    }
    document.getElementById('showSoLuongSoDuong').innerHTML = count ;
}

// Tìm số nhỏ nhất
document.getElementById('timMin').onclick = function () {
    var min = arrSoNguyen[0] ;
    for (var i = 1; i < arrSoNguyen.length; i++) { 
        if (min > arrSoNguyen[i]) {
            min = arrSoNguyen[i] ;
        }
    }
    document.getElementById('showSoMin').innerHTML = min ;
}

// Tìm số dương nhỏ nhất
document.getElementById('timMinDuong').onclick = function () {
    var minDuong = arrSoNguyen[0] ;
    for (var i = 1; i < arrSoNguyen.length; i++) { 
        if (arrSoNguyen[i] > 0) {
            if ( minDuong > arrSoNguyen[i] || minDuong < 0) {
                minDuong = arrSoNguyen[i] ;
            }
        }
    }
    document.getElementById('showSoMinDuong').innerHTML = minDuong ;
}

// Tìm số chẵn cuối cùng
document.getElementById('timSoChanCuoiCung').onclick = function () {
    var soChanCuoi = 0;
    for (var i = arrSoNguyen.length-1; i > 0; i--) {
        if (arrSoNguyen[i] % 2 == 0) {
            soChanCuoi = arrSoNguyen[i]; break;
        } else {
            soChanCuoi = -1;
        }
    } 
    document.getElementById('showSoChanCuoiCung').innerHTML = soChanCuoi ;
}
 
/** Đổi chỗ 2 giá trị theo vị trí
 * - Input: nhập vào 2 vị trí 
 * - Process:
 *  + khai báo 2 vị trí input
 *  + Khai báo biến chứa vị trí giá trị đầu tiên ( c=a, a=b, b=c) 
 * - Output: Mảng mới đã thay đổi vị trí
 */
document.getElementById('doiViTri').onclick = function () {
    var viTri1 = document.getElementById('viTri1').value;
    var viTri2 = document.getElementById('viTri2').value;
    var vitri = arrSoNguyen[viTri1];
    arrSoNguyen[viTri1] = arrSoNguyen[viTri2];
    arrSoNguyen[viTri2] = vitri;
    document.getElementById('showNew').innerHTML = arrSoNguyen;
}

// Sắp xếp tăng dần
document.getElementById('sapXep').onclick = function () {
    arrSoNguyen.sort(function (a,b) {
        return a-b;
    })
    document.getElementById('showArrNew').innerHTML = arrSoNguyen;
}

// Tìm số nguyên tố đầu tiên
document.getElementById('timSoNguyenTo').onclick = function () {
    var soNguyenToDauTien = 0;
    for ( var i =0; i < arrSoNguyen.length; i++) {
        if (arrSoNguyen[i] >= 2) {
            if (arrSoNguyen[i] == 2 || arrSoNguyen[i] == 3 || (arrSoNguyen[i] % 2 != 0 && arrSoNguyen[i] % 3 != 0) ) {
                soNguyenToDauTien = arrSoNguyen[i] ; break;
            }
        }
        else {
            soNguyenToDauTien = -1;
        }
    }
    document.getElementById('showSoNguyenTo').innerHTML = soNguyenToDauTien;
}

// Tìm số lượng số nguyên
var arrSoThuc = [];
var arrTapHop = [] ;
document.getElementById('themSoThuc').onclick = function () {
    var soThuc = document.getElementById('txtSoThuc').value;
    // arrSoNguyen.push(SoThuc);
    arrSoThuc.push(soThuc);
    arrTapHop = arrSoNguyen.concat(arrSoThuc);
    document.getElementById('showArrSoThuc').innerHTML = arrSoThuc;
    document.getElementById('showMangMoi').innerHTML = arrTapHop; 
    
}

document.getElementById('soLuong').onclick = function () {
    var count = 0;
    if (arrTapHop.length == 0) {
        for ( var i = 0; i < arrSoNguyen.length; i++) {
            if (arrSoNguyen[i] == 0 || arrSoNguyen[i]*100 % 100 == 0) {
                count++;
            }
        }
    } else {
        for ( var z = 0; z < arrTapHop.length; z++) {
            if (arrTapHop[z] == 0 || arrTapHop[z]*100 % 100 == 0) {
                count++;
            }
        }
    }
    document.getElementById('showSoLuong').innerHTML = count; 
}

// So sánh số lượng số âm và số dương 
document.getElementById('soSanh').onclick = function () {
    var content = '';
    var countDuong = 0;
    var countAm = 0;
    if (arrTapHop.length == 0) {
        for (var i = 0; i < arrSoNguyen.length; i++) {
            if (arrSoNguyen[i] > 0) {
                countDuong++;
            } else {
                countAm++;
            }
        }
        if (countDuong > countAm ) {
            content = `Số lượng số dương > Số lượng số âm`;
        } else if (countDuong < countAm) {
            content = `Số lượng số dương < Số lượng số âm`;
        } else {
            content = `Số lượng số dương = Số lượng số âm`;
        }
    } else {
        for (var z = 0; z < arrTapHop.length; z++) {
            if (arrTapHop[z] > 0) {
                countDuong++;
            } else {
                countAm++;
            }
        }
        if (countDuong > countAm ) {
            content = `Số lượng số dương > Số lượng số âm`;
        } else if (countDuong < countAm) {
            content = `Số lượng số dương < Số lượng số âm`;
        } else {
            content = `Số lượng số dương = Số lượng số âm`;
        }
    }
    document.getElementById('showSoSanh').innerHTML = content; 
}