// let x = 5;
// x = 6+1
// console.log(x)

// function work (){
//     console.log("working1")
// }

// const work2 = (a, b) =>  a + b
// work()
// console.log(work2(2,3))
// alert("working")
// const events = [1,3,7,11]
// // var lock = events.map(function(val){
// //         return val -1
// // })

// var lock = events.map(val => val - 1)
// console.log(lock)

// const events = [1,2,3,4,5,6,7]

// const work = events.filter(val => val % 2 !== 0)

// console.log(work)

// work.forEach(val => console.log( val))


// function work  (x, y = 2, z = 26) {
// return x = 1 + y + z;
// }
//  ok = work()
// console.log(ok)

// function para (x, y, ...a){
// let answer = 0;
// a.forEach(val => {
//     answer += val
// })
// return x + y + answer
// }
// console.log(para(1,2,3,4,5,6,9))


// let para = [1, "hello", 3, "world"]
// let para2 = ["working", 5, 9, "rule", ...para]

// console.log(para2)

// let val = 5
// // console.log(`This is number ${5}`)
// console.log(val === 5 ? true : false)

// let obj = {
//     square: (num) => num ** 2
// }
// console.log(obj.square(5))
// let objkey = "key"
// console.log(obj[objkey])

// let arr = [1,2,3]
// let [a, ,b] = arr;
// console.log([a, b] = [b, a])

// let obj = {op: 1, lhs: 2, rhs: 3}

//  let {op, lhs, rhs} = obj;
// console.log(op, lhs, rhs)

// function obj ([name1, val]){
//     console.log(name1, val)
// }
// obj(["pak", 1])

// function obj ({name1: v, val: n}){
//     console.log(v, n)
// }
// obj({name1: "gullu", val: 1})


// class Products{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     displayProducts(){
//         console.log(`Product: ${this.name}`)
//         console.log(`Price: Rs.${this.price}`)
//     }
// }
// const product1 = new Products("Shirt", 250)

// product1.displayProducts()

// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     // displayProducts(){
//     //     console.log(`Product: ${this.name}`)
//     //     console.log(`Price: Rs.${this.price}`)
//     // }
// }

// const product1 = new Product("shirt", 250)
// const product2 = new Product("pant", 650)
// product1.displayProducts();
// product2.displayProducts()

// class Child extends Product{
//     constructor(name, price, color){
//         super(name, price)
//         this.color = color;
//     }
//     displayProducts1(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: Rs.${this.price}`)
//         console.log(`Color: ${this.color}`)
//     }
// }
// const product1 = new Child("Suit", 1000, "White")

// product1.displayProducts1()







