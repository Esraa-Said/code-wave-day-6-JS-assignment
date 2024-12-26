let array = [];
function takeInput(){
  alert("This Program is to make some mathematical operations");
  console.log("This Program is to make some mathematical operations");
  alert("Enter Three Values");
  let i=1;
  while(i<=3){
    let value = parseFloat(prompt(`Enter The Value no (${i})`));
    if(!value || isNaN(value))
        return 0;
    array.push(value);
    i++;
  }
  return 1;
}


const flag = takeInput();
if(flag){
  let sum = array[0] + array[1] + array[2];
  let mul = array[0] * array[1] * array[2];
  let div = array[0] / array[1] / array[2];
  alert(`Adding -- Multiplying -- and Dividing 3 values\n
    sum of the 3 values ${array[0]}+${array[1]}+${array[2]} = ${sum}\n
    multiplication of the 3 values ${array[0]}*${array[1]}*${array[2]} = ${mul}\n
    division of the 3 values ${array[0]}/${array[1]}/${array[2]} = ${div}
    `);
    console.log(`Adding -- Multiplying -- and Dividing 3 values\n
    sum of the 3 values ${array[0]}+${array[1]}+${array[2]} = ${sum}\n
    multiplication of the 3 values ${array[0]}*${array[1]}*${array[2]} = ${mul}\n
    division of the 3 values ${array[0]}/${array[1]}/${array[2]} = ${div}
    `);
  

}
else{
  alert("You Entered Invalid Value");
  console.error("You Entered Invalid Value");
}




