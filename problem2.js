function filterActiveUsers(users) {
    if(!Array.isArray(users)|| users.length === 0 ){
        return "Invalid";
    }  

    for(const user of users){
        if(user.isActive === undefined){
            return "Invalid";
        }
    }
    const filterActivedata = users.filter(user=> user.isActive == true)
    return filterActivedata;
}


const result = filterActiveUsers(
    [
    {name:"A", isActive:true},
    {name:"B", isActive:false}
    ]
)
console.log(result)

const result2 = filterActiveUsers([])
console.log(result2)
const result3 = filterActiveUsers([{name:"A"}])
console.log(result3)
const result4 = filterActiveUsers("A")
console.log(result4)


