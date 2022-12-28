var a =0;
var b =0;

const maindiv = document.querySelector('#maindiv');
var x = document.createElement('div');
var y = document.createElement('div');

for(a=0; a<160; a++){
    x = document.createElement('div');
    x.className = "rows";
    for(b=0;b<160;b++){
        y = document.createElement('div');
        y.className ='scribble';
        x.appendChild(y);
    }
    maindiv.appendChild(x);
}

const alldivs = document.querySelectorAll(".scribble");

alldivs.forEach( div => {
    div.addEventListener('mouseover', () => {
        div.classList.add('drawn');
    });
});