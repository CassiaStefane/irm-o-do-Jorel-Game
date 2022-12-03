const pulo = document.querySelector('.pulo');
const jorel = document.querySelector('.jorel');
const abacate = document.querySelector('.abacate');
const body = document.querySelector('#conteiner');
const pontos = document.querySelector('.pontos');
const reload = document.querySelector('.reload');
const menu = document.querySelector('.menu');

let count = 0;

const pular = () => {
    jorel.classList.add('pulo');

    setTimeout(() => {
        jorel.classList.remove('pulo');
    } ,500)
}

const roletaImg = () =>{
    const gerador = Math.floor(Math.random()*4);
        if( gerador=== 1){
            jorel.src = 'img/happy.jpg';
            jorel.classList.add('src');
            jorel.classList.remove('jorel');
        } else if(gerador === 2){
            jorel.src = 'img/sad.jpg';
            jorel.classList.add('src');
            jorel.classList.remove('jorel');
        }else if(gerador=== 3){
            jorel.src = 'img/curioso.jpg'
            jorel.classList.add('src');
            jorel.classList.remove('jorel');
        }
        else{
            jorel.src= 'img/furioso.jpg';
            jorel.classList.add('src');
            jorel.classList.remove('jorel');
        }
                
}
const score = setInterval(() =>{
    count++
    if(count > 10) {
        abacate.style.animation = 'abacate 1s infinite linear';
        pulo.style.animation = 'jorel 300ms ease-out';
    }
    pontos.innerHTML = `Pontos: ${count}`;
},2000)


const loop = setInterval(() =>{
    const position = abacate.offsetLeft;
    const posAbacate = +window.getComputedStyle(jorel).bottom.replace('px','');

    if(position < 80 && position > 0 && posAbacate < 45){
        abacate.style.animation = 'none';
        abacate.style.left = `${position}px`;
        
        jorel.style.animation = 'none';
        jorel.style.bottom = `${posAbacate}px`;

        clearInterval(loop);
        clearInterval(score);

        roletaImg();
    }
}, 10 )

const go = () =>{
    setInterval(()=>{
        menu.style.display = 'none';
        window.location.href = 'game.html';
    }
        , 1000)
};

document.addEventListener('keydown',pular);
document.addEventListener('keydown', go);