
function add(x,y){
    return new Promise((resolve,reject)=>{
         if(x==null || y==null){
            reject ("Insert all value");
         } else{
            setTimeout(function(){
                resolve(x+y);
            },2000)
         }
    });
}

async function calculate(){
    try{const result = await add(10,30);
    console.log(result);}
    catch{
        console.log(error);
    }
}

function detail(){
    console.log("Hello World");
}

calculate();
detail();