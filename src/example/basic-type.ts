// 布尔类型
// let bool: boolean = false
let bool: boolean
bool = true
// bool = 123 // error:

// 数值类型
let num: number = 123
// num = '123' // error
num = 0b1111011
num = 0o173
num = 0x7b

// 字符串类型
let str: string
str = 'abc'
str = `数值是${num}`
console.log(str)

// 数组类型
// [1, 2, 3]
// 写法1
let arr: number[] 
arr = [5]
// arr = [5, '5'] // error
// 写法2
let arr2: Array<number>
// 联合类型
let arr3: Array<number|string>
arr3 = [5, '5']
let arr4: (number|string)[]
arr4 = [5, '5']

// 元组类型
let tuple: [string, number, boolean]
tuple = ['123', 123, false]
// tuple = ['123', 123, false, 123] // error
// tuple = [123, 123, false] // error

// 枚举类型
enum Roles {
  SUPER_ADMIN,
  ADMIN,
  USER
}
console.log(Roles.SUPER_ADMIN) // 0
console.log(Roles.ADMIN) // 1
console.log(Roles.USER) // 2
// if (roles === Roles.SUPER_ADMIN) {
//   // ...
// }
enum Colors {
  Red,
  Blue,
  Green = 3,
  Pink,
  Orange
}
console.log(Colors.Red) // 0
console.log(Colors.Blue) // 1
console.log(Colors.Green) // 3
console.log(Colors.Pink) // 4
console.log(Colors.Orange) // 5
console.log(Colors[3]) // Green
enum Fruits {
  Apple,
  Banana,
  Peach = 0,
  Grape
}
console.log(Fruits.Apple) // 0
console.log(Fruits.Banana) // 1
console.log(Fruits.Peach) // 0
console.log(Fruits.Grape) // 1
console.log(Fruits[0]) // Peach
console.log(Fruits[1]) // Grape

// any类型
let value: any
value = '123'
value = 123
value = false
const arr5: any[] = ['123', 123, false]

// void类型
const consoleText = (text: string): void => {
  console.log(text)
}
let v: void
v = undefined
// tsconfig -> strictNullChecks
v = null
// consoleText(123) // error

// null & undefined
let u: undefined
u = undefined
// u = 123 // error
let n: null
n = null
// n = 'abc' // error

let s: string
s = null
s = undefined

// never类型
const errorFunc = (message: string): never => {
  throw new Error(message)
}
const infiniteFunc = (): never => {
  while(true) {
    // ...
  }
}
let neverValue = (() => {
  while(true) {}
})()
// neverValue = 123 // error
s = neverValue

// object
let obj = {
  name: 'blue'
}
let obj2 = obj
obj2.name = 'color'
console.log(obj.name)
function getObject(obj: object): void {
  console.log(obj)
}
// getObject(123) // error
getObject(obj2)

// 类型断言
// const getLength = (target: string | number): number => {
//   if (target.length || target.length === 0) {
//     return target.length
//   } else {
//     return target.toString().length
//   }
// }
const getLength = (target: string | number): number => {
  if ((<string>target).length || (target as string).length === 0) {
    return (target as string).length
  } else {
    return target.toString().length
  }
}
getLength('123')
getLength(123)