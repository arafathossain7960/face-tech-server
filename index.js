const app = require('./app');
const PROT = process.env.PROT || 5000;

app.listen(PROT, ()=>{
    console.log(`the server is running on ${PROT}`)
})

