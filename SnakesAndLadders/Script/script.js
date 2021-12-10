
function beginning(){
    let players = [];
    let position = [0 ,0];
    let position2 = [0,0,0];
    let position3 = [0,0,0,0];
    let goto = [];
    goto[3]=25;
    goto[6]=5;
    goto[14]=23;
    goto[18]=2;
    goto[20]=50;
    goto[29]=10;
    goto[31]=45;
    goto[37]=24;
    goto[47]=14;
    goto[54]=44;
    goto[57]=77;
    goto[68]=73;
    goto[62]=51;
    goto[70]=66;
    goto[78]=97;
    goto[88]=65;
    goto[85]=95;
    goto[92]=84;
    goto[98]=57;

    nemberOfPlayer = document.getElementById("beginning");
    nemberOfPlayer.style.display="block";


    document.getElementById("player2").onclick = ()=>{
        nemberOfPlayer.style.display="none";
        players = selectColor(2);

        
        let Turn = [true , false];

        document.getElementById("ok").onclick = ()=>{
        
          
            let num = Math.floor(Math.random()*5+1);
            document.getElementById("show").innerHTML = num;
            
            for(let i=0 ; i<players.length ; i++){
               
                if(Turn[i] === true){
                    
                    if(i === 1){

                        Turn[1]=false;
                        Turn[0]=true;
                    }else{
                        
                        Turn[0]=false;
                        Turn[1]=true;
                    }
                    
                    if( num + position[i] <= 100){
                        let lastPosition = position[i];
                        position[i] = num + position[i];
                        let strNum = position[i].toString();
                        let lastStrNum = lastPosition.toString();
                    
   
                        if( goto[position[i] -1] !== undefined){
                            position[i] = goto[position[i] -1];
                            strNum = position[i].toString();
                            alert("goto"+position[i]);
                        }    
                        
                        switch(players[i]){
                            case "Red-walking" : 
                            if(lastStrNum > 0)
                            document.getElementById(lastStrNum).innerHTML='';
                            document.getElementById(strNum).innerHTML='<span id="Red-walking"><i class="fas fa-walking"></i></span>';
                            if(position[i] === 100){
                                alert("Red is winner");
                                return true;
                            }
        
                            break;
                            case "Blue-walking" :
                                if(lastStrNum > 0)
                                document.getElementById(lastStrNum).innerHTML='';
                                document.getElementById(strNum).innerHTML='<span id="Blue-walking"><i class="fas fa-walking"></i></span>';
                                if(position[i] === 100){
                                    alert("Blue is winner");
                                return true;
                                }
                            break;
                            case "Green-walking" : 
                                if(lastStrNum > 0)
                                document.getElementById(lastStrNum).innerHTML='';
                                document.getElementById(strNum).innerHTML='<span id="Green-walking"><i class="fas fa-walking"></i></span>';
                                if(position[i] === 100){
                                    alert("Green is winner");
                                return true;
                                }
                            break;
                            case "Yellow-walking" : 
                                if(lastStrNum > 0)
                                document.getElementById(lastStrNum).innerHTML='';
                                document.getElementById(strNum).innerHTML='<span id="Yellow-walking"><i class="fas fa-walking"></i></span>';
                                if(position[i] === 100){
                                    alert("Yellow is winner");
                                return true;
                                }
                            break;
                        }

                    } 

                    break;
                }
            }
        }
        
    }


    //----------------
    document.getElementById("player3").onclick = ()=>{
        nemberOfPlayer.style.display="none";
        players = selectColor(3);

        let Turn = [true , false ,false];

        document.getElementById("ok").onclick = ()=>{
        
          
            let num = Math.floor(Math.random()*5+1);
            document.getElementById("show").innerHTML = num;
            
            for(let i=0 ; i<players.length ; i++){
               
                if(Turn[i] === true){
                    
                    if(i === 2){
                      
                        Turn[2]=false;
                        Turn[0]=true;
                    }else{  
                        Turn[i]=false;
                        Turn[i+1]=true;
                    }
                    
                    if( num + position2[i] <= 100){
                        let lastPosition = position2[i];
                        position2[i] = num + position2[i];
                        let strNum = position2[i].toString();
                        let lastStrNum = lastPosition.toString();
                    
                        if( goto[position2[i] -1] !== undefined){
                            position2[i] = goto[position2[i] -1];
                            strNum = position2[i].toString();
                            alert("goto"+position2[i]);
                        }    

                        switch(players[i]){
                            case "Red-walking" : 
                                if(lastStrNum > 0)
                                document.getElementById(lastStrNum).innerHTML='';
                                document.getElementById(strNum).innerHTML='<span id="Red-walking"><i class="fas fa-walking"></i></span>';
                                if(position2[i] === 100){
                                    alert("Red is winner");
                                    return true;
                                }   
                            break;
                            case "Blue-walking" :
                                if(lastStrNum > 0)
                                document.getElementById(lastStrNum).innerHTML='';
                                document.getElementById(strNum).innerHTML='<span id="Blue-walking"><i class="fas fa-walking"></i></span>';
                                if(position2[i] === 100){
                                    alert("Blue is winner");
                                return true;
                                }
                            break;
                            case "Green-walking" : 
                                if(lastStrNum > 0)
                                document.getElementById(lastStrNum).innerHTML='';
                                document.getElementById(strNum).innerHTML='<span id="Green-walking"><i class="fas fa-walking"></i></span>';
                                if(position2[i] === 100){
                                    alert("Green is winner");
                                return true;
                                }
                            break;
                            case "Yellow-walking" : 
                                if(lastStrNum > 0)
                                document.getElementById(lastStrNum).innerHTML='';
                                document.getElementById(strNum).innerHTML='<span id="Yellow-walking"><i class="fas fa-walking"></i></span>';
                                if(position2[i] === 100){
                                    alert("Yellow is winner");
                                return true;
                                }
                            break;
                        }

                    } 

                    break;
                }
            }
        }
        
    }


    //----------------
    document.getElementById("player4").onclick = ()=>{
        nemberOfPlayer.style.display="none";
        players = selectColor(4);

        let Turn = [true , false , false ,false];

        document.getElementById("ok").onclick = ()=>{
        
          
            let num = Math.floor(Math.random()*5+1);
            document.getElementById("show").innerHTML = num;
            
            for(let i=0 ; i<players.length ; i++){
               
                if(Turn[i] === true){
                    
                    if(i === 3){
                      
                        Turn[3]=false;
                        Turn[0]=true;
                    }else{
                        
                        Turn[i]=false;
                        Turn[i+1]=true;
                    }
                    
                    if( num + position3[i] <= 100){
                        let lastPosition = position3[i];
                        position3[i] = num + position3[i];
                        let strNum = position3[i].toString();
                        let lastStrNum = lastPosition.toString();
        
                        if( goto[position3[i] -1] !== undefined){
                            position3[i] = goto[position3[i] -1];
                            strNum = position3[i].toString();
                            alert("goto"+position3[i]);
                        } 
        
                        switch(players[i]){
                            case "Red-walking" :
                                if(lastStrNum > 0) 
                                document.getElementById(lastStrNum).innerHTML='';
                                document.getElementById(strNum).innerHTML='<span id="Red-walking"><i class="fas fa-walking"></i></span>';
                                if(position3[i] === 100){
                                    alert("Red is winner");
                                    return true;
                                }  
                            break;
                            case "Blue-walking" :
                                if(lastStrNum > 0)
                                    document.getElementById(lastStrNum).innerHTML='';
                                    document.getElementById(strNum).innerHTML='<span id="Blue-walking"><i class="fas fa-walking"></i></span>';
                                    if(position3[i] === 100){
                                        alert("Blue is winner");
                                        return true;
                                    }
                            break;
                            case "Green-walking" : 
                                if(lastStrNum > 0)
                                    document.getElementById(lastStrNum).innerHTML='';
                                    document.getElementById(strNum).innerHTML='<span id="Green-walking"><i class="fas fa-walking"></i></span>';
                                    if(position3[i] === 100){
                                        alert("Green is winner");
                                        return true;
                                    }
                            break;
                            case "Yellow-walking" : 
                                if(lastStrNum > 0)
                                    document.getElementById(lastStrNum).innerHTML='';
                                    document.getElementById(strNum).innerHTML='<span id="Yellow-walking"><i class="fas fa-walking"></i></span>';
                                    if(position3[i] === 100){
                                        alert("Yellow is winner");
                                        return true;
                                    }
                            break;
                        }

                    } 

                    break;
                }
            }
        }
        
    }
}


