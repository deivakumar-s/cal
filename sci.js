
var screen = document.getElementById('screen');
var btn = document.getElementsByClassName('btn');


for (item of btn) {
    item.addEventListener('click', (select) => {
        let btntext = select.target.innerText;
        screen.value += btntext;
    });
}

function sin() {
    
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value =3.14 ;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {

   
    var f = 1;
    var num = screen.value;
    for (i = 1; i <= num; i++
        ) {
        f = f * i;

    }
    screen.value=f;    
}

// function fact() {
// if(x==0) {
// return 1;
// }
// return x * fact(x-1);
// }
// screen.value=x;
function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function percentage()
{
   screen.value=screen.value/100 ;
}
percentage();


