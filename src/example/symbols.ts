// const sy = Symbol();
// console.log(sy);

// const sy2 = Symbol();
// console.log(sy === sy2) // false

// const sy3 = Symbol('blue');
// console.log(sy3)

// const sy4 = Symbol('blue');
// console.log(sy3 === sy4) // false

// const sy5 = Symbol({ a: 'a' }) // string | number

// console.log(sy4 + 12) // error

// console.log(sy4.toString())
// console.log(Boolean(sy4))
// console.log(!sy4)

const sy_cs = 'favorite'

const sy_obj = {
  name: 'blue',
  [sy_cs]: 'meet'
}

console.log(sy_obj)

const sy_name = Symbol('name')

const sy_obj_1 = {
  [sy_name]: 'ghost',
  age: 18,
  gender: 'boy'
}
console.log(sy_obj_1)

sy_obj_1[sy_name] = 'god'
console.log(sy_obj_1)

// sy_obj_1.sy_name = 'people' // error

for (const key in sy_obj_1) {
  console.log(key)
}
// age
// gender

console.log(Object.keys(sy_obj_1)) // ["age", "gender"]

console.log(Object.getOwnPropertyNames(sy_obj_1)) // ["age", "gender"]

console.log(JSON.stringify(sy_obj_1)) // {"age":18,"gender":"boy"}

console.log(Object.getOwnPropertySymbols(sy_obj_1)) // [Symbol(name)]

console.log(Reflect.ownKeys(sy_obj_1)) // ["age", "gender", Symbol(name)]

// 静态方法
const sy6 = Symbol.for('lee')
const sy7 = Symbol.for('lee')
const sy8 = Symbol('lee')
// console.log(sy6 === sy7) // true
// console.log(sy7 === sy8) // false

console.log(Symbol.keyFor(sy6)) // lee Symbol.for('key')
console.log(Symbol.keyFor(sy8)) // undefined 

// 内置Symbol值
// hasInstance
const sy_obj_2 = {
  [Symbol.hasInstance] (otherObj) {
    console.log(otherObj)
  }
}

console.log({ a: 'a' } instanceof <any>sy_obj_2) // false

// isConcatSpreadable
let sy_arr = [1, 2]
console.log([].concat(sy_arr, [3, 4])) // [1, 2, 3, 4]
sy_arr[Symbol.isConcatSpreadable] = false
console.log([].concat(sy_arr, [3, 4])) // [[1, 2], 3, 4]
console.log(sy_arr[Symbol.isConcatSpreadable]) // false

// species
class C extends Array {
  constructor(...args) {
    super(...args)
  }
  static get [Symbol.species] () {
    return Array
  }
  getName() {
    return 'blue'
  }
}
const syc = new C(1, 2, 3)
console.log(syc) // [1, 2, 3]
const sya = syc.map(item => item + 1)
console.log(sya) // [2, 3, 4]
console.log(syc instanceof C) // false
console.log(syc instanceof Array) // true

console.log(sya instanceof C) // false
console.log(sya instanceof Array) // true

const sy_obj_3 = {
  [Symbol.match] (string) {
    console.log(string.length)
  },
  [Symbol.split] (string) {
    console.log('split', string.length)
  }
}
'abcde'.match(<any>sy_obj_3) // 5
// 相同功能
// Symbol.replace
// Symbol.search
// Symbol.split
'abcde'.match(<any>sy_obj_3) // 5

const sy_arr_1 = [1, 2, 3]
const sy_iterator = sy_arr_1[Symbol.iterator]()
console.log(sy_iterator)
console.log(sy_iterator.next())
console.log(sy_iterator.next())
console.log(sy_iterator.next())
console.log(sy_iterator.next())

const sy_obj_4: unknown = {
  [Symbol.toPrimitive] (type) {
    console.log(type)
  }
}

// const sy_res = (sy_obj_4 as number)++ // number
const sy_res_2 = `abc${sy_obj_4}` // default js -> string

const sy_obj_5 = {
  [Symbol.toStringTag]: 'blue'
}

const sy_obj_6 = {}
console.log(sy_obj_5.toString()) // [object blue]
console.log(sy_obj_6.toString()) // [object Object]

const sy_obj_7 = {
  get [Symbol.toStringTag] () {
    return 'blue'
  }
}

console.log(sy_obj_7.toString()) // [object blue]

const sy_obj_8 = {
  a: 'a',
  b: 'b'
}

with(sy_obj_8) {
  console.log(a) // a
  console.log(b) // b
}

// with环境下被忽略掉的值
console.log(Array.prototype[Symbol.unscopables])
const sy_arr_2 = [1, 2]
with(sy_arr_2) {
  console.log(filter) // f () { ...}
  console.log(entries) // undefined
}