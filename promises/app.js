// const a = prompt("number")
// const b = prompt('number')
// // if (isNaN(a) || isNaN(b)){
// //     throw console.error("sorry this not alllow");

// // }
// // const x = 6
// const c = parseInt(a) + parseInt(b)
// // console.log(c)
// try {
//     console.log(c*x)

// } catch (eror) {
//     console.log("error agaya bhai")
// }
// console.log(eror)


// try catch settime k function me kam nhi kry gaa
// try {

//         const a = "u"
//         const b = "g"
//         console.log(a+b*x)

// } catch (error) {
//     console.log("eror agaya")
// }


// function main() {
//     try {
//         const a = "5"
//         const b = "5"
//         const c = a+b*x
//         return c

//     } catch (error) {
//         console.log("eroor agaya")
//         // return false
//     }
//     finally{
//        console.log("files is closed")
//     }
//     }
// finnaly function l ander kM KRTA HAI q k func mein return k bad koi code kam nhi krta
// main()


// call back hell 



// function add(a,b ,callBack){
//     // let result = a+b
//     return callBack(a,b)

// }
// function name (num1,num2){
//     return num1+num2
// }

// const b = add(6,7,name)
// const c = add(10,6,(num1,num2) => num1-num2)
// const d = add(4,5,(num1,num2) => num1*num2)
// console.log(b,c ,d)

// const b = add(6,7,name)
// const c = add(10,6,(num1,num2) => num1-num2)
// const d = add(4,5,(num1,num2) => num1*num2)
// console.log(b,c ,d)
// call backHell



// function getChese(){
//     setInterval(() => {
//         let cheese = "cheese agai"
//         console.log("chesse agai",cheese)
//         return cheese
//     }, 3000);
// }
// getChese()


// function getChese (cb){
//     let chese = undefined
//     setTimeout(() => {
//         chese = "chese"
//         console.log(chese, "====> chese agai")
//         cb(chese)
//     }, 3000);
// }
// function getdough(chese,cb){
//     setTimeout(()=>{
//         let dough = "dough"
//         console.log(dough, "====dough aagai>")
//         cb(dough)
//     },3000)
// }
// getChese((chese)=>{
//     getdough(chese,(dough) => {

//     })
// })




// setTimeout(() => {
//     // // // //     console.log("RUN")
//     // // // // },3000)
// function getWater(cb) {
//     let water = undefined
//     setTimeout(() => {
//         water = "adha kilo"
//         console.log(water, "===> water agya")
//         cb()
//     }, 3000)
// }
// function getSugar(cb) {
//     let sugar = undefined
//     setTimeout(() => {
//         sugar = "adha kilo"
//         console.log(sugar, "===> sugar agyi")
//         cb()
//     }, 3000)
// }
// function getDahi(cb) {
//     let dahi = undefined
//     setTimeout(() => {
//         dahi = "adha kilo"
//         console.log(dahi, "==> dahi agyi")
//         cb()
//     }, 3000)
// }
// function lassiBnao() {
//     let lassi = undefined
//     setTimeout(() => {
//         lassi = "1.75l"
//         console.log(lassi, "==> lassi bn gyi")
//     }, 3000)
// }

// getDahi(() => {
//     getSugar(() => {
//         getWater(lassiBnao)
//         alert
//     })
// })
// getDahi(() => {
//     getSugar(() => {
//         getWater(lassiBnao)
//     })
// })

// function getMilk(cb) {
//     setTimeout(() => {
//         const milk = "d0dh agaya"
//         console.log("20kg", milk)
//         cb()
//     }, 2000);
// }
// function getAlmonds(cb) {
//     setTimeout(() => {
//         const badam = "badam agaye"
//         console.log("2kg", badam)
//         cb()
//     }, 2000)
// }
// function getFlavour(cb) {
//     setTimeout(() => {
//         let flavour = "flavour agaya"
//         console.log("1kg", flavour)
//         cb()
//     },2000)
// }
// function getRabri(){
//     setTimeout(() => {
//         const rabri = "rabri bangai"
//         console.log("20kg",rabri, '===> good work👏')
//     }, 2000);
// }
// // getMilk()
// getMilk(() => {
//     getAlmonds(() => {
//         getFlavour(()=>{
//             getRabri()

