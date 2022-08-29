let musicas = [
    {titulo: "WUSYANAME - Tyler, the creator", src: "./musicas/musica1.mp3", img: "./ilustrações/ilustra1.jpg"},
    {titulo: "DROPPED OUTTA COLLEGE - 24kGoldn", src: "./musicas/musica2.mp3", img: "./ilustrações/ilustra2.jpg"},
    {titulo: "FEELING - Juice WRLD", src: "./musicas/musica3.mp3", img: "./ilustrações/ilustra3.jpg"},
    {titulo: "NO IDEIA - Don Toliver", src: "./musicas/musica4.mp3", img: "./ilustrações/ilustra4.jpg"},
    {titulo: "WHATS POPPIN - Jack Harlow", src: "./musicas/musica5.mp3", img: "./ilustrações/ilustra5.jpg"}
];

let musica = document.getElementById("musicas");
let indexMusica = 0;

let imagem = document.getElementsByClassName("ilustracao")[0];
let nomeMusica = document.getElementById("nomeMusica");

renderizarMusica(indexMusica);

function anterior(){
    indexMusica--;
    if (indexMusica < 0){
        indexMusica = 4;
    }
    renderizarMusica(indexMusica);
}


function play(){
    musica.play();
}

function pause(){
    musica.pause();
}


function proxima(){
    indexMusica++;
    if (indexMusica > 4){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
}

function parar(){
    musica.pause();
    musica.currentTime = 0;
    icone.src = "./icones/play.png"
}

let icone = document.getElementById("bto");
function play() {
    if (musica.paused) {
        musica.play();
        icone.src = "./icones/pause.png"
    }

    else {
        musica.pause();
        icone.src = "./icones/play.png"
    }
}

let duracaoMusica = document.getElementsByClassName("fim")[0];
function renderizarMusica(index){
    musica.setAttribute("src", musicas[index].src);
    musica.addEventListener("loadeddata", () =>  {
        nomeMusica.textContent = musicas[index].titulo;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
        parar();
    });
}

function volume(){
    let vol = document.getElementById("vol");
    musica.volume = vol.value / 100;
}

musica.addEventListener("timeupdate", atualizarBarra);
function atualizarBarra(){
    let barra = document.getElementsByTagName("progress")[0];
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + "%"; 

    let tempoDecorrido = document.getElementsByClassName("inicio")[0];
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = "0" + campoSegundos
    }
    
    return campoMinutos + ":" + campoSegundos;
}
