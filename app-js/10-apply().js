

// ====================== apply() =================================
/* Định nghĩa : 
    - Là một thuộc tính của Function.prototype
    - Gọi hàm với với một giá trị this cụ thể\
    - Đối số được truyền vào là một mảng

    cú pháp: func.apply(thisArg ,[argArray])
*/

// ==> Giống với phương thức call() nhưng đối số truyền vào là một mảng hoặc một đối tượng giống mảng

// VD :

const number = [1,2,3,4,5,6,7]

const max = Math.max.apply(null, number)
const min = Math.min.apply(null, number)

// console.log( min) // output : 1
// console.log(max) // output : 7

// VD :
const chao = {
    greet(greeting , symbol) {
        // console.log(greeting +' '+ this.name + ' ' + symbol)
    }
}

const ten = {
    name : 'heo nho'
}
chao.greet.apply(ten ,['xin chao', '!'])