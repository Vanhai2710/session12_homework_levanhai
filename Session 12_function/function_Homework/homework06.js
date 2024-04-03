
// Viết chương trình khai báo chuỗi bất kì,
// Xây dựng hàm có tham số là 1 chuỗi và
// kết quả trả về là chuỗi đc truyền vào nhưng viết hoa tất cả chữ cái đầu.
// Gọi hàm với chuỗi đã đc khai báo và in két quả ra màn hình.


// Khai báo chuỗi bất kì
const inputString = "tôi tên là vy";

function capitalizeFirstLetter(inputString) {
  // Chuyển đổi chuỗi thành mảng các từ
  const words = inputString.split(" ");
  // Duyệt qua mỗi từ và viết viết hoa chữ cái đầu của từ
  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  // Ghép lại các từ để tạo thành chuỗi mới
  const capitalizedString = capitalizedWords.join(" ");
  return capitalizedString;
}

const result = capitalizeFirstLetter(inputString);
console.log("Chuỗi sau khi viết hoa chữ cái đầu:", result);