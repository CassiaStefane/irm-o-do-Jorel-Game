const pulo = document.querySelector('.pulo');
const jorel = document.querySelector('.jorel');
const abacate = document.querySelector('.abacate');
const body = document.querySelector('#conteiner');

const pular = () => {
    jorel.classList.add('pulo');

    setTimeout(() => {
        jorel.classList.remove('pulo');
    } ,500)
}
const loop = setInterval(() =>{
    const position = abacate.offsetLeft;
    const posAbacate = +window.getComputedStyle(jorel).bottom.replace('px','');

    if(position < 80 && position > 0 && posAbacate < 45){
        abacate.style.animation = 'none';
        abacate.style.left = `${position}px`;
        
        jorel.style.animation = 'none';
        jorel.style.bottom = `${posAbacate}px`;
        
        clearInterval(loop);

        roletaImg();
    }
}, 10)
const roletaImg = () =>{
    const gerador = Math.floor(Math.random()*4);
        if( gerador=== 1){
            jorel.src = 'img/happy.jpg';
            jorel.style.width = '500px';
            body.style.backgroundColor = '#7db26a';
        } else if(gerador === 2){
            jorel.src = 'img/sad.jpg';
            jorel.style.width = '100%';
            jorel.style.height = '100%';
        } else{
            jorel.src= 'img/furioso.jpg';
            jorel.style.width = '100%';
            jorel.style.height = '100%';
        }
                
}

document.addEventListener('keydown',pular);