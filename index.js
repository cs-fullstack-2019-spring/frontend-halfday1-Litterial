var background=document.getElementById('backbone');
var pandQ=document.getElementById("keyboard");
var clicking=document.getElementById("clicks");
var changeBlue=document.getElementById('blueB');
var changeRed=document.getElementById('redB');
var changeYellow=document.getElementById('yellowB');


changeBlue.addEventListener('click',rojo);
changeRed.addEventListener('click',azul);
changeYellow.addEventListener('click',amarillo);

function rojo()
{
    background.classList.add('red');
}

function azul()
{
    background.classList.add('blue');
}
function amarillo()
{
    background.classList.add('yellow')
}