/*------------------*/

function selectColor(num){
    let flag = 0;
    let RedPlarer = false;
    let bluePlayer = false;
    let greenPlayer = false;
    let yellowPlayer = false;
    let players=[];
    
    ColorOfPlayer = document.getElementById("beginning2");
    ColorOfPlayer.style.display="block";
    document.getElementById("playerRed").onclick = ()=>{
        if(RedPlarer === false){    
            players[flag] = "Red-walking";
            flag++;
          
            if(innerFunction())
                return players;
            RedPlarer = true;
        }        
    }

    document.getElementById("playerBlue").onclick = ()=>{
        if(bluePlayer === false){
            players[flag] = "Blue-walking";
            flag++;
           
            if(innerFunction())
                return players;
            bluePlayer= true;
        }        
    }

    document.getElementById("playerGreen").onclick = ()=>{
        if(greenPlayer === false){   
            players[flag] = "Green-walking";
            flag++;
            
            if(innerFunction())
                return players;
            greenPlayer = true;
        }        
    }

    document.getElementById("playerYellow").onclick = ()=>{
        if(yellowPlayer === false){
            players[flag] = "Yellow-walking";
            flag++;
          
            if(innerFunction())
                return players;
            yellowPlayer = true;
        }        
    }
   
    function innerFunction(){
        if(flag === num){
            ColorOfPlayer.style.display="none";
            document.getElementById("main").style.display = "block";
            return true;
        }
    }
    return players;
}

/*------------------------------*/


beginning();