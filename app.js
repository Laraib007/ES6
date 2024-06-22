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
// //         script.type = "text/javascript"
// //         script.src = src
// //      document.body.appendChild(script)
// //         script.onload=()=>{
// //             resolve(1)
// //         }
// //         script.onerror=()=>{reject(0)}
// //     })
// // }

// // let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
// // p1.then((value)=>{
// // console.log("Script Founded")
// // }).catch(()=>{
// //     console.log("Not found")
// // })

// // const loadScript = (src)=>{
// //     return new Promise((resolve, reject)=>{
// //          let script = document.createElement("script")
// //          script.type = "text/javascript"
// //          script.src = src
// //          document.body.appendChild(script)
// //          script.onload=()=>{
// //             resolve(1)
// //          }
// //           script.onerror=()=>{reject(0)}
// //     })
// // }

// // let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
// // p1.then(()=>{
// //     console.log("Script Worked")
// // }).catch(()=>{
// //     console.log("Script Not Found")
// // })

// // let p1 = new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //         resorelve("done")
// //     },11000)
// // })

// // let p2 = new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //         reject("done 2")
// //     },2000)
// // })

// // let p3 = new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //         resolve("done 3")
// //     },3000)
// // })

// // let allPromises = Promise.resolve([p1, p2, p3])
// // allPromises.then((value)=>{
// //     console.log(value)
// // })

// // let labi = async ()=>{
// //     let p1 = new Promise((resolve, reject)=>{
        
// //        setTimeout(()=>{
// //         resolve(""I am P1")",
// //        }, 1000) 
// //     })
// //     let p2 = new Promise((resolve, reject)=>{
        
// //         setTimeout(()=>{
// //             resolve(""I am P2")",
// //            }, 3000) 
// //     })
// //     let p3 = new Promise((resolve, reject)=>{
        
// //         setTimeout(()=>{
// //             resolve(""I am P3")",
// //            }, 5000) 
// //     })
// //     console.log("P1 is Starting...")
// //     let pp1 = await p1
// //     console.log("Congrates P1 Started Successfully ")
// //     console.log("P2 is Starting...")
// //     let pp2 = await p2
// //     console.log("Congrates P2 Started Successfully ")
// //     console.log("P3 is Starting...")
// //     let pp3 = await p3 
// //     console.log("Congrates P3 Started Successfully ")
// //     return [pp1, pp2, pp3] 
// // }
// // let cheery = async ()=>{
// //     console.log(""I am Cheery and i am not waiting")",
// // }
// // let main1 = async ()  =>{
// // let a = await labi()
// // let b = await cheery()

// // console.log(b)
// // }
// // main1()

// // let labi = async ()=>{
// //     let p1 = new Promise((resolve, reject)=>{
// //         setTimeout(()=>{
// //             resolve(1)
// //         }, 1000)
// //     })
// //     let p2 = new Promise((resolve, reject)=>{
// //         setTimeout(()=>{
// //             resolve(2)
// //         }, 3000)
// //     })
// //     let p3 = new Promise((resolve, reject)=>{
// //         setTimeout(()=>{
// //             resolve(3)
// //         }, 5000)
// //     })
// //     console.log("Hey P1 is starting...")
// //     await p1
// //     console.log("P1 Started")
// //     console.log("Hey P2 is starting...")
// //     await p2
// //     console.log("P2 Started")
// //     console.log("Hey P3 is starting...")
// //     await p3
// //     console.log("P3 Started")
// //     return
// // }  
// // let cheery = async()=>{
// //     console.log(""I am Cheery and "I am Waiting")",
// // }

// // let main1 = async ()=>{
// // await labi()
// // await cheery()
// // }
// // main1()


// // try{
// //     let age = prompt(""What is your age")",
// //     age = Number.parseInt(age)
// //     if(age >= 150){
// //         throw new error("This is not true")
// //     }
// // }
// // catch(error){
// //     console.log(error.name)
// // }
// // finally{
// //     console.log("working")
// // }




// let p1 = async ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(30)
//         }, 2000)
//     })
// }

// let p2 = async ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(10)
//         }, 4000)
//     })
// }

// let p3 = async ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(20)
//         }, 2000)
//     })
// }

