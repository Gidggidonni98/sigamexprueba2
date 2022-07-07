let titulo =  document.querySelectorAll(".logo");

function mostrarTitulo() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i<titulo.length; i++){
        let alturaAnimdo = titulo[i].offsetTop;
        if(alturaAnimdo +250 <scrollTop){
            titulo[i].style.opacity = 1;
        }else{
            titulo[i].style.opacity = 0;
        }
    }


}

window.addEventListener('scroll', mostrarTitulo)