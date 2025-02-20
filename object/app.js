// const myobj = {
//     name:"umair",
//     fname:"muhammad arif",
//     greet: function(){
//         console.log(this.name + " " + "hello")
//     }
// }
// console.log(myobj)
// myobj.greet()
// myobj.name = "abid"
// myobj.greet()
// Object.freeze(myobj)
// myobj.name = "rajput"
// myobj.greet()
// myobj.greet()
// function greet(){
//     console.log("hello"+" "+ this.name )
// }
// greet()

// function student(name,fname){
//     this.name = name
//     this.fname = fname
//     this.greet = greet
// }
// const student1 = new student("abc","def")
// student1.greet()



// const student1 = {a:1,b:"abc"}

// const student2 = {a:2,b:"abcd"}
// // const newObj = {...student1,...student2}
// const newObj = Object.assign({},student1,student2)
// console.log(newObj)
// const myarr  = [student1,student2]
// console.log(myarr)
// const myOBjj = Object.values(student1)
// console.log(myOBjj)
// for (let i = 0;i<myOBjj.length; i++){
//     console.log(myOBjj[i])
// }

// console.log(location.href)
// console.log(location.hostname, "===hostname");
// console.log(location.pathname);
// console.log(location.hash, "===hash");
// // location.reload()
// location.href = "https://youtube.com"
const a = 1


// try {
//         console.log("run before")
//         console.log(a);
//         console.log("run")
//         // extra
//     } 
//     catch (err) {
//         alert("Something went wrong")
//         console.warn(err, "===err")
//     }
    // console.log("b")
    // throw new Error("This is my error")




    const myarr = [1,2,3,4,55,66]
    // const a1 = myarr.map((a,b,myarr)=> {
    //     console.log(a,b,myarr)
       
    //    if(a < 55){
    //     return "a"+a
    //    }else{
    //     return a
    //    }

    // })
    // console.log(a1)




    const filter = myarr.filter((element,index,myarr) =>{
console.log(element,index,myarr)
return element > 1
    })
    console.log(filter)

    