// let promi = async()=>{
//     let a1 = await p1()
//     console.log(a1)
//     let a2 = await p2()
//     console.log(a2)
//     let a3 = await p3()
//     console.log(a3)
// }
  
// promi()


// let ok = fetch("https://jsonplaceholder.typicode.com/todos/5")
// ok.then((res)=>{
//    return res.json()
// }).then((res2)=>{
//     console.log(res2.userId)
// })

// let fetc = fetch("https://jsonplaceholder.typicode.com/todos/1")
// fetc.then((response)=>{
//     return response.json()
// }).then((result)=>{
//     console.log(result.id)
// })
// let fetc = fetch("https://jsonplaceholder.typicode.com/todos/1")
// fetc.then((res)=>{
//           return  res.json()
// }).then((resp)=>{
//     console.log(resp.id)
// })

// let createTodo =async (todo)=>{
// let option = {
//     method: "POST",
//     headers: {"Content-type": "application/json"},
//     body: JSON.stringify(todo),
// }
// let p = await fetch('https://jsonplaceholder.typicode.com/posts', option)
//  let response = await p.json()
//  return console.log(response)
// }

// let getTodo = async(id)=>{
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id)
//     let a = await response.json()
//     return a
// }
// let mainFunc = async()=>{
//     let todo = {
//         title: 'Labi',
//         body: 'Khan',
//         userId: 1,
//       }
//     let done = createTodo(todo)
//     console.log(await getTodo(6))
//     return done
// }
// mainFunc()


// const createTodo =async(todo)=>{
// let options = {
//     method: "POST",
//     headers: {"Content-type": "application/json"},
//     body: JSON.stringify(todo)
// }
// let response = await fetch('https://jsonplaceholder.typicode.com/posts/', options)
//   let a = await response.json()
//   return console.log(a)
// }
// let getTodo = async(id)=>{
//    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
//   let a = await response.json()
//   return a
// }
// let postFunc =async()=>{
//     let todo =    {
//         title: 'Labi',
//         body: 'Khan',
//         userId: 1,
//       }
//       console.log(await getTodo(3))
//     return createTodo(todo)
    
// }
// postFunc()


// console.log(document.cookie)

// localStorage.setItem("as", "as")

// let url = "https://fakestoreapiserver.reactbd.com/nextamazon"

// let response = fetch(url)
//     response.then((v)=>{
//             return v.json()
//     }
// ).then((v)=>{
//     ihtml = ""
//     for(item in v){
//     console.log(v[item])
    
//     ihtml += `
//        <div class="card my-4 mx-4" style="width: 18rem;">
//         <img src="${v[item].image}" class="card-img-top my-2 d-block w-80 h-50" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${v[item].title}</h5>
//           <p>Price: $${v[item].price}</p>
//           <p>category: ${v[item].category}</p>
//           <p>quantity avalabile: ${v[item].quantity}</p>
//           <a href="#" class="btn btn-primary">Buy Now</a>
//         </div>
//       </div>
//     `
//     Cards.innerHTML = ihtml
//     }
// })


// let url = "https://fakestoreapiserver.reactbd.com/nextamazon"

// let response = fetch(url)
//     response.then((v)=>{
//             return v.json()
//     }
// ).then((v)=>{
//     ihtml = ""
//     for(item in v){
//     console.log(v[item])
    
//     ihtml += `
//        <div class="card my-4 mx-4" style="width: 18rem;">
//         <img src="${v[item].image}" class="card-img-top my-2 d-block w-80 h-50" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${v[item].title}</h5>
//           <p>Price: $${v[item].price}</p>
//           <p>category: ${v[item].category}</p>
//           <p>quantity avalabile: ${v[item].quantity}</p>
//           <a href="#" class="btn btn-primary">Buy Now</a>
//         </div>
//       </div>
//     `
//     Cards.innerHTML = ihtml
//     }
// })

// let a = ["Labi","Khan", "Working"]

// let sleep = async(seconds)=>{
//   return new Promise((resolve, reject)=>{
//       setTimeout(()=>{ resolve(true)}, seconds * 1000)
//   })
// }
// let hackMan = async(message)=>{
//       await sleep(2)
//       console.log(message)
// }

// let work = async()=>{
//   for (let i = 0; i < a.length; i++)
//   {
//    await hackMan(a[i])
//   }
// }

// work()

// let a = ["labi", "LRB", "Khan"]

