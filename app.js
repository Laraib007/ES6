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
//     constructor(name, val){
//         this.name = name
//         this.val = val
//     }
//     displayProducts(){
//         console.log(`Product: ${this.name}`)
//         console.log(`Price: ${this.val}`)
//     }
// }
// const product1 = new Product("Shirt", "260")
// product1.displayProducts()

// class Products{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     displayProducts(){
//         console.log(`Product: ${this.name}`)
//         console.log(`Price: ${this.price}`)
//     }
// }
// const product1 = new Products("Jacket", "$1000");
// product1.displayProducts()

// const product2 = new Products("Shirt", "$100");
// product2.displayProducts()

// class Book{
//     constructor(name, auther, type, price){
//         this.name = name
//         this.auther = auther
//         this.type = type
//         this.price = price
//     } 
//     display(){
//         console.log(`Name: ${this.name}`)
//         console.log(`Auther: ${this.auther}`)
//         console.log(`Type: ${this.type}`)
//         console.log(`Price: ${this.price}`)
//     }
// }
// const book1 = new Book("Urdu", "Alama Iqbal", "Poetry", "50.00")
// book1.display()

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


// class Datasaver{
//    static save(name, data){
//         const json = JSON.stringify(data);
//         localStorage.setItem(name, json)
//     }

//    static get(name){
//        const json = localStorage.getItem(name);
//         return JSON.parse(json)
//     }
// }
// Datasaver.save("obj", "key")


// class Datasaver{

//         constructor(prices){
//          this.prices = prices
//         }
//         getTotal(){
//             return this.prices.reduce((curVal, preVal)=>{
//                     return curVal + preVal;
//             }, 0);
//         }

//     static save(name, data){
//         const json = JSON.stringify(data)
//         localStorage.setItem(name, json)
//     }
//     static get(name){
//         const json = localStorage.getItem(name)
//         return JSON.parse(json)
//     }
// }
// const total = new Datasaver([120,130,140])
// console.log(total.getTotal())
// Datasaver.save("name", "key1")
// const data = Datasaver.get("name")
// console.log(data)


// class Totaling{
//     constructor(prices){
//         this.prices = prices
//     }
//     set val(str ){
//         if(str && str[0] === "A"){
//         this._val = str
//     }
//     }

//     get val (){
//         return this._val
//     }

//    get getTotal(){
//         return this.prices.reduce((preVAl, currVal)=>{
//                 return preVAl + currVal
//         }, 0)
//     }
// }


// const data = new Totaling([120,130,140,150])
// // console.log(data.getTotal)

//  data.val = "work"
//  data.val = "Apple"
//  data.val = "Banana"
// console.log(data.val)

// let p1 = new Promise((resolve, reject)=>{
//     console.log("i am pending")
//     setTimeout(()=>{
//         console.log("working fulfiled")

//     reject(new Error("i am an error"))
//     }, 2000)
// })
// p1.catch((error)=>{
//     console.log("somthing is worng")
// })

// let p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     console.log("worko")
//     resolve(56)
//    }, 2000)
// })
// p.then( ()=>{
//     setTimeout(()=>{
//         return console.log("working")}, 2000)
// })
   



// let p = new Promise((resolve, reject)=> {
    
//     setTimeout(()=>{
//         console.log("Working" )
//         resolve(1)
//     }, 2000)

// }) 
// p.then(()=>{
//     setTimeout(()=>{
//       return  console.log("2nd Layer")
//     }, 2000)
// }).then(()=>{
//     setTimeout(()=>{
//     return console.log("3rd Layer")
//     }, 2000)
// })


// const loadScript = (src)=>{
//         return new Promise((resolve, reject)=>{
//             let script = document.createElement("script")
//             script.type = "text/javascript"
//             script.src = src
//          document.body.appendChild(script)
//             script.onload=()=>{
//                 resolve(1)
//             }
//             script.onerror=()=>{reject(0)}
//         })
// }

// let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
// p1.then((value)=>{
//     console.log(value)
//  })
// //.catch((error)=>{
// //     console.log("error")
// // })


// const loadScript = (src)=>{
//     return new Promise((resolve, reject)=>{
//         let script = document.createElement("script")
//         script.type = "text/javascript"
//         script.src = src
//      document.body.appendChild(script)
//         script.onload=()=>{
//             resolve(1)
//         }
//         script.onerror=()=>{reject(0)}
//     })
// }

// let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
// p1.then((value)=>{
// console.log("Script Founded")
// }).catch(()=>{
//     console.log("Not found")
// })

const loadScript = (src)=>{
    return new Promise((resolve, reject)=>{
         let script = document.createElement("script")
         script.type = "text/javascript"
         script.src = src
         document.body.appendChild(script)
         script.onload=()=>{
            resolve(1)
         }
          script.onerror=()=>{reject(0)}
    })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
p1.then(()=>{
    console.log("Script Worked")
}).catch(()=>{
    console.log("Script Not Found")
})



















































































