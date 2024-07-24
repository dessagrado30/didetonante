

function cambiar_imagen() {
    let video_cambio = document.getElementById('imagen')

    if (video_cambio.src.endsWith('Nosotrxs.webp')) {
        video_cambio.src='../assets/img/Accionares.webp';
    }else{
        video_cambio.src='../assets/img/Nosotrxs.webp';
    }

}



const mediumBp = matchMedia('(min-width: 600px)');
const changeSize = mql => {
    mql.matches

    if (document.getElementById('glitch').src.endsWith('Glitch_.gif')) {
        document.getElementById('glitch').src='../assets/Video/Glitch_responsivo.gif';
    }else{
        document.getElementById('glitch').src='../assets/Video/Glitch_.gif';
    }
}

mediumBp.addListener(changeSize);
changeSize(mediumBp);




function cambiar_gif() {
    let video_cambio = document.getElementById('glitch')

    if (video_cambio.src.endsWith('Glitch_.gif')) {
        video_cambio.src='../assets/Video/Glitch_responsivo.gif';
    }else{
        video_cambio.src='../assets/Video/Glitch_.gif';
    }

}