// let sleep = async(seconds) =>{
//   return new Promise((resolve, reject)=>{
//       setTimeout(()=>{resolve(true)}, seconds * 1000)
//   })
// }

// let hackMan = async(message)=>{
//     await sleep(2)
//     console.log(message)
// }

// (async()=>{
//   for (let i = 0; i < a.length; i++){
//      await hackMan(a[i])
//   }
// })()

// let day = prompt("Enter Day").toLocaleLowerCase();
// switch (day) {
//     case "sunday":
//         console.log("Its Sunday")
//         break;
//         case "monday":
//             console.log("Its Monday")
//             break;
//     default:
//         console.log("Not a Valid Day!")
//         break;
// }

// let day = prompt("Enter Day").toLocaleLowerCase();
// let day2 = prompt("Enter Day").toLocaleLowerCase();
// if(day === "sunday" && day2 === "monday"){
//     console.log("Worked")
// } else console.log("Not worked")

// let a = prompt("write age")
// let age = a < 18 ? "You can't Drive" : "You Can drive"

// console.log(age)


// let obj = {
//     Labi: 90,
//     khan: 85,
//     LRB: 89
// }
// for(let a in obj){
//     console.log(`The Marks of ${a} is ${obj[a]}`)
// }

// let n = 4
// i = 0
// while(i<n){
//     console.log(i)
//     i++
// }

// let n = 4
// i = 9
// do{
//     console.log(i)
//     i++
// }while(i<n)

// let cn = 4
// let i 
// while (i != cn){
//     console.log("Try Again")
//     i = prompt("Enter the number")
// }
// console.log("Congrets You Guess the Correct Number!")
// console.log("Bana\'na")
// console.log("Bana\"na")
// console.log("Bana\nna")
// console.log("Bana\tna")
// console.log("Bana\rna")

// let labi = "My name is Lrb"

// for(let i = 0; i < labi.length; i++){
//     console.log(labi[i])
// }

// let arr = ["Lrb", "Khan", "Labi"]
// // console.log(arr)

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

// let arr = ["A", "B", "C"]
// console.log(arr.push("1"))
// console.log(arr.pop())
// console.log(arr.shift("1"))
// console.log(arr.unshift("1"))
// console.log(arr.join("1"))
// console.log(arr.slice(2, 4))

// let num = [1, 62, 23, 4, 15, 6, 76, 58, 9, 3, 9]
//  console.log(num.sort())
// num.toString()
// console.log(num.sort())

// num.push(67)
// console.log(num)

// num.forEach((i)=>{
//  console.log(i * i)
// })

// for(let i in num){
//     console.log(num[i])
// }

// for(let o of num){
//     console.log(o)
// }

// let num = [1, 62, 23, 4, 15, 6, 76, 58, 9, 3, 9]
// let num2 = num.map((r)=>{
//     return r * r
// })
// // console.log(num2)

// let num3 = num.filter((val)=>{
//     return val<20
// })
// // console.log(num3)

// let num4 = num.reduce((h1, h2)=>{
//         return h1 + h2
// })
// console.log(num4)

// console.log("log")
// console.error("error")
// console.info("info")
// console.warn("warning")
// console.assert("assert" != false)
// console.time()
// console.table({ok: "ok", op: "op", asap: "ASAP"})
// console.timeEnd()

// console.time()
// Num = 23
// for(let i =0; i<Num;i++){
    
//     console.log(Num[i])
// }
// console.timeEnd()

// console.time()

// Num2 = 23
// let i =0;

// while( i<Num2 ){
//     console.log(Num2[i])
//     i++
// }
// console.timeEnd()


// console.time()

// Num3 = [23,33,344,5,234,245,25,25,25,25]

// for(let i of Num3 ){
//     console.log(Num3[i])
// }
// console.timeEnd()

// prompt("Enter a Number", 56)

// let con = confirm("are you sure to want delete it")
// if(con){
//     document.write("Deleted")
// } else document.write("please allow us to make change in your account")

// let num = prompt("enter your age")
// num = Number.parseInt(num)

// if(num > 4){
//     location.href = "https://google.com"
// }

// let color = prompt("enter background color you want to change")
// document.body.style.background = color

// console.log(color)

// let runAgain = true

