'use strict'

alert('Para usar esta aplicación debes mantener presionado el clic izquierdo en alguna de las imágenes de abajo y luego arrastrarla hacia el reloj y luego soltarla para que este la establezca de fondo.')

let h = document.querySelector('.horas');
let m = document.querySelector('.minutos');
let s = document.querySelector('.segundos');
let dias = document.querySelector('.dias');
let meses = document.querySelector('.meses');
let años = document.querySelector('.años');
let container_reloj = document.querySelector('.container-reloj');

const añadirCeros = n => {
    if (n.toString().length < 2) return "0".concat(n);
    return n
}

const actualizarFecha = () => {
    let fecha = new Date();
    h.innerHTML = añadirCeros(fecha.getHours());
    m.innerHTML = añadirCeros(fecha.getMinutes());
    s.innerHTML = añadirCeros(fecha.getSeconds());
    dias.innerHTML = 'Día<br>' + añadirCeros(fecha.getDate());
    meses.innerHTML = 'Mes<br>' + añadirCeros(fecha.getMonth() + 1);
    años.innerHTML = 'Año<br>' + añadirCeros(fecha.getFullYear());
}

actualizarFecha()

setInterval(actualizarFecha,1000);

container_reloj.addEventListener('dragover', (e)=> {
    e.preventDefault();
});

container_reloj.addEventListener('drop', (e) => {
    let n = e.dataTransfer.getData("textura");
    container_reloj.style.background = `url("textura${n}.png")`;
});

for (let i = 1; i < document.querySelector('.texturas').children.length + 1; i++){
    document.querySelector(`.textura${i}`).addEventListener('dragstart', (e) => {transferirTextura(e,i)});
}

const transferirTextura = (e,n) => {
    e.dataTransfer.setData("textura", n);
}


