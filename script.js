  let gridSize = 100*100;
  
  //creats a div child
  function  divcreator(){
  const gridChild = document.createElement('div');
  gridChild.setAttribute('style',
                         `background-color : white; 
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
}}


const docGridSize = document.querySelector('.pix');
const input = document.querySelector('#slide');

//clears a gird 
function clear (){
    const divdelet = document.querySelectorAll('.child');
    const arr = Array.from(divdelet);
    arr.forEach(element => { element.remove();
        
    });
    
}
 


// when the range is fixed sets the grid
input.addEventListener('input' , (event)=>{
 clear();
 docGridSize.textContent=`${event.target.value}*${event.target.value}`;
 gridSize=event.target.value**2;
 gridCreator();
})


const clearbtn = document.querySelector('.btn');
clearbtn.onclick = () => { clear ();};