// while(runAgain){
//     function makeid(length) {
//         let result = '';
//         const characters = 'swg';
//         const charactersLength = characters.length;
//         let counter = 0;
//         while (counter < length) {
//           result += characters.charAt(Math.floor(Math.random() * charactersLength));
//           counter += 1;
//         }
//         return result;
//     }
    
//     // console.log(makeid(1))
    
//     let userInp = prompt("enter S W or G")
//     if(userInp == "s" && makeid(1) == "w"){
//         console.log("You win" + " computer guess water")
//     } else if(userInp == "g" && makeid(1) == "s"){
//         console.log("You win" + " computer guess snake")
//     }else if(userInp == "w" && makeid(1) == "g"){
//         console.log("You win" + " computer guess gun")
//     } else console.log("sorry you lose " + "computer guess " + makeid(1))
//         runAgain = confirm("You Want to play again")
// }
// console.log(numToStr)

// let cTitle = document.getElementById("firstCard");
// cTitle.style.color = "blue"

// let cTitle = document.querySelectorAll(".this");
// cTitle[0].style.color = "orange"

// let cTitle = document.querySelector(".this", [0]);
// cTitle.style.color = "orange"

// let cTitle = document.getElementById("firstCard");
// console.log(cTitle.matches("#firstCard"))

// Array.from(document.getElementsByTagName("li")).forEach(element => {
//     element.style.background = "red"
// });

// let jokes = [
// "What's the best thing about Switzerland? The flag is a big plus.",
// "I went to the aquarium this weekend, but I didn’t stay long. There’s something fishy about that place.",
// "I found a lion in my closet the other day! When I asked what it was doing there, it said “Narnia business.”",
// "What's a cat's favorite instrument? Purr-cussion.",
// "Why did the snail paint a giant S on his car? So when he drove by, people could say: “Look at that S car go!”",
// "What do you call a happy cowboy? A jolly rancher.",
// "What subject do cats like best in school? Hiss-tory.",
// "Humpty Dumpty had a great fall. He said his summer was pretty good too.",
// "Why should you never throw grandpa's false teeth at a vehicle? You might denture car.",
// "Why are Christmas trees bad at knitting? They always drop their needles.",
// "What did the lunch box say to the refrigerator? Don't hate me because I'm a little cooler.",
// "I can always tell when someone is lying. I can tell when they're standing too.",
// "Some people pick their nose, but I was born with mine.",
// "What's the coolest element in the periodic table? Ber-yllium",
// "I used to be afraid of speed bumps. I'm trying to get over it.",
// "If your house is cold, just stand in the corner. It’s always 90 degrees there.",
// "I don't recommend entering a wormhole. You might get stuck in the apple.",
// "The owner of the tuxedo store kept hovering over me when i was browsing, so I asked him to leave me alone. He said, “Fine, suit yourself.”",
// "Why did the egg have a day off? Because it was Fryday.",
// "Have you ever heard about the kidnapping at school? It's okay, he woke up.",
// "I found a book called How to Solve 50% of Your Problems. So I bought 2.",
// "What do Keanu Reeves and baby Yoda have in common? They age at the same rate.",
// "Why did the coffee taste like dirt? Because it was ground just a few minutes ago.",
// "Why can't you make a dinosaur omelet? Because they're egg-stinct.",
// "Why do quarterbacks tell obvious jokes? So they don't go over their receivers' heads.",
// "Why did the Rolling Stones stop making music? Because they got to bottom of the hill.",
// "What did one cupcake say to the other? You ain't see muffin yet.",
// "What is the best present? Broken drums! You can't beat them.",
// "Did you hear about the new squirrel diet? It's just nuts.",
// "I made song about tortilla once, now it's more like a wrap.",
// "Did you hear about the spatula's hot new flame? It met the grill of its dreams.",
// "What do call a criminal landing an airplane? Condescending.",
// "I decided to sell my vacuum cleaner. It was just gathering dust.",
// "I stayed up all night wondering where the sun went, and then it dawned on me.",
// "Why do people who live in Greece hate waking up at dawn? Because Dawn is tough on Greece.",
// "What falls, but never needs a bandage? The rain.",
// "I was going to tell you a joke about boxing but I forgot the punch line.",
// "I'm not a fan of spring cleaning. Let's be honest, I'm not into summer, fall, or winter cleaning either.",
// "Why did the egg hide? It was a little chicken.",
// "What did the dirt say to the rain? If you keep this up, my name will be mud!",
// "Why couldn't the sunflower ride its bike? It lost its petals.",
// "What's an egg's favorite vacation spot? New Yolk City.",
// "I ate a sock yesterday. It was very time-consuming.",
// "What kind of candy do astronauts like? Mars bars.",
// "I wanted to buy some camo pants but couldn't find any.",
// "I ordered a chicken and an egg from Amazon. I'll let you know.",
// "What month is the shortest of the year? May, it only has three letters.",
// "What did the snail who was riding on the turtle's back say? Wheeeee!",
// "I was going to tell a time traveling joke, but you guys didn't like it.",
// "What do you call a lazy kangaroo? A pouch potato.",
// "I used to run a dating service for chickens, but I was struggling to make hens meet.",
// "Why do we tell actors to break a leg? Because every play has a cast.",
// "What does a pig put on dry skin? Oinkment.",
// "What do you call it when a snowman throws a tantrum? A meltdown.",
// "What did one plate say to the other plate? Dinner's on me.",
// "Why do oranges wear sunscreen? So they don't peel.",
// "What do you call a pony with a sore throat? A little horse.",
// "What did the left eye say to the right eye? Between you and me, something smells.",
// "What did the mama tomato say to the baby tomato? Catch up!",
// "Why didn't the melons get married? Because they cantaloupe.",
// "What do you call a fake noodle? An impasta.",
// "What happens when a strawberry gets run over crossing the street? Traffic jam.",
// "Why did the cow jump over the moon? The farmer had cold hands.",
// ]
// const disJokes = ()=>{
//     let randomNum = Math.random() * 58
// let fixedNum  = randomNum.toFixed()
// let finalRes = jokes[fixedNum]
//     ihtml = ""
//     ihtml += `
// <div class="card" style="width: 30rem; height: 12rem; ">
//   <div class="card-body my-2">
//     <h5 class="card-title">JOKE</h5>
//     <p class="card-text">${finalRes}</p>
//   </div>
//   <a onclick="disJokes()" class="btn btn-primary">NEW JOKES</a>
// </div>`
// Cards.innerHTML = ihtml
// }
// disJokes()

