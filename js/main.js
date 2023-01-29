// inicio slider

if (document.querySelector('#container-slider')) {
    setInterval('fntExecuteSlide("next")', 5000);
}
//------------------------------ LIST SLIDER -------------------------
if (document.querySelector('.listslider')) {
    let link = document.querySelectorAll(".listslider li a");
    link.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let item = this.getAttribute('itlist');
            let arrItem = item.split("_");
            fntExecuteSlide(arrItem[1]);
            return false;
        });
    });
}

function fntExecuteSlide(side) {
    let parentTarget = document.getElementById('slider');
    let elements = parentTarget.getElementsByTagName('li');
    let curElement, nextElement;

    for (var i = 0; i < elements.length; i++) {

        if (elements[i].style.opacity == 1) {
            curElement = i;
            break;
        }
    }
    if (side == 'prev' || side == 'next') {

        if (side == "prev") {
            nextElement = (curElement == 0) ? elements.length - 1 : curElement - 1;
        } else {
            nextElement = (curElement == elements.length - 1) ? 0 : curElement + 1;
        }
    } else {
        nextElement = side;
        side = (curElement > nextElement) ? 'prev' : 'next';

    }
    //RESALTA LOS PUNTOS
    let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
    elementSel[curElement].classList.remove("item-select-slid");
    elementSel[nextElement].classList.add("item-select-slid");
    elements[curElement].style.opacity = 0;
    elements[curElement].style.zIndex = 0;
    elements[nextElement].style.opacity = 1;
    elements[nextElement].style.zIndex = 1;
}
//  fin slider

// INICIO MENU RESPONSIVE
var menu = document.getElementById("nav");
var ventana = document.getElementById("ventana");
var toggler = document.getElementById("toggler");

document.getElementById('nav').addEventListener("click", function () {

    if (ventana.classList.contains("navactive")) {
        ventana.classList.remove("navactive");
    } else if (!ventana.classList.contains("navactive")) {
        ventana.classList.toggle("navactive");
    }

    if (marca.classList.contains("marca")) {
        marca.classList.remove("marca");
    } else if (!marca.classList.contains("marca")) {
        marca.classList.toggle("marca");
    }

    if (toggler.classList.contains("icon-menu")) {
        toggler.classList.remove("icon-menu");
        toggler.classList.toggle("icon-cross");
    } else if (!toggler.classList.contains("icon-menu")) {
        toggler.classList.remove("icon-cross");
        toggler.classList.toggle("icon-menu")
    }

})
//  FIN MENU RESPONSIVE


'use strict';

; (function (document, window, index) {
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function (input) {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function (e) {
            var fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
    });
}(document, window, 0));


function mostrar1() {
    document.getElementById('parrafo1').style.display = 'block';
}
function mostrar2() {
    document.getElementById('parrafo2').style.display = 'block';
}
function mostrar3() {
    document.getElementById('parrafo3').style.display = 'block';
}
function mostrar4() {
    document.getElementById('parrafo4').style.display = 'block';
}
function mostrar5() {
    document.getElementById('parrafo5').style.display = 'block';
}