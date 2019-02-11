var background=document.getElementById('backbone');





/*defining ids for background buttons*/
var changeBlue=document.getElementById('blueB');
var changeRed=document.getElementById('redB');
var changeYellow=document.getElementById('yellowB');
/*event listeners for background*/
changeBlue.addEventListener('click',azul);
changeRed.addEventListener('click',rojo);
changeYellow.addEventListener('click',amarillo);

/*functions for background*/
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




var pandQ=document.getElementById("keyboard");
var clicking=document.getElementById("clicks");
clicking.addEventListener('click',turnOnKeyboard);
pandQ.addEventListener('click',turnOnMouse);
pandQ.setAttribute('disabled',false);

function turnOnKeyboard(e)
{
    pandQ.removeAttribute('disabled');
    buttonp1.removeEventListener('click');
    buttonp2.removeEventListener('click');

    if (e.code=='p')
    {
        p1count++;
        changeLeft.innerText=p1count;
    }

    else if (e.code=='q')
    {
        p2count++;
        changeRight.innerText=p2count;
    }

}



/*Player 1 and Player 2 puttons*/
var buttonp1=document.getElementById('inputP1');
var buttonp2=document.getElementById('inputP2');
/*P tags for counters*/
var changeLeft=document.getElementById('counter1');
var changeRight=document.getElementById('counter2');
/*Event listeners for Player 1 and 2 buttons*/
buttonp1.addEventListener('click',up1);
buttonp2.addEventListener('click',up2);

/*Score for players*/
p1count=0;
p2count=0;


/*increments count for players*/
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


