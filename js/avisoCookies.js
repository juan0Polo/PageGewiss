const botonAceptarCookies = document.getElementById('btn-aceptar-cookies'); //se hace una constante y se llama un elemento en el html por su id
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

if(!localStorage.getItem('cookies-aceptadas')){
    avisoCookies.classList.add('ACTIVO');
    fondoAvisoCookies.classList.add('ACTIVO');
}

botonAceptarCookies.addEventListener('click', () =>{ //en la contansia agregamos un evento al hacer click
    avisoCookies.classList.remove('ACTIVO'); //en la contancia accedemos a la lista de clases y eliminamos la clase ACTIVO
    fondoAvisoCookies.classList.remove('ACTIVO');

    localStorage.setItem('cookies-aceptadas', true)
})