//         })
//     })
// })



// const a = [1,2,4,5,3,6,8,7,9]
// function numbers(num){
//     return num > 2
// }
// const findNUM = a.find(numbers,a)
// console.log(findNUM)
// const filterNum = a.filter(numbers,a)
// console.log(filterNum)

// const b = a.map(function(elements,index,arr){
// console.log(elements,index,arr)
// return elements + 1
// })
// console.log(b)

// const c = a.filter(function(elements,index,arr){
//     console.log(elements,index,arr)
//     return elements > 1
// })
// console.log(c)
// let name = "usecase"
// const d = a.forEach((element,index ,arr)=>{
//           console.log(element,index,arr)
//           name += element
//          }
// )
// // console.log(d)
// console.log(name,a)
// // const e = a.fill(2,3,7)
// console.log(a)
// console.log(e)




// const students = [
// {id:1, name:"shakel",time:"6-9"},
// {id:2, name:"aqeel",time:"6-9"},
// {id:3, name:"aqeel",time:"7-9"},

// ]
// const student = students.find((student,index)=>{
//     return student.id === 1
// })
// console.log(student)
// const student1 = students.find((student)=>{
//     return student.name === "aqeel"
// })
// console.log(student1)
// const student2 = students.findIndex(student=> student.id=== 2)
// console.log(student2)



// const student3 = students.find(student => student.name === "aqeel")
// console.log(student3)
// console.log(students.findIndex(student =>student.id === 3 ))





// const y = [2,3,4,5,6,7,8,9]
// function add(num){
//     return num + 1

// }
// console.log(y.map(add))
// console.log(y.map((elements,index,array)=>{
//     console.log(elements,index)
//     return elements+2
// }))
// console.log(a.filter((elements,index,arr)=>{
//     return elements > 4
// }))
// console.log(a.find((element => element === 4)))
// console.log(a.findIndex((element => element === 4)))




// function add(a,b,cb){
//     return a+b
//     cb(a,b)
// }
// const b = add(4,5,(num1,num2)=>{return num1+num2})
// console.log(b)



// function prom1(){
//     return new Promise((res,rej)=>{
//         let a = Math.random()
//         if(a> 0.5){
//             rej("error agaya bhai")
//         }else{

//             setTimeout(() => {
//                 console.log('i am done');
//                 res("harry")
//             }, 3000);
//         }
//     })

// }
// prom1().then((name)=>{
//     console.log(name)
// }).catch((err)=>{
//     console.log(err);

// }) 


// const rabri = (item)=>{
// return new Promise ((res)=>{
//     setTimeout(() => {
//         console.log(item ,"<=====");
//         res("good")
//     }, 2000);
// })
// }
// rabri("pani agaya")
// .then((fb)=>{console.log(fb);
//     rabri('baraf agai')
//     .then((fb)=>{
//         console.log(fb);
//         rabri('flavour b agaya')
//         .then((fb)=>{
//             console.log(fb)

//         })
//     })
// })


// const rabri2 = (item) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(item)
//             resolve()
//         }, 2000);
//     })
// }
// rabri2("dodh agaya")
//     .then(() => {
//         rabri2("baraf agai")
//             .then(() => {
//                 rabri2("flaovour agaya")
//                     .then(() => {
//                         rabri2("rabri ban gai 👏")
//                     })
//             })
//     })


const func = async (data)=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(data)
            resolve("successful")
        }, 2000);
        
    })
}
async function getdata(){
     await func("pani agaya")
     await func("milk agaya")
     await func("flavour agaya")
     await func("rabri bangai")
    
    
}
getdata()

// console.log("fetching data...")
// func('data 1 >><<').then((val)=>{
//     console.log(val)
// console.log("fecthing daa.....")
//     func("data 2").then((val)=>{
// console.log(val)
//     })
// })







