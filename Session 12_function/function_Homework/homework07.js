
// Viết chương trình khai báo mảng số nguyên, 
// yêu cầu người dùng nhập vào 1 số nguyên bất kỳ.
// Xây dựng hàm có 2 tham số là 1 mảng và 1 số,
// kết quả trả về là một cặp số trong mảng đã khai báo 
// sao cho tổng của cặp số tìm được bằng với số đã nhập vào.
// Lưu ý: chỉ dùng một vòng lặp.


// Khai báo mảng số nguyên
const numbers = [2, 4, 6, 8, 10, 12, 14, 16];

// Hàm tìm cặp số trong mảng có tổng bằng số đã nhập vào
function findPairWithSum(inputArray, targetSum) {
    const numbersMap = {};
    for (let i = 0; i < inputArray.length; i++) {
        const complement = targetSum - inputArray[i];
        if (numbersMap.hasOwnProperty(complement)) {
            return [complement, inputArray[i]];
        }
        numbersMap[inputArray[i]] = i;
    }
    return null;
}

// Nhập số nguyên từ người dùng 
const userInput = parseInt(prompt("Nhập vào 1 số nguyên bất kì:"));

// Gọi hàm findPairWithSum và in kết quả ra màn hình
const pair = findPairWithSum(numbers, userInput);
if (pair) {
    console.log("Cặp số có tổng bằng", userInput, "là:", pair[0], "và", pair[1]);
} else {
    console.log("Không tìm thấy cặp số có tổng bằng", userInput);
}