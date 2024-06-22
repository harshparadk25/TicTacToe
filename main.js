let boxes = document.querySelectorAll('.box');
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new");
let message = document.querySelector(".message");
let msg = document.querySelector("#msg");


let turn0 = true;
 

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turn0){
            box.innerText = "X";
            box.style.color = "red";
            turn0=false;
            /* box.innerText.style.color = */
        }else{
            box.innerText = "O";
            box.style.color = "green"
            turn0=true;
        }
        box.disabled = true;

        check();
    });
});

const disable = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enable = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};

const showwinner = (winner) =>{
    msg.innerText = `Congratulations!, winner is ${winner}`;
    message.classList.remove("hide");
    disable();

};



const check = () => {
    for( let pattern of winpattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!= "" && pos2!= "" && pos3!= ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner ",pos1);

                showwinner(pos1);
            }
        }
    }
};
const resetgame = () =>{
    turn0 = true;
    enable();
    message.classList.add("hide");

};

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);