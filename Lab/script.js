// Ejemplo mouseover
const elementoMouseover = document.querySelector('.ejemplo-mouseover');

elementoMouseover.addEventListener('mouseover', () => {
  elementoMouseover.style.backgroundColor = '#bf87e4';
});

elementoMouseover.addEventListener('mouseout', () => {
  elementoMouseover.style.backgroundColor = 'white';
});

const imagen2 = document.querySelector('img[alt="Imagen 2: Mostrar descripción emergente"]');
if (imagen2) {
  imagen2.addEventListener('mouseover', () => {
    alert("Gatito con disfraz de banana :3");
  });
} 
const imagen3 = document.querySelector('img[alt="Imagen 3: Cambiar el cursor"]');
if (imagen3) {
  const rutaOriginal = imagen3.src;
  const nuevaRuta = '4.jpg'; 
  imagen3.addEventListener('mouseover', () => {
    imagen3.src = nuevaRuta;
  });
  imagen3.addEventListener('mouseout', () => {
    imagen3.src = rutaOriginal;
  });
} 

const boton1 = document.getElementById('boton1');

boton1.addEventListener('click', () => {
  alert('¡Haz hecho click! :3');
});


function manejarClic(boton) {
  console.log("¡Se ha hecho clic en el botón " + boton.id + "!");
  boton.innerText = "¡Haz hecho click :3!";
}


function mostrar() {
  document.getElementById('imagen').style.display = 'block';
  document.getElementById('boton-ocultar').style.display = 'inline-block';
  document.getElementById('imagen').style.width = '200px';
  document.getElementById('imagen').style.height = 'auto';
}

function ocultar() {
  document.getElementById('imagen').style.display = 'none';
  document.getElementById('boton-ocultar').style.display = 'none';
}

const input = document.querySelector('.evento-3 input');
const botonColor = document.getElementById('boton-color');


botonColor.addEventListener('click', () => {
  const colorMorado = '#bf87e4';
  input.style.color = colorMorado;
});

const colorTexto = 'black';
input.style.color = colorTexto;

//Eventos focus
let focus1 = document.getElementById("focus1");
let inputFocus1 = focus1.querySelector("input");
inputFocus1.addEventListener("focus", function() {
  inputFocus1.style.borderColor = "purple";
});
inputFocus1.addEventListener("blur", function() {
  inputFocus1.style.borderColor = "pink";
});


let focus2 = document.getElementById("focus2");
let email = focus2.querySelector("input");
let error = focus2.querySelector(".error");
email.addEventListener("blur", function() {
  let value = email.value;
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!regex.test(value)) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});

let focus3 = document.getElementById("focus3");
let password = focus3.querySelector("input");
let hint = focus3.querySelector(".hint");
password.addEventListener("focus", function() {
  hint.style.display = "block";
});
password.addEventListener("blur", function() {
  hint.style.display = "none";
});


