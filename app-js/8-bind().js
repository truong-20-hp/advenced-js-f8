

// =============== bind() ========================
//               (Trói buộc)

/* ĐẶc TÍNH : 
    - Tạo ra một hàm mới khi được gọi
    - Có this trỏ tới ngữ cảnh được chỉ định
    - Có thể nhận các đối số từ hàm ban đầu
*/

// VD : 
// this.firstName = 'Xuan'
// this.lastName = 'Truong'

// const obj = {
//     firstName : 'Heo',
//     lastName : 'Nho',
//     getFullName () {
        // console.log(`${this.firstName} ${this.lastName}`)
        // console.log(this)
//     }
// }
// const newName = obj.getFullName
// newName() // output : "Xuan Truong" // ouput : Window
        

/* ==> Lí do : khi gán obj.getFullName cho newName thì function getFullName có ngữ cảnh là Global
       --> suy ra this ở đây sẽ là đối tượng Window
        Vì khi this khi được tạo ra thì nó là từ khóa chưa có giá trị
        Nó chỉ có giá trị và tham chiếu đến đối tượng gọi nó
*/


// khi sử dụng bind() :

// this.firstName = 'Xuan'
// this.lastName = 'Truong'

// const student = {
//     firstName : 'Son',
//     lastName : 'Dang'
// }
// const obj = {
//     firstName : 'Heo',
//     lastName : 'Nho',
//     getFullName () {
        // console.log(`${this.firstName} ${this.lastName}`)
        // console.log(this)
//     }
// }
// const newName = obj.getFullName.bind(obj)
// newName() // output : "Heo Nho" // ouput : obj{...}
// ==> this sẽ bị trói buộc bởi obj và this lúc này sẽ trong ngữ cảnh của obj

// const newName2 = obj.getFullName.bind(student)
// newName2() // output : "Son Dang" // ouput : student{...}
// ==> this sẽ bị trói buộc bởi student và this lúc này sẽ trong ngữ cảnh của student

// Hàm được tạo ra khi sử dụng bind() có thể nhận tham số của hàm ban đầu :


// this.name = 'Chiana'
// const myName = {
//     name : 'truong',
//     getName (param1, param2) {
//         console.log(param1, param2)
//         console.log(this.name)
//     }
// }

// let myName2 = myName.getName.bind(myName, 'test3', 'test4') // tham số ở đây sẽ được ưu tiên và không thể thay đổi ( fix cứng)
// myName2('test 1', 'test 2')



//  VD quản lí khóa học :

"use strict"
const $ = document.querySelector.bind(document)

const app = (() => {
    let courses = ['javascript', 'PHP']
    let listCourse = $('#list-course')
    let input = $('#input')
    let addBtn = $('#submit')


    return {
        add(course) {
            courses.push(course)
        },
        delete(index) {
            courses.splice(index , 1)
        },
        render() {
            let html = courses.map((course,index) => {
                return `
                    <li>
                        ${course}
                        <span data-index = ${index} class = "delete"> X </span>
                    </li>
                `
            })
            listCourse.innerHTML = html.join('')
        },

        addHandlEvent () {
            let course = input.value
            if(course) {
                this.add(course)
                this.render()
                input.value = ''
                input.focus()
            }
        },

        deleteHandlEvent (e) {
            let deleteBtn = e.target.closest('.delete')
            if(deleteBtn) {
                let index = deleteBtn.dataset.index
                this.delete(index)
                this.render()
            }
        },

        init() {
            addBtn.onclick = this.addHandlEvent.bind(this)
            listCourse.onclick = this.deleteHandlEvent.bind(this)
            this.render()
        }
    }

})() 

app.init()
