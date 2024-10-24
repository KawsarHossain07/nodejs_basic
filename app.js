const express = require('express');
const app= express();

const port=3004;

const data= [];

app.use(express.json());


app.post('/add',(req,res)=>{
    const {firstname, lastname} = req.body;

    data.push({firstname,lastname});

    res.json({
        data:{
            firstname,
            lastname
        }
    });
});

app.get('/take',(req,res)=>{
    const users =[];

      for(let user of data){          
         users.push({fullname:`${user.firstname} ${user.lastname}`});
      }
      res.json({users});
});

app.listen(port,()=>{
    console.log(`Server is running at port: ${port}`);
});




// const getSum = require('./test')

// const res = getSum(10,20)
// console.log(res)



// const fs  = require('fs');
// const EventEmitter = require ('events');
// const mango = require('./people');
// console.log(mango)

// const emitter  = new EventEmitter();
// emitter.on('bellRing',()=>{
//          console.log('Start Running!!!!');
// });

// emitter.emit('bellRing');

// fs.writeFileSync('myfile.txt', 'Hello People');

// fs.appendFileSync('myfile.txt',', I hate Summer');



