function main(){  
  
   let arr = [];
   let flag = false;
   let home = document.getElementsByTagName("button");

   home[0].onclick = ()=>{

      if(arr[0] === undefined){
         if(flag === false)
         home[0].style.backgroundColor = "#4d2600";
         else
         home[0].style.backgroundColor = "#ff8000";

         arr[0]=flag;
         flag = !flag;

         if(FindWinner(arr))
            return true;
      }
   }
   //--------
   home[1].onclick = ()=>{

      if(arr[1] === undefined){
         if(flag === false)
         home[1].style.backgroundColor = "#4d2600";
         else
         home[1].style.backgroundColor = "#ff8000";

         arr[1]=flag;
         flag = !flag;

         if(FindWinner(arr))
            return true;
      } 
   }
   //---------
   home[2].onclick = ()=>{

      if(arr[2] === undefined){
         if(flag === false)
         home[2].style.backgroundColor = "#4d2600";
         else
         home[2].style.backgroundColor = "#ff8000";

         arr[2]=flag;
         flag = !flag;

         if(FindWinner(arr))
            return true;
      }      
   }
   //--------
   home[3].onclick = ()=>{

      if(arr[3] === undefined){
         if(flag === false)
         home[3].style.backgroundColor = "#4d2600";
         else
         home[3].style.backgroundColor = "#ff8000";

         arr[3]=flag;
         flag = !flag;

         if(FindWinner(arr))
            return true;
      }   
   }
   //-------- 
   home[4].onclick = ()=>{

      if(arr[4] === undefined){
         if(flag === false)
         home[4].style.backgroundColor = "#4d2600";
         else
         home[4].style.backgroundColor = "#ff8000";

         arr[4]=flag;
         flag = !flag;

         if(FindWinner(arr))
            return true;
      }   
   }
   //---------
   home[5].onclick = ()=>{

      if(arr[5] === undefined){
         if(flag === false)
         home[5].style.backgroundColor = "#4d2600";
         else
         home[5].style.backgroundColor = "#ff8000";

         arr[5]=flag;
         flag = !flag;

         if(FindWinner(arr))
            return true;
      }   
   }
   //-----------
   home[6].onclick = ()=>{

      if(arr[6] === undefined){
         if(flag === false)
         home[6].style.backgroundColor = "#4d2600";
         else
         home[6].style.backgroundColor = "#ff8000";

         arr[6]=flag;
         flag = !flag;

         if(FindWinner(arr))
            return true;
      }   
   }
   //-----------
   home[7].onclick = ()=>{

      if(arr[7] === undefined){
         if(flag === false)
         home[7].style.backgroundColor = "#4d2600";
         else
         home[7].style.backgroundColor = "#ff8000";

         arr[7]=flag;
         flag = !flag;

         if(FindWinner(arr))
            return true;
      }   
   }
   //-----------
   home[8].onclick = ()=>{

      if(arr[8] === undefined){
         if(flag === false)
         home[8].style.backgroundColor = "#4d2600";
         else
         home[8].style.backgroundColor = "#ff8000";

         arr[8]=flag;
         flag = !flag;

         if(FindWinner(arr))
            return true;
      }   
   }


   function FindWinner(arr){
   
      for(let i=0 ; i<9 ; i= i+3){
         if(arr[i] === arr[i+1]){
            if(arr[i] === arr[i+2]){
               if(arr[i] === false || arr[i]=== true){
                  if(arr[i] === false)
                     alert("!! Brown is winner !!");
                  else   
                     alert("!! Orange is winner !!");

                  return true;  
               }
            }
         }
      }

      for(let i=0 ; i<3 ; i++){
         if(arr[i] === arr[i+3]){
            if(arr[i] === arr[i+6]){
               if(arr[i] === false || arr[i]=== true){
                  if(arr[i] === false)
                     alert("!! Brown is winner !!");
                  else   
                     alert("!! Orange is winner !!");

                  return true;  
               }
            }
         }
      }

      if(arr[0] === arr[4]){
         if(arr[0] === arr[8]){
            if(arr[4] === false || arr[4]=== true){
               if(arr[4] === false)
                  alert("!! Brown is winner !!");
               else   
                  alert("!! Orange is winner !!");

               return true;  
            }
         }
      }

      if(arr[2] === arr[4]){
         if(arr[2] === arr[6]){
            if(arr[4] === false || arr[4]=== true){
               if(arr[4] === false)
                  alert("!! Brown is winner !!");
               else   
                  alert("!! Orange is winner !!");

               return true;  
            }
         }
      }

      return false;
   }

   
}   

console.log(main());