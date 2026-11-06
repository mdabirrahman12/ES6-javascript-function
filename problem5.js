/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    if(!Array.isArray(students)||students.length == 0|| students.length < 2)
        return "Invalid";
    // if (students.length == 0) {
    //     return "Invalid";
    // }
    const qualified = students.filter(student => student.score >= 70);
    const names = qualified.map(student=>student.name.toUpperCase());
    // return qualified;


    // const qualified = qualified.map(({ name }) => {
    //     name.toUpperCase();
    // });

    return names.slice(0, 3);
}
const result = generateLeaderboard ([{name:"Rafi",score:90},{name:"Sadia",score:65},{name:"Karim",score:85},{name:"Nafis",score:75}])
console.log(result)
const result2 = generateLeaderboard ([{name:"A",score:70},{name:"B",score:71}])
console.log(result2)
const result3 = generateLeaderboard ([])
console.log(result3)
const result4 = generateLeaderboard ("students")
console.log(result4)
const result5 = generateLeaderboard ([{name:"Rafi"}])
console.log(result5)
const result6 = generateLeaderboard ([{name:"Rafi",score:"90"}])
console.log(result6)


