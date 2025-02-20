var a = []
// a[1]="umair"
// console.log(a)
a.push("abid")
console.log(a)
a.unshift("shakeel")
console.log(a)
a[2]= "aqeel"
console.log(a)
a.splice(3,0,"umair","nabeel","sharjeel")
console.log(a)
a.pop()
console.log(a)
a.shift()
console.log(a)
a.unshift("one")
console.log(a)
a[3]="two"
console.log(a)
a.splice(2,1,"three","four","six","seven")
console.log(a)
// a.slice(1,3)
var b = a.slice(1,5)
console.log(b)
// a[2]= b
console.log(a)
console.log(a.length)
a.splice(3,0,"awais")
console.log(a)
console.clear()

for (var i = 10; i > 0; i-=2) {
    // var num = i*2
    console.log(i,"===lop");
}


// var student =["ahmad","umair","adeel","aqeel"]
// console.log(student[2])
// var iteration = 0
// console.log(student[iteration])

// for (i = 0;i<=student.length;i+=2){
//     var num = i*6
//     console.log(i,num)
// }

// var numbers = [2,4,6,7,8,5,0,9,11,12,13]
// for (var i = 0;i< numbers.length;i++){
//     if(numbers[i]== 5){
//         console.log(i,"index found")
//         break;
//     }
//     // console.log(numbers[i])
// }

var shops = ["gulkhan","rajput","chohan","motiwala","cholywala"]
var pocketMoney = 0;
// for (i=0; i<shops.length;i++){
//     if(shops[i]== "chohan"){
//         console.log(i,"index found")
//     }
// }
for(i=0;i<shops.length;i++){
    if(shops[i]=="motiwala"){
        console.log(i,"index found",)
        continue;
    }
    pocketMoney += 100;
}
console.log(pocketMoney)



// var isStudent = prompt("are u student")
// var inLower = isStudent.toUpperCase()
// if(inLower ==="YES"){
    // console.log(isStudent,inLower,"welcome")
// }
// var isMarried = prompt("Enter Yes Or No")
// var isMarriedInLower = isMarried.toLowerCase()
// var isMarriedInLower = isMarried.toUpperCase()
// if (isMarriedInLower === "YES") {
    // console.log(isMarried, isMarriedInLower, "Welcome ")
// }

console.clear()
// var a = [2,4,6,7,8,5,0,9,11,12,13]
// for (var i=0;i<a.length;i++){
//     console.log(i,a[i])
// }
// var iteration = 0
// console.log(a[iteration])

// iteration++
// console.log(a[iteration])



var obtainValue = prompt("Enter value")
for (var i = 1; i <= 10; i++ ){
       var tableValue = obtainValue*i
console.log(i,"X",obtainValue,"=",tableValue)

}








