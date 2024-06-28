

// ================= hoisting ==============================

// Định nghĩa : Hoisting là đưa phần khai báo lên đầu phạm vi của nó.
// Khi trình duyệt được chạy nó sẽ đọc qua code 1 lượt từ đầu dến cuối và lưu vào bộ nhớ rồi sau đó
// sẽ chạy lại và thực thi code nên được hoisting

// 1. Hoisting với var và function Declaration :

// console.log(age)  // undefined
// console.log(fullname) //  ReferenceError: fullname is not defined
var age = 20
// ở đây var age được đưa lên đầu nhưng không được gán giá trị nên giá trị của age sẽ là undefined


logger()
function logger () {
    // console.log('this is logger')
}
// ở đây phần khai báo hàm sẽ được hoisting lên đầu nên có thể gọi hàm trước khi khai báo hàm.

// ví dụ :
var name = 'truong'
{
    var name = 'dai ca'
    {
        // console.log(name) // 'dai ca'
        var name = 'heo nho'
    }
}

// ở đây vì var không có phạm vi khối nên theo tính chất hoisting sẽ là :
var name = 'truong'
var name = 'dai ca'
// console.log(name)
var name = 'heo nho'

// sau khi được hoisting đoạn mã sẽ chạy như này :
var name
var name
var name

name = 'truong'
name = 'dai ca' 
// console.log(name) // in ra dai ca
name = 'heo nho'


// -------------------------------------------------------------

// 2. Hoisting với let và const :

// console.log(number) // ReferenceError: Cannot access 'number' before initialization
// console.log(number2) // ReferenceError: number2 is not defined
let number = 'mot'

// let và const cũng sẽ được hoisting lên đầu phạm vi giống như var nhưng được đưa vào Temporal Dead Zone
// đến khi được gán giá trị.

// Temporal Dead Zone : vùng tạm thời không thể truy cập 
// (là khoảng thời gian mà biến được đưa vào phạm vi đến khi được gán giá trị cụ thể.
//  trong khoảng thời gian này nếu cố gắng truy cập biến sẽ xảy ra lỗi ReferenceError).


// ví dụ :

let number3 = 'mot'
{
    let number3 = 'hai'
    {
        // console.log(number3) // ReferenceError: Cannot access 'number3' before initialization
        let number3 = 'ba'
    }
}

// ở ví dụ này let number3 = 'ba' sẽ được hoisting lên trên đầu phạm vi của nó
// và lúc này chưa được gán giá trị nên number3 được đưa vào TDZ nên xảy ra lỗi Reference
// const và let được hoisting lên đầu để nó nhận thấy rằng trong phạm vi block của nó đã tồn tại một thằng number3 rồi nên n sẽ
// không nhảy ra ngoài để nhận giá trị number = 'hai' nữa

// ví dụ BONUS :
 var tip = 100
 ;(function () {
    // console.log('I have $' + husband()) // I have $NaN

    function wife () {
        return tip * 2
    }
    function husband() {
        return wife()
    }
    var tip = 10
 })()

// vì khi var tip = 10 nằm trong phạm vi truy cập gần nhất nên đã được hoisting lên đầu
// nhưng chỉ hoisting phần khai báo nên giá trị của tip lúc này sẽ là undefined nên kết quả khi thực thi hàm sẽ trả ra NaN