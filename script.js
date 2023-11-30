let gridSize = 25*25;
let penColor 
let backColor 
let divArray

//creats a div child
function  divcreator(){
const gridChild = document.createElement('div');
gridChild.setAttribute('style',
                       `background-color : #ffffff; 
                        border-top : 1px solid black ; 
                        border-left : 1px solid black ; 
                        height: ${500/Math.sqrt(gridSize)-1}px;
                        width: ${500/Math.sqrt(gridSize)-1}px;
                        `);
gridChild.setAttribute('class' , 'child') ;                       
return gridChild;
}


const parent = document.querySelector('.container');

// creates a grid 
function gridCreator(){
for (let i=0; i<gridSize ; i++){
parent.appendChild(divcreator());
}
const childlist=document.querySelectorAll('.child');
divArray=Array.from(childlist);
console.log(divArray);
}



const docGridSize = document.querySelector('.pix');
const input = document.querySelector('#slide');

//clears a gird 
function clearco(){
  const divdelet = document.querySelectorAll('.child');
  const arr = Array.from(divdelet);
  arr.forEach(element => { element.remove();});
  divArray=[];
}
function clear (){
  const divdelet = document.querySelectorAll('.child');
  const arr = Array.from(divdelet);
  arr.forEach(element => { element.remove();});
  divArray=[];
  gridSize=25*25;
  gridCreator();
  console.log(divArray);
  draw();
}

// when the range is fixed sets the grid
input.addEventListener('input' , (event)=>{
clearco();
docGridSize.textContent=`${event.target.value}*${event.target.value}`;
gridSize=event.target.value**2;
gridCreator();
draw();
})


const clearbtn = document.querySelector('.btn');
clearbtn.onclick = () => { clear ();};

// the pen gets color
const penInput = document.querySelector('#pen');
penInput.addEventListener("input", (event)=>{
   penColor=event.target.value;
})

// the sheets gets color
const backInput = document.querySelector('#back');
backInput.addEventListener("input",(event)=>{
  backColor=event.target.value;
  divArray.forEach(ele =>{ele.style.backgroundColor = backColor});
})




//drawing with pen 
function draw(){
divArray.forEach((ele)=>{ele.addEventListener('mousedown',(event)=>{
                                                                  ele.style.backgroundColor = penColor;  
                                                                  divArray.forEach((element)=>{
                                                                    element.addEventListener('mouseover',()=>{
                                                                    element.style.backgroundColor = penColor;})
                                                                  })})})
}



// to erase
const eraser = document.querySelector('#erase');
eraser.onclick = ()=> {penColor = backColor;}; 

gridCreator();
draw();

