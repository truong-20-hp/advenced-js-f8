

//========================= IIFE (Immediately Invoked Function Expression)===========
// Định nghĩa: là một hàm được gọi ngay lập tức ngay sau khi được định nghĩa

;(function () {
    // console.log('hello cac ban')
})()

;(function (message) {
    // console.log('Message :' + message)
})('hello world')

// 1. là một function Expression , có thể đặt tên họăc không, có thể truyền truyền tham số.
//    trước IIFE phải có dấu ; nếu không có sẽ bị lỗi
// 2. IIFE là một hàm "private" 
//     - không thể gọi từ bên ngoài hàm
//     - có thể gọi từ bên trong hàm bằng cách gọi đệ quy
        // let i = 1
        // ;(function dequy () {
        //     console.log(i)
        //     i++
        //     if(i < 10) {
        //         dequy()
        //     }
        // })()

// 3. ứng dụng :

// có thể truy cập vào thư viện từ đối tượng IIFE trả về, những phương thức và thuộc tính không được return vẫn là cục bộ

var library = (function() {
    // các phương thúc và thuộc tính cục bộ
    // không thể truy cập từ bên ngoài tránh trùng tên biến và có thể bị phá hỏng ứng dụng
    let privateVariable = 'day la bien cuc bo'
    function privateMethod() {
        // console.log('day la function cuc bo')
    }

    // các phương thức và thuộc tính công khai
    // có thể sử dụng cac phương thức và thuộc tính được return ra ngoài
    return {
        publicMethod () {
            // console.log(privateVariable) // có thể gọi biến cục bộ
            privateMethod() // có thể gọi hàm cục bộ
            // console.log('day la function cong khai')
        },
        publicVariable : 'day la bien cong khai'
    }

})()

// console.log(library.publicVariable)
library.publicMethod()

// console.log(library.privateVariable) // không thể truy cập trực tiếp vào biến cục bộ từ bên ngoài
// console.log(library.privateMethod) // không thể truy cập trực tiếp vào function cục bộ từ bên ngoài
