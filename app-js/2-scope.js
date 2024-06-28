// -------------- scope--(phạm vi)----------------
/*
- Các loại phạm vi:
    - Global -> phạm vi toàn cục (chương trình) : được tạo bên ngoài cùng file.js
    - Code block -> phạm vi khối mã {}: dành cho let/const.
    - Local scope -> phạm vi hàm : var, function 
(let/const cũng áp dụng tương tự, vì phạm vi hàm cũng có code block {} )

- Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo
Khi định nghĩa hàm, phần thân bên trong của hàm chưa được tạo phạm vi.
Khi được gọi hàm thì phần thân bên trong của hàm mới tạo ra phạm vi mới.
Mỗi lần gọi hàm là một lần tạo phạm vi mới

- Các hàm có thể truy cập các biến được khai báo trong phạm
vi của nó và bên ngoài
Truy cập được biến bên trong chính nó và global.

- Cách thức một biến được truy cập
Sẽ ưu tiên truy cập pham vi(code block/local scrope) gần nhất.


- Khi nào một biến bị xóa khỏi bộ nhớ?
    - Biến toàn cục?
Khi tạo ra biến, sẽ lưu lại cho đến khi chương trình được thoát ra hoặc F5 lại

    - Biến trong code block & trong hàm?
Chỉ lưu khi đoạn mã được gọi và thực thi, sau đó sẽ xóa đi.

    - Biến trong hàm được tham chiếu bởi 1 hàm?
    + nếu hàm nội tại đang suy chiếu đến một biến cục bộ của hàm cha, và hàm nội tại
      được return hoặc gọi ở bên ngoài hàm cha thì biến đang được suy chiếu đó sẽ không xóa khỏi bộ nhớ,
      vẫn lưu lại như ví dụ dưới: lúc này biến one tương đương global so với hàm counter, vì đang có hàm đó truy cập ( suy chiếu),
      lên chưa thể xóa khỏi bộ nhớ

 */
function example() {
  let one = 0;

  function counter() {
    return ++one;
  }

  return counter;
}
// const result = example()
// console.log(result())
// console.log(result())
// console.log(result())
