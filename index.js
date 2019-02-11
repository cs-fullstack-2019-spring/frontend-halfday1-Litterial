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










/*Player 1 and Player 2 puttons*/
var buttonp1=document.getElementById('inputP1');
var buttonp2=document.getElementById('inputP2');
/*P tags for counters*/
var changeLeft=document.getElementById('counter1');
var changeRight=document.getElementById('counter2');

var scoreKeeper=document.getElementById('score');    /*Scorekeeper for both players*/

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

    if (p1count>p2count)    /*when player 1 leads*/
    {
        scoreKeeper.innerText="Player 1"
    }

    else    /*otherwise*/
    {
        scoreKeeper.innerText="Tie"
    }

    if (p1count==15)    /*when player 1 hits 15*/
    {
        alert("Player 1 is the winner.");

        /*reset the input counts and resets scoreboard*/
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
    if (p2count>p1count)   /*when player 2 leads*/
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

        /*reset the input counts and resets scoreboard*/
        p1count=0;
        p2count=0;
        changeLeft.innerText=0;
        changeRight.innerText=0;
        scoreKeeper.innerText='';
    }


}


addEventListener('load',clickingDefault);   /*set up to have clicking on default*/
var pandQ=document.getElementById("keyboard");     /*id for the p and q options*/
var clicking=document.getElementById("clicks");     /*id for the clicking option*/
clicking.addEventListener('click',turnOffKeyboard);         /*turn off keyboard the p and q options*/
pandQ.addEventListener('click',turnOnKeyboard);             /*turn on the p and q options*/

function clickingDefault()   /*turns off keyboard on load*/
{
    removeEventListener('keydown',readKeyboard);
    clicking.setAttribute('disabled',true);   /*grays out the clicking button to notify user what you are using*/

}

function turnOnKeyboard()
{
    addEventListener('keydown',readKeyboard);     /*turns on keyboard commands*/
               /*turns off the P1 and P2 buttons*/
    buttonp1.removeEventListener('click',up1);
    buttonp2.removeEventListener('click',up2);
    clicking.removeAttribute('disabled');           /*ungrays the clicking button*/
    pandQ.setAttribute('disabled',true);       /*grays out the  p and q button*/
}

function turnOffKeyboard()
{
    /*turns the P1 and P2 buttons back on*/
    buttonp1.addEventListener('click',up1);
    buttonp2.addEventListener('click',up2);
    removeEventListener('keydown',readKeyboard);
    pandQ.removeAttribute('disabled');
    clicking.setAttribute('disabled',true);
}

function readKeyboard(e) {

    if (e.code === 'KeyP')   /*reads player 1's key*/
    {
        up1()  /*calls scorekeeping for player 1*/

    } else if (e.code === 'KeyQ')   /*reads player 2's key*/
    {
        up2()   /*calls scorekeeping for player 2*/


    }
}





