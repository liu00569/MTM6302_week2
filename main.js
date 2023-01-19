console.log("temLiterals")



const firstName = "Jane"

const lastName = "Doe"

const temLiterals = `My first name is: $(firstName), My last name is: $(lastName), $(2+2)`






let points = 5

let bullets = -3.5

console.log(points + bullets)

console.log(points.toPrecision(4))



let isAdmin = true

isAdmin = false

console.log(isAdmin)

const simpleList = [
"Dav", //0
 5, //1
 false, //2
 [1, 2, "three"] //3  (0,1,2)
]

console.log( simpleList[3][2] )

simpleList


const listObj = {
    name: "Alan", 
    lastName: "Doe"
}

const students = [
    {
        name: "Alan", 
        lastName: "Doe"
    },//0

    {
        name: "B", 
        lastName: "Do"
    }, //1

    {
        name: "C", 
        lastName: "D"
    } //2
]

console.log( listObj )

console.log( students[0].name + " " + students[0].lastName )


console.log("Points: " + points)

points++

console.log("Points++: " + points)




points--

console.log("Points--: " + points)


points += 10

points = points + 10

console.log("Points++: " + points)

points  == 10

console.log( points === "10" )

console.log( (students[0].name === "Alan") && ( students[0].lastName === "Doe") ) //True: both need to be true

console.log( (students[0].name === "Alan") && ( students[0].lastName === "Do") )

console.log( (students[0].name === "Alan") || ( students[0].lastName === "Do") ) // True: only need one is true