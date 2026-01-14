

// // let grade= prompt("Enter your marks")

// // if(grade<=100 && grade>=90)
// // {
// //     console.log("Grade A");
// // }
// // else if(grade<90 && grade>=70)
// // {
// //     console.log("Grade B");
// // }
// // if(grade<70 && grade>=60)
// // {
// //     console.log("Grade C");
// // }
// // else if(grade<60 && grade>=50)
// // {
// //     console.log("Grade D");
// // }
// // else if(grade<50)
// // {
// //     console.log("Grade F")
// // }

// for(let i=1; i<=100; i++)
// {
// console.log(i)

// }

// let price=[250,655,300,900,50];

// for(let idx=0;idx<price.length;idx++)
// {
//     let off=price[idx]/10;
//     price[idx]=price[idx]-off;

// }
// console.log(price);


// let companies=["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(companies)
// companies.shift();

// console.log(companies);
// companies.splice(1,1,"olaa")
// console.log(companies);

// companies.push("Amazon");
// console.log(companies);

// function check(str)
// {        
//     let count=0;

//     for (const char of str) 
//         {
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
//         {
//             count++;
//         }
        
//     }

// console.log(count);
// }

// arr=[1,3,4,5,5,3,9];

// arr.forEach(function sqr(vl) {

// console.log("Squarr root is =",vl*vl)
    
// });

// let arrr=[97,2,34,65,45,32,3,55,7,12];

// let ttt =arrr.filter((val)=>{
//         return val>90;
// });
// console .log(ttt)


// let arr=[];
// let n=prompt("Enter size of array");
//   for(let i=0;i<=n;i++)
//   {
    
//     arr[i-1]=i;    
//   }
//    let sum= arr.reduce((total,val)=>{

//         return total+val


//     })

//     console.log(sum)
  
// let div=document.querySelector("div");

// console.dir(div);


// let divs=document.querySelectorAll(".box")

// let idx=1;
// for(let div of divs)

// {
//     div.innerText= `${idx }st div`
//     idx++;
    
//     console.log(divs);   
// }

// let newButton = document.createElement("button")
// newButton.innerText="Click me";
// console.log(newButton);
// newButton.style.backgroundColor="red";
// newButton.style.color="white";

// document.querySelector("body").prepend(newButton);

// let div=document.querySelector("#dav");

// div.onclick= () => {
//     console.log("salmo-alikum");
//     div.style.backgroundColor="green";
//     div.style.width="200px";
// }

// let body=document.querySelector("body");
// let btn=document.querySelector("#btn");
// let curentMode="light";
// btn.addEventListener("click",
//     ()=>{ if(curentMode==="light")
//         {
//             body.style.backgroundColor="black";
//             curentMode="dark";
//         }

//          else if(curentMode==="dark")
//          {

//             body.style.backgroundColor="red";
//             curentMode="red";
//         }
//         else if(curentMode==="red")
//         {
//             body.style.backgroundColor="blue";
//             curentMode="blue";
//         }
//         else if(curentMode==="blue")
//         {
//             body.style.backgroundColor="white";
//             curentMode="light";
//         }
//     }
// )





// let butns=document.querySelector(".cell")
// let resetbtn=document.querySelectorAll("#resetBtn")

// const winingPaterns=[ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];



// butns.forEach((cell) => {
//     cell.addEventListener("click",

//         ()=>{console.log("button clicked")
        
//     });    
// });


let butns = document.querySelectorAll(".cell");
let resetbtn = document.querySelector("#resetBtn");
let newBtn=document.querySelector("#newBtn");
let winner=document.querySelector("#winer");
let turn=true;
const winingPaterns = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];
let count=0;

butns.forEach((cell) => {
  cell.addEventListener("click", () => {
    if(turn){

        cell.innerText = "X";
        turn=false;
    }    
    else{
      cell.innerText="O";
      turn=true;
    }
    cell.disabled=true;
    checkWinenr();
    // count++;
    // let isWinner=checkWinenr();
    
    // if(count===9&& !isWinner){
    //   drawGame();
    // }
  });
}); 

const drawGame=()=>{
  winner.innerText="Game is Drawn";
}
const resetGame=()=>{
  turn=true;
  enBtns();
  winner.innerText="";
}
const showwinner= (msg) =>{
  winner.innerText=`Winner is ${msg}`;
  disBtns();
}
const enBtns=()=>{
  butns.forEach((cell)=>{
    cell.disabled=false;
    cell.innerText="";
  })
}
const disBtns=()=>{
  butns.forEach((cell)=>{
    cell.disabled=true;
  })
}
const checkWinenr=()=>{
  for(let patterns of winingPaterns){
    let pos1v=butns[patterns[0]].innerText;
    let pos2v=butns[patterns[1]].innerText;
    let pos3v=butns[patterns[2]].innerText;

    if(pos1v!=""&&pos2v!=""&&pos3v!=""){
      if(pos1v===pos2v&&pos2v===pos3v){
        console.log("winner",pos1v)
        showwinner(pos1v);
        // return true;
      }
      
    }
  //  return false;
  }
  
}
resetbtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);