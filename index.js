var background=document.getElementById('backbone');
var pandQ=document.getElementById("keyboard");
var clicking=document.getElementById("clicks");
var changeBlue=document.getElementById('blueB');
var changeRed=document.getElementById('redB');
var changeYellow=document.getElementById('yellowB');
var buttonp1=document.getElementById('inputP1');
var buttonp2=document.getElementById('inputP2');
var changeLeft=document.getElementById('counter1');
var changeRight=document.getElementById('counter2');


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

buttonp1.addEventListener('click',up1);
buttonp2.addEventListener('click',up2);
p1count=0;
p2count=0;

function up1()
{

    p1count++;
    changeLeft.innerText=p1count;
}

function up2()
{
    p2count++;
    changeRight.innerText=p2count;
}


