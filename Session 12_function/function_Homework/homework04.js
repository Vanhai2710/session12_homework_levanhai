
// Viết chương trình yêu cầu người dùng nhập vào 1 chuỗi và 1 ký tự bất kỳ,
// xây dựng hàm có 2 tham số là 1 chuỗi và 1 ký tự,
// đếm số lần xuất hiện của ký tự trong chuỗi. 
//Gọi hàm với chuỗi và ký tự đã nhập và in kết quả ra màn hình.

// Hàm đếm số lần xuất hiện của ký tự trong chuỗi
function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  
  // Yêu cầu người dùng nhập vào chuỗi và ký tự
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Nhập vào một chuỗi: ', (str) => {
    readline.question('Nhập vào một ký tự bất kỳ: ', (char) => {
      // Gọi hàm và in kết quả ra màn hình
      const occurrences = countOccurrences(str, char);
      console.log(`Số lần xuất hiện của ký tự '${char}' trong chuỗi '${str}' là: ${occurrences}`);
      readline.close();
    });
  });
  