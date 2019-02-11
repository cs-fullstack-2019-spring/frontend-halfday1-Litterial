var background=document.getElementById('backbone');
var scoreKeeper=document.getElementById('score');





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

    if (p1count>p2count)
    {
        scoreKeeper.innerText="Player 1"
    }

    else
    {
        scoreKeeper.innerText="Tie"
    }

    if (p1count==15)
    {
        alert("Player 1 is the winner.");
        p1count=0;
        p2count=0;
        changeLeft.innerText=0;
        changeRight.innerText=0;
        scoreKeeper.innerText='';
    }
}

function up2()
{
    p2count++;
    changeRight.innerText=p2count;
    if (p2count>p1count)
    {
        scoreKeeper.innerText="Player 1"
    }

    else
    {
        scoreKeeper.innerText="Tie"
    }

    if(p2count==15)
    {
        alert("Player 2 is the winner.");
        p1count=0;
        p2count=0;
        changeLeft.innerText=0;
        changeRight.innerText=0;
        scoreKeeper.innerText='';
    }


}


addEventListener('load',clickingDefault);   /*set up to have clicking on default*/
var pandQ=document.getElementById("keyboard");
var clicking=document.getElementById("clicks");
clicking.addEventListener('click',turnOffKeyboard);
pandQ.addEventListener('click',turnOnKeyboard);
/*
addEventListener('keydown',readKeyboard);
*/

function clickingDefault()   /*turns off keyboard on load*/
{
    removeEventListener('keydown',readKeyboard);
    clicking.setAttribute('disabled',true);

}

function turnOnKeyboard()
{
    addEventListener('keydown',readKeyboard);
    buttonp1.removeEventListener('click',up1);
    buttonp2.removeEventListener('click',up2);
    clicking.removeAttribute('disabled');
    pandQ.setAttribute('disabled',true);
}

function turnOffKeyboard()
{
    buttonp1.addEventListener('click',up1);
    buttonp2.addEventListener('click',up2);
    removeEventListener('keydown',readKeyboard);
    pandQ.removeAttribute('disabled');
    clicking.setAttribute('disabled',true);
}

function readKeyboard(e)
{

    if (e.code==='KeyP')
    {
        p1count++;
        changeLeft.innerText=p1count;
    }

    else if (e.code==='KeyQ')
    {
        p2count++;
        changeRight.innerText=p2count;
    }

}





