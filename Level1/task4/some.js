function handler(event) {
  let button = event.target;
  
  let value = event.target.innerText;
  console.log(value);
  let display = document.getElementById("display");
  console.log(display);


  switch (value) {
    case "c":
     
      display.value = "";
      button.classList.add("pressed");
      
      break;

    case "del":
      if(display.value == ""||display.value == "enter operand"){
        display.value = "enter operand";
        button.classList.add("NP");
        setTimeout(()=>{
          button.classList.remove("NP"); 
        },1000); 


      }
      else{
      display.value = display.value.slice(0, -1);
      button.classList.add("pressed");}
      break;

    case "=":
      try{
      display.value = eval(display.value);
      button.classList.add("pressed");}
      catch(err){
         display.value = "Undefined"; 
      button.classList.add("NP");
      setTimeout(()=>{
        button.classList.remove("NP"); 
      },1000);
      }
      break;
    case "Ac":
      display.value = "";
      button.classList.add("pressed");
      break; 


    default:
      display.value += value;
      button.classList.add("pressed");

  }
 

  // Add a delay to remove the "pressed" class after a short time
  setTimeout(() => {
    if(display.value == "cant determine"){
       button.classList.remove("NP"); 
    }
    else{
    button.classList.remove("pressed");}

  }, 1000);
}




let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {

  button.addEventListener("click", handler);
});