// let a = document.getElementById("ok")
// a.setAttribute("class", "tum ok")

// document.firstElementChild.lastElementChild.firstElementChild.setAttribute("class", "working1")


// let first = first.firstElementChild

// first.setAttribute("class", "its working")



// let a = document.getElementsByTagName("div")[0]
// //  a.innerHTML += "hello World2"

// let div = document.createElement("div")
// div.innerHTML = "<h1>HELLO WORLD</h1>"
// a.appendChild(div)
// a.append(div)
// a.before(div)
// a.prepend(div)
// a.after(div)
// a.replaceWith(div)
// first.remove()


// first.className = ("yellow")

// const x = function(e){
//     console.log(e.target)
//     console.log(e)
//     // alert("working")
//     // alert("i am function 1")
// }

// // let y = function(e){
// //     alert("i am function 2")
// // }
// btn.addEventListener("click", x)
// // btn.addEventListener("click", y)

// let userImp = prompt("enter 2")
// if(userImp == "2"){
// btn.removeEventListener("click",x)
// }


// setInterval(()=>{

//     document.querySelector("#bulb").classList.toggle("bulb")
    
// }, 300)

// let a = {
//     name: "Laraib",
//     language: "JavaScript",
//     run: ()=>{
//         document.write("Self Run")
//     } 
// }

// let p = {
//     run: ()=>{
//         document.write("Run from P")
//     } 
// }


// p.__proto__ = {
//     name2: "jack"
// }
//  let c = {
//     name2: "Jack wala Oggy"
//  }
//  a.__proto__ = c


// a.run()
// console.log(a.name2)

class Railway{
    constructor(name, trainNo){
        this.name = Railway.capitilize(name) ; 
        this.trainNo = trainNo;
    }
    submitted(){
            console.log(this.name + " form is submitted for Train No " + this.trainNo)
    }

    cancel(){
        console.log(this.name + " form is canceled for Train No " + this.trainNo)
}
 static capitilize(name){
    return name.charAt(0).toUpperCase() + name.substr(1, name.length)
 }
}

let a = new Railway("aaaa")
a.submitted()

















