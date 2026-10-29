
//pehle hum sare boxes ko select kr rahe hai taki unpar operations kar sake 

let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");

let turno=true; //player x and player o honge

//secondly hum apne winning patterns ko store kr skte hai

const winningPatterns=[

    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

boxes.forEach((box)=>{

    box.addEventListener("click",()=>{

        console.log("box was clicked");

        if(turno){

            box.innerText="O";
              turno=false;                         //iske through uss player ki turn hai jiske paas O hai
        }

        else{

            box.innerText="X";
            turno=true;  //iske through uss player ki turn hai jiske paas X hai
        }

        box.disabled=true; //isse humne box ko disable kr diya taki uss box pe dobara click na ho sake

        checkwinner();


    })
})

let showwinner=(winner)=>{

    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
     disableboxes();
};

let disableboxes=()=>{

    for(box of boxes){

        box.disabled=true;
    }
};  //iss function ke through humne sare boxes ko disable kr diya taki game khatam hone ke baad dobara click na ho sake

let enableboxes=()=>{

    for(let box of boxes){ 

        box.disabled=false;

        box.innerText=""; //isse humne box ke innerText ko empty kr diya taki game reset hone ke baad dobara click ho sake
    }   
};

const checkwinner=()=>{

    for(let pattern of winningPatterns){
/* 
        console.log(pattern[0],pattern[1],pattern[2]); //isse humne pattern ke index ko print kiya taki hume pata chale ki konsa pattern check ho raha hai
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText); */ //isse humne pattern ke index ke corresponding box ke innerText ko print kiya taki hume pata chale ki konsa box check ho raha hai and iske through particular box ki value set ho jayegi
 let pos1=boxes[pattern[0]].innerText;
 let pos2=boxes[pattern[1]].innerText;
 let pos3=boxes[pattern[2]].innerText;

 if(pos1!="" && pos2!="" && pos3!="" && pos1==pos2 && pos2==pos3){
      
         console.log("Winner",pos1);

         showwinner(pos1);

      
    }
 }
};

const resetGame=()=>{

     turno=true;

   enableboxes();

   msgcontainer.classList.add("hide");

};

reset.addEventListener("click",()=>{

    resetGame();
});





       
