let numbers = [1, 5, 67, 14, 34, 21, 80, 7, 9, 28, 44, 23, 12, 10, 63, 102]


/* let summa = numbers.reduce((a, b) => a + b, 0)
document.write(summa) */


// let summa = (numbers.reduce((a, b) => a + b, 0)) / numbers.length


/* let i = 0
let max = numbers[0]
while (i < numbers.length) {
  if (numbers[i] > max) {
    max = numbers[i]
  }
  i++
}

let max= Math.max(...numbers)
let min= Math.min(...numbers)

document.write(numbers.indexOf(63))

numbers.unshift(10, 20, 30, 40)

let middle = Math.floor(numbers.length /2 -1 )
numbers.splice(middle,3)

upp8


upp.9
let newnr = numbers.filter(x => x > 18)
upp10
let newnr = numbers.slice(1,7)
upp11
numbers.reverse()
numbers.sort((a,b) => b-a)
upp12
let newnr = [...numbers]

newnr.sort((a, b) => a - b)
*/

let middle = Math.floor(numbers.length /2 -1)
let byt = numbers.slice(0,4)

numbers.splice(0, 3)
numbers.splice(middle,0,byt)

document.write(numbers)






