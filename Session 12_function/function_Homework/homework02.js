
// Viết chương trình khai báo mảng gồm các thành phần ngẫu nhiên,
// xây dựng hàm nhận có tham số là 1 mảng
// và kết quả trả về là phần tử có độ dài lớn nhất trong mảng đó.
// Gọi hàm với mảng đã khai báo và in kết quả ra màn hình.

// Hàm sinh số ngẫu nhiên từ min đến max
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Hàm tìm phần tử có độ dài lớn nhất trong mảng
  function findLongestElement(arr) {
    let longestElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > longestElement.length) {
        longestElement = arr[i];
      }
    }
    return longestElement;
  }
  
  // Khai báo mảng gồm các thành phần ngẫu nhiên
  const randomArray = ['Hải', 'Vy', 'Huyền', 'Thúy'];
  
  // Gọi hàm với mảng đã khai báo và in kết quả ra màn hình
  const longestElement = findLongestElement(randomArray);
  console.log(`Phần tử có độ dài lớn nhất trong mảng là: ${longestElement}`);