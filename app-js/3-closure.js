

// ================= closure (khép kín) ======================

// 1. Định nghĩa :
//  - là một hàm có thể ghi nhớ nơi mà nó tạo ra và truy cập được vào biến 
//  nằm bên ngoài phạm vi của nó

// 2. Ứng dụng :
//  - viết code ngắn gọn hơn
//  - biểu diễn , ứng dụng tính Private trong OOP

// 3. Lưu ý :
//  - Biến được tham chiếu (refer) trong closure sẽ không bị xóa khỏi bộ nhớ khi hàm cha thực thi xong bởi vì :
//      + hàm nội tại closure vẫn còn đang duy trì tham chiếu đến các biến cục bộ của hàm cha nên các biến được tham chiếu phải giữ nguyên giá trị hiện tại.
//  - Các khái niện Javascript nâng cao rất dễ gây nhầm lẫn như callback , IIFE , closure ,...
//  - Hãy nắm chắc các định nghĩa nhỏ của từng cái để phân biệt

// VD :


// khởi tạo một fn cha
function parent () {
    var count = 0

    // fn con
    function child () {
        ++count
        return count
    }
    return child
} 

let a = parent()

// console.log(a()) //output : 1
// console.log(a()) //output : 2
// console.log(a()) //output : 3
// console.log(a()) //output : 4

// *nguyên lí hoạt động :
// -khởi tạo một function cha, khai báo một biến count, biến ngày chỉ truy cập được ở bên trong phạm vi của function cha.
// -khởi tạo một function con , function con được return ra ngoài và gắn vào biến a , vì vậy biến a trở thành global.
// -lúc này biến a là function child.
// -gọi biến a tức là gọi function child, lúc này theo định nghĩa function child sẽ ghi nhớ nơi mà nó tạo ra và thực hiện truy cập.
//   vào biến count rồi tăng count lên 1 rồi trả về count( tức là biến count bên ngoài đã được gắn = 1).
// -tiếp tục gọi a() thì lại thực hiện đúng trình tự vừa rồi.

let a1 = parent()

// console.log(a1()) //output : 1
// console.log(a1()) //output : 2
// console.log(a1()) //output : 3
// console.log(a1()) //output : 4

// khi ta gọi hàm parent() lần 2 thì một môi truờng mới sẽ lại được tạo và các biến và hàm trong function parent sẽ được gán lại từ đầu.

// vd 2 :
function outerFunction (outerParam) {
    function innerFunction (innerParam) {
        // console.log(outerParam + innerParam)
    }
    return innerFunction
}
let call = outerFunction(10)
call(5) //output : 15
call(10) //output : 20