
let x=0;

const limit = Math.pow(10,10)
const start = new Date().getTime()

for(let i=0; i< limit; i++){
    x +=1
}
const total = new Date().getTime() - start
console.log(x)
console.log("Total time spent ",total)