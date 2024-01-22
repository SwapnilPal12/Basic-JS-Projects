const form= document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const weight= parseInt(document.querySelector('#weight').value);
    const height= parseInt(document.querySelector('#height').value);
    const results= document.querySelector("#results");

    if(weight==="" || isNaN(weight) || weight<0){
        results.innerHTML=`Enter a Number to Continue!!!`
    }
    else if(height==="" || isNaN(height) || height<0){
        results.innerHTML=`Enter a Number to Continue!!!`
    }
    else {
        const bmi = ((weight)/((height*height)/10000)).toFixed(2);
        results.innerHTML=`<span>${bmi}</span>`;
    }
   
    
})

