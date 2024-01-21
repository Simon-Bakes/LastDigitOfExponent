function power(){
    let z = +document.getElementById("power1").value;
    let y = +document.getElementById("power2").value;
    let x = Math.floor(z % 10);

    let output = "";

    if(x==0){
           output+="0"; 
    }else if(x==1 || x==5 || x==6){
            output+=x;
    }else{
      switch(x){
        case 2:
      switch(y%4){
        case 0:
            output+="6";
            break;
        case 1:
            output+="2";
            break;
        case 2:
            output+="4";
            break;
        case 3:
            output+="8";
            break;
      }
      break;
    case 3:
      switch(y%4){
        case 0:
            output+="1";
            break;
        case 1:
            output+="3";
            break;
        case 2:
            output+="9";
            break;
        case 3:
            output+="7";
            break;
      }
      break;
    case 4:
      switch(y%2){
        case 0:
            output+="6";
            break;
        case 1:
            output+="4";
            break;  
      }   
      break;     
    case 7:
      switch(y%4){
        case 0:
            output+="1";
            break;
        case 1:
            output+="7";
            break;
        case 2:
            output+="9";
            break;
        case 3:
            output+="3";
            break;
      }  
      break;
    case 8:
     switch(y%4){
        case 0:
            output+="6";
            break; 
        case 1:
            output+="8";
            break; 
        case 2:
            output+="4";
            break; 
        case 3:
            output+="2";
            break; 
      } 
      break;  
    case 9:{
      switch(y%2){
        case 0:
            output+="1";
            break; 
        case 1:
            output+="9";
            break; 
      }}
      break;
    }
      }
    document.getElementById("output").innerHTML = "The last digit of "+z+"<sup>"+y+"</sup> is: " +output;
    }