/*addEventListener('DOMContentLoaded',() => {
    const btn_menu= document.querySelector('.btn_menu')
    if(btn_menu){
        btn_menu.addEventListener('click',() =>{
            const menu
=document.querySelector('.menu')
menu.classList.toggle('show')
        })
    }
})*/


//  seleccionamos los dos elementos que serán clickables

const toggleButton = document.getElementById("btn_menu");
const navWrapper = document.getElementById("menu");

/* 
  cada ves que se haga click en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

/* 
  Cuándo se haga click fuera del contenedor de enlaces 
  el menú debe esconderse.
*/

navWrapper.addEventListener("click", e => {
  if (e.target.id === "menu") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});


/*
const iconoMenu=document.querySelector('#btn_menu'),
menu=document.querySelector('menu');

iconoMenu.addEventListener('click',(e) => {
  menu.classList.toggle('active');
  document.body.classList.toggle('opacity');

  const rutaActual=e.target.getAtribute('src');

  if rutaActual==''){
    e.target.setAtribute('');
  }else{
    e.target.setAtribute(''),
  }
})*/