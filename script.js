const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);


console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

/*h1.innerText = 'Patito <br> <img src="./profile.jpg" width="100px"/>';*/ //covierte a codigo HTML//

h1.innerHTML = 'Patito <br> <img src="./profile.jpg" width="100px"/>'; //agrega los cambios directamente, pero es peligroso//

/*console.log(h1.getAttribute('class'));*/ //lee atributos, clases//
/*h1.setAttribute('class', 'rojo');*/ //modifica los atributos en el html//

h1.classList.add('rojo'); //agrega dos atributos, la que esta por defecto en el html y la otra al agregarla//

h1.classList.remove('verde');//quitamos la clase verde y queda el que agregamos con classList.add//

input.value = "123";

const img = document.createElement('img');
img.setAttribute('src', './profile.jpg');
console.log(img);
pid.innerHTML = "";
pid.append(img);

//la manipulación del DOM desde javascript, es básicamente editar e incluso crear nuevos elementos para nuestro HTML utilizando Js.//



