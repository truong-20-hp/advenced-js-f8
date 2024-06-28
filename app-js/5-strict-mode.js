
//  ==================== strict- mode =====================

// Định nghĩa : là một tính năng của javascript ra mắt trong phiên bản ES5
//              - strict-mode là chế độ nghiêm ngặt trong viết code , giúp tránh được các lỗi vô tình ,
//               và giúp dẽ dàng debug và bảo trì code hơn

// * cách sử dụng : 
// 1. thêm "use strict" ở đầu file js
// 2. thêm "use strict" ở đầu đoạn mã <script> trong HTML
// 3. thêm "use strict" ở đầu phạm vi của một hàm.

// VD :

// // "use strict"
// fullname = 'nguyen van a'
// function getName () {
//      myAge = 20 // lỗi chưa khai báo biến khi sử dụng "use strict"
//      console.log(myAge)
// }
// getName()
// console.log(fullname) // lỗi khi chưa khai báo biến :ReferenceError: fullname is not defined

// ==> phải sử dụng từ khóa var , let , const khi khai báo biến


// VD :
// 'use strict'
// function sum (a, b , b) { //Duplicate parameter name not allowed in this context : lỗi trùng tên tham số
//     return a + b + b
// }
// console.log(sum(2,2,3))
//==> báo lỗi khi sử dụng các tham số trùng tên

// VD :
// "use strict"
// let public = 'truong'
// let private = 'duong'
// let package  = 'hero'
// console.log(package)
// ==>BÁo lỗi khi sử dụng các từ khóa dự trữ : là các từ khóa có thể sau này sẽ được đặt thành key tên riêng trong JS

// VD :
// "use strict"
// {
//     function greet () {
//         console.log('hello world')
//     }
// }
// greet() // báo lỗi
// ==> Function sẽ có phạm vi code block khi sử dụng strict mode


// VD : 
// ta có thể khai báo một object :

// "use strict"

// var obj = {
//     ten : 'truong',
//     tuoi : 20
// }
// delete obj.ten // xóa key 'ten'
// console.log(obj) // {tuoi: 20}
//==> Bình thường có thể xóa được key trong obj

// var objfreeze = Object.freeze({
//     name : 'truong',
//     age : 20
// }) // là obj đóng bằng không thể thay đổi giá trị.

// delete objfreeze.name //  không thể xóa nhưng không báo lỗi nếu không dùng strict mode
// console.log(objfreeze) // nếu sử dụng strict mode sẽ báo lỗi : Cannot delete property 'name' of #<Object>


// *** hoặc ta có thể định nghĩa một object: 
var objDefine = {}

Object.defineProperty(objDefine , 'name' ,
    {
        value : 'truong',
        writable : false, // thay đổi thuộc tính sau khi được định nghĩa
        enumerable : false, // liệt kê được thuộc tính
        configurable : false // xóa hoăc thay đổi thuộc tính
    }
)

objDefine.name = 'duong' // không thể thay đỗi thuộc tính nhưng không báo lỗi , nếu sd strict mode sẽ báo lỗi :  Cannot assign to read only property 'name' of object '#<Object>'
delete objDefine.name // không xóa được thuộc tính
// console.log(objDefine)

//==> Báo lỗi khi cố tình xóa nhũng thuộc tính không thể xóa