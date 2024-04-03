
// Viết chương trình khai báo 3 số ngẫy nhiên, 
// Xây dựng hàm chẵn lẽ và gọi hàm với mỗi số đã khai báo
// in kết quả ra màn hình console.


// Hàm sinh số ngẫu nhiên từ min đến max
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Hàm kiểm tra số chẵn
  const evenNumber = num => num % 2 === 0;
  
  // Hàm kiểm tra số lẻ
  const oddNumber = num => num % 2 !== 0;
  
  // Khai báo 3 số ngẫu nhiên
  const number1 = random(1, 100);
  const number2 = random(1, 100);
  const number3 = random(1, 100);
  
  // Kiểm tra và in kết quả
  console.log(`Số ${number1}  là số ${evenNumber(number1) ? 'chẵn' : 'lẻ'}.`);
  console.log(`Số ${number2}  là số ${evenNumber(number2) ? 'chẵn' : 'lẻ'}.`);
  console.log(`Số ${number3}  là số ${evenNumber(number3) ? 'chẵn' : 'lẻ'}.`);
  