const express = require('express');
const app = express();
 
//On multiple requests from clients, it doesn't consume more than 100% of CPU, i.e. one core only.
// This proves that a node process never starts another thread.
app.get('/', (req, res) => {
    while(true){
    }
res.send('Welcome to Edurekas REST API with Node.js Tutorial!!');
});
 

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));