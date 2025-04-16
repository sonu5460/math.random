
let result='null'


// main function in which all element called and logical operation perform
function main(){


let number=Math.floor(Math.random()*(30-1)+1);
let number2=Math.floor(Math.random()*(20-1)+1);
const operator=['+','-','/','*'];
let op2=operator[Math.floor(Math.random()*operator.length)];


let operation=`${number} ${op2}${number2}`;
// value store in result after performing logic operator (+,-,*,/)

  result=eval(operation);

console.log(operation);
console.log(result)

let value=document.querySelector(".div")
value.innerText=operation

// all user input or answere is stored in input.value

let input=document.querySelector("#in");
input.value='';

let output=document.querySelector(".output")

let next=document.querySelector(".next")

return { number, number2, op2, result };

}

// submit button 

document.querySelector("#button").addEventListener("click",()=>
{
  
    let input=document.querySelector("#in");

let output=document.querySelector(".output")
let next=document.querySelector(".next");

    const useranswer=parseFloat(input.value)
    if(!isNaN(useranswer))
    {
   if(useranswer===result)
   {
    console.log("true")
    output.innerText = "✅ Correct!";
    output.style.color = "green";
   }
   else{
    console.log("false")
    output.innerText = "❌ Try again";
    output.style.color = "red";
   }
}

// to reset the game 

  setTimeout(()=>{
    

    const useranswer=parseFloat(input.value)

   
   
    if(!isNaN(useranswer))
    {
   if(useranswer===result)
   {
    
    output.innerText = "";
    output.style.color = "";
   }
   else{
    
    output.innerText = "";
    output.style.color = "";
   }
}
main();

  },1500)

})

 main();

// buttonn to gate new or another game value
 document.querySelector("#new").addEventListener("click",()=>{
    main();
    
 })







