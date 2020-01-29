// function currentLine(line){
//   if (line.length === 0){
//   return "The line is currently empty."
// }
// const numbersAndNames = []
// for (let i = 0, i < line.length; i++){
// numbersAndNames.push(`${i+1}. ${line[i]}`)
// }
// return `The line is currently: ${numbersAndNames.join(', ')}`
// };
//
// function nowServing(line){
//   if (line.length === 0){
//     return "There is nobody waiting to be served!"
//   }
//   return `Currently serving ${line.shift()}.`
// };

let counter = 0
let newLine = []
function takeANumber(newLine){
  counter++
  newLine.push(counter)
  console.log("line", newLine)
  console.log("Take a number", `Welcome. You are number ${counter} in line.`)
};
