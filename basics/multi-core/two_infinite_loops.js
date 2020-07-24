/**
 * 
 * If you run this, it will print "In callback" only once and only 1 core would be shown busy in "htop". 
 * So, you can see that only one thread and one processor. No use of multi-core CPU.
 * 
 */
const fs = require("fs")

fs.readFile("/home/anuragshrinagar/test",callback)
fs.readFile("/home/anuragshrinagar/test",callback)


function callback(){
    console.log("In callback")
    while(true){
        
    }
}

