
// Viết chương trình khai báo mảng gồm nhiều chuỗi bất kỳ,
// yêu cầu người dùng nhập vào 1 chuỗi bất kỳ.
// Xây dựng hàm có 2 tham số là 1 mảng và 1 chuỗi,
// kết quả trả về là tất cả các phần tử trong mảng có chứa  chuỗi vừa nhập.
// In kết quả trả về ra màn hình.


// Khai báo mảng chứa chuỗi bất kì 
const array = [`apple`, `banana`, `orenge`, `kiwi`, `grape`];

// Hàm tìm các phần tử trong mãng có chứa chuỗi đc nhập vào
function findStringsContaining(inputArray, searchString) {
    // Sử dụng phương thức filter để lọc các phần tử thỏa mãn điều kiện
    const result = inputArray.filter(item => item.includes(searchString));
    return result;
}

// Nhập chuỗi từ người dùng
const userInput = +prompt("Nhập vào 1 chuỗi bất kì:");

// Gọi hàm findStringsContaining và in kết quả ra màn hình
const matchingStrings = findStringsContaining(array, userInput);
console.log("Các phần tửu trong mảng chứa chuỗi `" + userInput +"`:");
console.log(matchingStrings);