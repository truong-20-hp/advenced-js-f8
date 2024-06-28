
/* 1. Kiểu Primitive Type : number , string , null , boolean , BigInt , symbol
    let a = 1
    let b = a

    a = 2
    console.log(b)  // output : 1

 BIẾN            VÙNG NHỚ
  a             (data) = 1 (==> =2)
  b             (data) = 1

  ==> khi gán a bằng 1 a sẽ được lưu vào vùng nhớ và có giá trị là 1
  ==> gán b = a thì b cũng sẽ được lưu vào vùng nhớ khác và có giá trị là 1 

  * khi gán lại giá trị a = 2 thì truy cập vào vùng nhớ của a và sửa giá trị = 2

*/

/* Kiểu Reference Type: Object , Array , Function
    let a = {
        name : "BMV"
    }

    let b = a

    a.name = "mecerdec"
    console.log(b)  // in ra {name: "mecerdec"}

    BIẾN         ĐỊA CHỈ               Ô NHỚ
    a             #001             (data) = {name : "BMV"}
    b             #001           

    ==> khi biến a được khởi tạo thì sẽ lưu dữ liệu (data) của biến a vào vùng nhớ và
        trả về địa chỉ chỏ đến vùng nhớ đó
    ==>Khi gán b = a thì gán địa chỉ của a cho b và b lần theo địa chỉ và chọc vào vùng nhớ của a
        ( a và b cùng có cùng chở vào một vùng nhớ và có chung dữ liệu)
*/

// *** LƯU Ý : -khi tạo ra một object mới hay array function mới thì sẽ tạo ra một vùng nhớ mới và trả về một địa chỉ mới
//             - dữ liệu được tính từ lần tạo trong phạm vi gần nhất.

/*Theo cách mình hiểu thì:
    Về kiểu tham trị: tạo một biến a và gán giá trị cho a để a được cấp một căn nhà(địa chỉ) xinh đẹp 
      sau đó cho thằng b 'vô gia cư' đến gặp a (gán a cho b). 
      Thằng a thấy thương nên thằng js mua cho thằng b một căn nhà(địa chỉ mới) giống hệt thằng a.
      Và thằng b bắt đầu trang trí(chỉnh sửa value) cho nhà mới để khác thằng a.
    Về kiểu tham chiếu: Thì tạo biến a và gán giá trị cho a, a được nhà mới(Địa chỉ). 
      Thằng b 'vô gia cư' đến gặp a sau đó gán b vào a, thì thằng js hết tiền mua nhà mới nên cho thằng b vào ở chung với thằng a 
      (Sau khi gán thì cả hai biến cùng dùng 1 địa chỉ). 
      B không những không cảm ơn mà còn tự ý chỉnh sửa nhà của a. 
      (Vì cùng địa chỉ (nhà) nên khi b thay đổi value thì a cũng vậy).
*/


// VD :

function func (a,b) {
  // trình duyệt sẽ chạy câu lệnh ngầm
  // let a = c  // tạo ra một vùng nhớ mới cho a ,và b
  // let b = d

  // nhưng ta gán lại giá trị cho a và b
  a = 0  // lúc này vùng nhớ của a , b sẽ được sửa giá trị bằng 0, không ảnh hưởng gì đến giá trị của c,d
  b = 0
  // console.log(a,b) // in ra 0 , 0
}
let c = 1
let d = 2

func(c,d)

// console.log(c,d)


// VD :
// function creatCars (car) {
//   car.name = "mecerdec"
//   return car
// }

// let car = {
//   name : "BMV"
// }
// let newCar = creatCars(car)
// console.log(car)
// console.log(newCar)

// ==> khai báo một biến car có data = {name:"BMV"} và gọi suy chiếu đến biến car trong function ==> thay đổi key name = "mecerdec"
// ※ Vì tính chất của reference type chỉ trả về địa chỉ nên cả 2 đều truy cập vào cùng một vùng nhớ ==> thay đổi dữ liệu chung

// VD :
function creatCars (obj) {
  
  obj = JSON.parse(JSON.stringify(obj)) // biến thành JSON ==> biến thành Javascript ==> tạo ra một object mới , vùng nhớ mới
  
  // obj = {...obj} // khi sử dụng toán tử giải và cho vào một object thì sẽ tạo ra một object mới và được đưa vào một vùng nhớ mới
  obj.name = "mazda"
  return obj // vì vậy trả về địa chỉ mới của vùng nhớ mới
}

let car = {
  name : "BMV"
}
let newCar = creatCars(car)
// console.log(car)
// console.log(newCar)