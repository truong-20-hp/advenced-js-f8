

// =============== call() ======================

/* ĐỊnh nghĩa :
  - Là một thuộc tính của Function.prototype
  - Cho phép gọi một hàm với một giá trị this cụ thể
  - Các đối số riêng lẻ

  - cú pháp : func.call(thisArg , arg1 , arg2 ,...)
  */
// =====================================================================
  // vd : gọi hàm và bind this
  function greet (param1, param2) {
    // console.log(param1 +',' + this.name +' '+ param2)
  }

  const myName = {
    name : 'Truong'
  }

  greet.call(myName, 'Hello', '!') // Hello,Truong !
  // ==> call() gọi hàm với this được ràng buộc bởi đối tượng myName

  // ===================================================================

  // VD : thể hiện tính kế thừa(extends) trong OPP
  function Animal (name , weight) {
    this.name = name
    this.weight = weight
  }

  function Parrot (ten , a, gram , legs) {

    // khi gọi Animal.call() thì trình duyệt sẽ chạy ngầm đoạn bên dưới:
    Animal.call(this,ten,gram)
    // this.name = ten
    // this.weight = gram
    this.legs = legs
  }

  const conVet = new Parrot('vet', 300 , 2 )
  // console.log(conVet)

  //===================================================================

  //  VD : mượn hàm (method borrowing)
const teacher = {
  firstName : 'Minh',
  lastName : 'Thu',
  greet() {
    // console.log('Hello , ' + this.firstName + this.lastName + '.')
  }
}

const student = {
  firstName: 'Xuan',
  lastName : 'Truong'
}

teacher.greet.call(student) // in ra Xuan Truong

//==> Sử dụng phương thức của một đối tượng trên một đối tượng khác
// mà không cần phải sao chép và viết lại phương thức đó

// ================================================================


// VD : Mượn phương thức của Array để làm việc với đối tượng giống mảng(array- like objects)

const arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd',
  length: 4
}
// đối tượng giống Array có thuộc tính length, được truy cập bằng các chỉ mục số nguyên
// ==> Có cấu trúc hành vi tương tự mảng nhưng không phải mảng thúc sự
// VD : arguments trong function

const array = Array.prototype.slice.call(arrayLike) // chuyển thành mảng
// console.log(array)
array.forEach(item => {
  // console.log(item)
})

