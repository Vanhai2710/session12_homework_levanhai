
// Tìm hiểu về callback function,
// chức năng của callback function và cách nó hoạt động trong javascript.

// ----------------------------

// Callback Function trong Javascript:
// - Callback Function là 1 hàm đc truyền vào 1 hàm khác như 1 tham số
// - và đc gọi lại sau khi hàm cha hoàn thành.

// ----- CHỨC NĂNG: -----
// - Callback giúp sử lí các sự kiện bất đồng bộ trong Javascript.
// - Cho phép ta thực hiện các hành động sau khi 1 tác vụ khác hoàn thành.
// - Giúp ta viết mã JavaScript modular và dễ bảo trì hơn.

// ----- Cách thức hoạt động: -----
// - Hàm cha nhận một hàm khác (callback) làm tham số.
// - Hàm cha thực hiện một tác vụ nào đó.
// - Khi tác vụ hoàn thành, hàm cha gọi lại hàm callback.
// - Hàm callback được thực thi với các tham số được truyền từ hàm cha.