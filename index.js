var background=document.getElementById('backbone');
var pandQ=document.getElementById("keyboard");
var clicking=document.getElementById("clicks");
var changeBlue=document.getElementById('blueB');
var changeRed=document.getElementById('redB');
var changeYellow=document.getElementById('yellowB');


changeBlue.addEventListener('click',azul);
changeRed.addEventListener('click',rojo);
changeYellow.addEventListener('click',amarillo);

function rojo()
{
    background.classList.add('red');
    background.classList.remove('yellow');
    background.classList.remove('blue');
}

function azul()
{
    background.classList.add('blue');
    background.classList.remove('red');
    background.classList.remove('yellow');
}
function amarillo()
{
    background.classList.add('yellow');
    background.classList.remove('blue');
    background.classList.remove('red');
}


