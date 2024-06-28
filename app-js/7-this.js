// ================== this =====================

// Định nghĩa : this tham chiếu đến đối tượng mà nó thuộc về

/* 1. Ngữ cảnh toàn cục Global:
    - Trong ngữ cảnh toàn cục thì this tham chiếu đến đối tượng Window

    console.log(this) // in ra Window

   2. Trong phương thức của đối tượng :
   - Thì this tham chiếu đến dối tượng đó 
   
   const person = {
       name : 'truong',
       get () {
           return (this.name) // tham chiếu đến đối tượng person
       }
      }
   console.log(person.get()) // in ra 'truong'

   3. Trong một hàm độc lập:
   - trong một hàm thông thường không được gọi như một phương thức cuả một đối tượng 
      thì sẽ tham chiếu đến đối tượngt window:
      
    function show () {
        console.log(this) // in ra Window
    }
    show()

    !! - NHƯNG nếu sử dụng strict mode thì this sẽ in ra là undefined
    
   4. Trong một hàm tạo ( Constructor FUnction) 
    - Thì this tham chiếu đến đối tượng mới sẽ được tạo:

    function Car (name , color) {
     this.name = name // this tham chiếu đến mazda
     this.color = color
     this.get = function () {
         console.log(this.name)
     }
    } 
 
    const mazda = new Car('Mazda' ,'white')
    console.log(mazda.get())
    
   5. This trong Arrow Function :
    - Arrow Function không có context(ngữ cảnh) nên this sẽ được kế thừa ngữ cảnh bên ngoài nó

    const obj = {
     name : 'ngoai',
     parent : function () {
         const child1 = () => {
             console.log(this) // this ở đây là this của parent( trả về obj)
         }
         child1()
     }
    }
  
    console.log(obj.parent())


*/
