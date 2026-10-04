function studentIntroduction (student) {
    // if(typeof student !== "object"){
    //   return "Invalid"
    // }
    const keys = Object.keys(student);
    if(!keys.includes("name")|| !keys.includes("age")|| !keys.includes("course")){
      return"Invalid"
    }
    const{name,age,course} = student
    return `My name is ${name}. I am ${age} years old. I am learning ${course}.`
  }
    const result = studentIntroduction({ 
    name:"Rafi",
    age:18,
    course:"JavaScript"})

console.log(result)
const result2 = studentIntroduction({})
console.log(result2)
const result3 = studentIntroduction("student")
console.log(result3)
const result4 = studentIntroduction({"name":"Sadia","age":22,"course":"React"})
console.log(result4)
const result5 = studentIntroduction({"name":"Rafi","age":18})
console.log(result5)
// console.log({})
// console.log("student" )