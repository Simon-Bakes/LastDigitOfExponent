function power(){
    let z = +document.getElementById("power1").value;
    let y = +document.getElementById("power2").value;
    let x = Math.floor(z % 10);

    let output = "";

    if(y==0){
           output+="1"; 
    }else if(x==1){
      switch(1%y){
        default:
            output+="1"; 
      } 
    }else if(x==2){
      switch(Math.pow(x, y)%10){
        case 2:     
            output+="2";
            break;
        case 4:
            output+="4";
            break;
        case 6:
            output+="6";
            break;
        case 8:
            output+="8";
            break;
      }
    }else if(x==3){
      switch(Math.pow(x, y)%10){
        case 1:
            output+="1";
            break;
        case 3:
            output+="3";
            break;
        case 7:
            output+="7";
            break;
        case 9:
            output+="9";
            break;
      }
    }else if(x==4){
      switch(Math.pow(x, y)%10){
        case 4:
            output+="4";
            break;
        case 6:
            output+="6";
            break;  
      }
    }else if(x==5){
      switch(y){
        default:
            output+="5"; 
      }      
    }else if(x==6){
       switch(y){
        default:
            output+="6";
      }       
    }else if(x==7){
      switch(Math.pow(x, y)%10){
        case 3:
            output+="3";
            break;
        case 7:
            output+="7";
            break;
        case 9:
            output+="9";
            break;
      }  
    }else if(x==8){
     switch(Math.pow(x, y)%10){
        case 2:
            output+="2";
            break; 
        case 4:
            output+="4";
            break; 
        case 6:
            output+="6";
            break; 
        case 8:
            output+="8";
            break; 
      }   
    }else if(x==9){
      switch(y){
        default:
            output+="9";
      }
    }else if(x==0){
      output+="0";
    }
    document.getElementById("output").innerHTML = "The last digit of "+z+"<sup>"+y+"</sup> is: " +output;
}