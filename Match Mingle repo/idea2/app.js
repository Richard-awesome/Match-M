let Tap = document.querySelector('.tap');

let CollectInfo = document.querySelector('.collect');

let ColorWhite = document.querySelector('.colorwhite');

let password = document.querySelector('.Password');


let propy  = document.querySelector('.Wreck')

function tappy(){
  if(CollectInfo.value === '' || password.value ===   '' || propy.value === '')return;
  else{
  ColorWhite.innerHTML = `
  <img style="
border-radius: 70px;
float: left;
width:70px;
 height:70px;
" class="crc" src="./../images/Halos.jpg"  alt="">
<div class="Chalk">
  <p>${CollectInfo.value}</p>
  <p>${propy.value}</p>
  </div>
  `
  ;
  
};
localStorage.setItem('keepMemory', JSON.stringify(ColorWhite.innerHTML))
}





function rock(event){
  if(event.key === 'Enter'){
    tappy();
  }
}