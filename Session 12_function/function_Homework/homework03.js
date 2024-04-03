
// Viết chương trình khai báo chuỗi bất kì, [1, 2, 3, 4, 5, 6, 7]
// xây dựng hàm có tham số là 1 chuỗi và 
// kết quả trả về là số kí tự trong chuỗi đó (ko tính kí tư trống).
// Gọi hàm với chuỗi đã khai báo và in kq ra màn hình console

function countCharacters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        count++;
      }
    }
    return count;
  }
  
  const str = `Đây là một chuỗi bất kỳ`;
  const result = countCharacters(str);
  document.getElementById("result").textContent = `Số ký tự trong chuỗi "${str}" là: ${result}`;
  