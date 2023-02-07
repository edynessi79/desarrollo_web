
document.getElementById('boton').onclick = function(){
    console.log("capturamos el clik de la pagina");
    document.getElementById("demo").innerHTML = "estamos cambiando el texto original de la pagina"
}

/** 
document.addEventListener('click',function(){
    console.log("Hola mundo desde eventlistener");
    document.getElementById("demo").innerHTML = "estamos cambiando el texto original de la pagina"
});
*/

document.getElementById("boton_default").addEventListener('click',function(){
    document.body.style.background = 'blue';
});

document.getElementById("boton_color").addEventListener('click',function(){
    document.body.style.background = 'red';
});

document.getElementById("boton_ocultar").addEventListener('click',function(){
    document.getElementById('demo').style.display = 'none';
});

document.getElementById("boton_mostrar").addEventListener('click',function(){
    document.getElementById('demo').style.display = 'initial'
});

const collection = document.getElementsByClassName('prueba');
for (let i = 0;i < collection.length;i++){
    collection[i].style.background = "green";
}