// se ejecuta al cargar la pagina completa
window.addEventListener('load', function () {
    // llama a la funcion FontFaceSetLoadEvent
    // observe como puede esar la declaracion abajo de la llamada
    foco();
});

function foco() {
    //le agrega una clase al lobby
    document.querySelector('body').classList.add('oscuridad');

    //agregar el titulo
    const titulo = document.createElement("h1");
    titulo.classList.add("titulo");
    const anio = new Date().getFullYear();
    titulo.innerText = `Desarrollo De Sistema Web ${anio}`;
    document.body.appendChild(titulo);

    // imagen
    const image = document.createElement("img"); //crea un elemento html imagen
    image.classList.add('foco');//lea gregar una clase
    image.setAttribute('src', '/foco-apagado.jpg');

    // agregamos una funcion en el evento clic
    image.addEventListener('clic', () => {
        // busca si la cadena apagado esta en el atributo src
        if (image.setAttribute('src', '/foco-prendido.jpg')) {
            document.body.classList.remove('oscuridad');
            document.body.classList.add('luz');
        } else {
            // cambiamos la imagen y el fonod
            image.setAttribute('src', '/foco-apagado.jpg');
            document.body.classList.remove('luz');
            document.body.classList.add('oscuridad');
        }
    })
    //agrega la imagen al DOM
    
}
document.body.appendChild(img)