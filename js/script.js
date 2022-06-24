slider1.disabled = false

slider1.addEventListener("mousemove", function testar() {
    var x = slider1.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider1.style.background = color;


})

n1 = 0
n2 = 0
n3 = 0
n4 = 0
n5 = 0
n6 = 0
n7 = 0
n8 = 0
n9 = 0
n10 = 0

var botao = document.getElementById("salvar")

var humano = document.getElementById("humano")

var elfo = document.getElementById("elfo")

var anao = document.getElementById("anao")

var orc = document.getElementById("orc")

var gnomo = document.getElementById("gnomo")

var raca = document.getElementById("tipoRaca")

var arco = document.getElementById("arco")

var espada = document.getElementById("espada")

var machado = document.getElementById("machado")

var mago = document.getElementById("mago")

var punhal = document.getElementById("punhal")

var xp = document.getElementById("xp")



var masc = document.getElementById("masculino")

var fem = document.getElementById("feminino")


racas = [humano, elfo, anao, orc, gnomo]


indice = Math.floor(Math.random() * 5);

xpRandom = Math.floor(Math.random() * 1400);

xp.innerHTML = (" " + xpRandom + " XP")

arco.style.opacity = 0.2
espada.style.opacity = 0.2
machado.style.opacity = 0.2
mago.style.opacity = 0.2
punhal.style.opacity = 0.2

if (indice == 0) {
    raca.innerHTML = "Humano"
} else if (indice == 1) {
    raca.innerHTML = "Elfo"
} else if (indice == 2) {
    raca.innerHTML = "Anão"
} else if (indice == 3) {
    raca.innerHTML = "Orc"
} else {
    raca.innerHTML = "Gnomo"
}

t = document.getElementById("teste")

cidades = ["Eullenay", "Siamor", "Venel", "Mavinóri", "Delanor"]

randomCid = Math.floor(Math.random() * 5);

t.value = cidades[randomCid]

function selectElfo() {
    humano.style.opacity = 0.2
    elfo.style.opacity = 1.0
    anao.style.opacity = 0.2
    orc.style.opacity = 0.2
    gnomo.style.opacity = 0.2
    raca.innerHTML = "Elfo"
}

function selectHumano() {
    humano.style.opacity = 1.0
    elfo.style.opacity = 0.2
    anao.style.opacity = 0.2
    orc.style.opacity = 0.2
    gnomo.style.opacity = 0.2
    raca.innerHTML = "Humano"
}

function selectAnao() {
    humano.style.opacity = 0.2
    elfo.style.opacity = 0.2
    anao.style.opacity = 1.0
    orc.style.opacity = 0.2
    gnomo.style.opacity = 0.2
    raca.innerHTML = "Anão"
}

function selectOrc() {
    humano.style.opacity = 0.2
    elfo.style.opacity = 0.2
    anao.style.opacity = 0.2
    orc.style.opacity = 1.0
    gnomo.style.opacity = 0.2
    raca.innerHTML = "Orc"
}

function selectGnomo() {
    humano.style.opacity = 0.2
    elfo.style.opacity = 0.2
    anao.style.opacity = 0.2
    orc.style.opacity = 0.2
    gnomo.style.opacity = 1.0
    raca.innerHTML = "Gnomo"
}

function selectArco(){
    arco.style.opacity = 1.0
    espada.style.opacity = 0.2
    machado.style.opacity = 0.2
    mago.style.opacity = 0.2
    punhal.style.opacity = 0.2
}

function selectEspada(){
    arco.style.opacity = 0.2
    espada.style.opacity = 1.0
    machado.style.opacity = 0.2
    mago.style.opacity = 0.2
    punhal.style.opacity = 0.2
}

function selectMachado(){
    arco.style.opacity = 0.2
    espada.style.opacity = 0.2
    machado.style.opacity = 1.0
    mago.style.opacity = 0.2
    punhal.style.opacity = 0.2
}

function selectMago(){
    arco.style.opacity = 0.2
    espada.style.opacity = 0.2
    machado.style.opacity = 0.2
    mago.style.opacity = 1.0
    punhal.style.opacity = 0.2
}

function selectPunhal(){
    arco.style.opacity = 0.2
    espada.style.opacity = 0.2
    machado.style.opacity = 0.2
    mago.style.opacity = 0.2
    punhal.style.opacity = 1.0
}

function selectMasc(){
    masc.style.opacity = 1.0
    fem.style.opacity = 0.2
}

function selectFem(){
    masc.style.opacity = 0.2
    fem.style.opacity = 1.0
}

document.getElementById("elfo").addEventListener("click", selectElfo);

document.getElementById("humano").addEventListener("click", selectHumano);

document.getElementById("anao").addEventListener("click", selectAnao);

document.getElementById("orc").addEventListener("click", selectOrc);

document.getElementById("gnomo").addEventListener("click", selectGnomo);





document.getElementById("arco").addEventListener("click", selectArco);

document.getElementById("espada").addEventListener("click", selectEspada);

document.getElementById("machado").addEventListener("click", selectMachado);

document.getElementById("mago").addEventListener("click", selectMago);

document.getElementById("punhal").addEventListener("click", selectPunhal);



document.getElementById("masculino").addEventListener("click", selectMasc);

document.getElementById("feminino").addEventListener("click", selectFem);



function gerarAtributos() {

    randomCid = Math.floor(Math.random() * 5);

    t.value = cidades[randomCid]

    xpRandom = Math.floor(Math.random() * 1400);


    xp.innerHTML = (" " + xpRandom + " XP")

    humano.style.opacity = 0.2
    elfo.style.opacity = 0.2
    anao.style.opacity = 0.2
    orc.style.opacity = 0.2
    gnomo.style.opacity = 0.2

    arco.style.opacity = 0.2
    espada.style.opacity = 0.2
    machado.style.opacity = 0.2
    mago.style.opacity = 0.2
    punhal.style.opacity = 0.2

    for (i = 0; i < racas.length; i++) {
        indice = Math.floor(Math.random() * 5);
        if (indice == 0) {
            raca.innerHTML = "Humano"
            espada.style.opacity = 1.0
            machado.style.opacity = 0.2
            mago.style.opacity = 0.2
            punhal.style.opacity = 0.2
            arco.style.opacity = 0.2
        } else if (indice == 1) {
            raca.innerHTML = "Elfo"
            arco.style.opacity = 1.0
            espada.style.opacity = 0.2
            machado.style.opacity = 0.2
            mago.style.opacity = 0.2
            punhal.style.opacity = 0.2
        } else if (indice == 2) {
            raca.innerHTML = "Anão"
            punhal.style.opacity = 1.0
            arco.style.opacity = 0.2
            espada.style.opacity = 0.2
            machado.style.opacity = 0.2
            mago.style.opacity = 0.2
        } else if (indice == 3) {
            raca.innerHTML = "Orc"
            machado.style.opacity = 1.0
            punhal.style.opacity = 0.2
            arco.style.opacity = 0.2
            espada.style.opacity = 0.2
            mago.style.opacity = 0.2
        } else {
            raca.innerHTML = "Gnomo"
            mago.style.opacity = 1.0
            machado.style.opacity = 0.2
            punhal.style.opacity = 0.2
            arco.style.opacity = 0.2
            espada.style.opacity = 0.2
        }
    }



    racas[indice].style.opacity = 1

    botao.disabled = false;

    pontDisp.value = 0
    pontDisp.innerHTML = pontDisp.value


    valores = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10]
    pontosDisponiveis = 100
    while (pontosDisponiveis > 0) {
        indice = Math.floor(Math.random() * 10);
        if (valores[indice] < 20) {
            valores[indice] += 1;
            pontosDisponiveis -= 1;
        }
    }

    output1.innerHTML = valores[0];
    slider1.value = valores[0];
    var x = slider1.value;



    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider1.style.background = color;

    slider1.oninput = function () {
        output1.innerHTML = this.value + " pts";
        v1 = valores[0] - slider1.value
        v2 = valores[1] - slider2.value
        v3 = valores[2] - slider3.value
        v4 = valores[3] - slider4.value
        v5 = valores[4] - slider5.value
        v6 = valores[5] - slider6.value
        v7 = valores[6] - slider7.value
        v8 = valores[7] - slider8.value
        v9 = valores[8] - slider9.value
        v10 = valores[9] - slider10.value
        pontDisp.value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10
        pontDisp.innerHTML = pontDisp.value


        if (pontDisp.value >= 0) {
            botao.disabled = false
        } else {
            botao.disabled = true;
        }

    }



    //-------------------------------------------------------------------

    output2.innerHTML = valores[1];
    slider2.value = valores[1];
    var x = slider2.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider2.style.background = color;

    slider2.oninput = function () {
        output2.innerHTML = this.value + " pts";
        v1 = valores[0] - slider1.value
        v2 = valores[1] - slider2.value
        v3 = valores[2] - slider3.value
        v4 = valores[3] - slider4.value
        v5 = valores[4] - slider5.value
        v6 = valores[5] - slider6.value
        v7 = valores[6] - slider7.value
        v8 = valores[7] - slider8.value
        v9 = valores[8] - slider9.value
        v10 = valores[9] - slider10.value
        pontDisp.value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10
        pontDisp.innerHTML = pontDisp.value


        if (pontDisp.value >= 0) {
            botao.disabled = false
        } else {
            botao.disabled = true;
        }


    }

    //-------------------------------------------------------------------

    output3.innerHTML = valores[2];
    slider3.value = valores[2];
    var x = slider3.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider3.style.background = color;

    slider3.oninput = function () {
        output3.innerHTML = this.value + " pts";
        v1 = valores[0] - slider1.value
        v2 = valores[1] - slider2.value
        v3 = valores[2] - slider3.value
        v4 = valores[3] - slider4.value
        v5 = valores[4] - slider5.value
        v6 = valores[5] - slider6.value
        v7 = valores[6] - slider7.value
        v8 = valores[7] - slider8.value
        v9 = valores[8] - slider9.value
        v10 = valores[9] - slider10.value
        pontDisp.value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10
        pontDisp.innerHTML = pontDisp.value


        if (pontDisp.value >= 0) {
            botao.disabled = false
        } else {
            botao.disabled = true;
        }
    }

    //-------------------------------------------------------------------

    output4.innerHTML = valores[3];
    slider4.value = valores[3];
    var x = slider4.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider4.style.background = color;

    slider4.oninput = function () {
        output4.innerHTML = this.value + " pts";
        v1 = valores[0] - slider1.value
        v2 = valores[1] - slider2.value
        v3 = valores[2] - slider3.value
        v4 = valores[3] - slider4.value
        v5 = valores[4] - slider5.value
        v6 = valores[5] - slider6.value
        v7 = valores[6] - slider7.value
        v8 = valores[7] - slider8.value
        v9 = valores[8] - slider9.value
        v10 = valores[9] - slider10.value
        pontDisp.value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10
        pontDisp.innerHTML = pontDisp.value


        if (pontDisp.value >= 0) {
            botao.disabled = false
        } else {
            botao.disabled = true;
        }
    }

    //-------------------------------------------------------------------

    output5.innerHTML = valores[4];
    slider5.value = valores[4];
    var x = slider5.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider5.style.background = color;

    slider5.oninput = function () {
        output5.innerHTML = this.value + " pts";
        v1 = valores[0] - slider1.value
        v2 = valores[1] - slider2.value
        v3 = valores[2] - slider3.value
        v4 = valores[3] - slider4.value
        v5 = valores[4] - slider5.value
        v6 = valores[5] - slider6.value
        v7 = valores[6] - slider7.value
        v8 = valores[7] - slider8.value
        v9 = valores[8] - slider9.value
        v10 = valores[9] - slider10.value
        pontDisp.value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10
        pontDisp.innerHTML = pontDisp.value


        if (pontDisp.value >= 0) {
            botao.disabled = false
        } else {
            botao.disabled = true;
        }
    }

    //-------------------------------------------------------------------

    output6.innerHTML = valores[5];
    slider6.value = valores[5];
    var x = slider6.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider6.style.background = color;

    slider6.oninput = function () {
        output6.innerHTML = this.value + " pts";
        v1 = valores[0] - slider1.value
        v2 = valores[1] - slider2.value
        v3 = valores[2] - slider3.value
        v4 = valores[3] - slider4.value
        v5 = valores[4] - slider5.value
        v6 = valores[5] - slider6.value
        v7 = valores[6] - slider7.value
        v8 = valores[7] - slider8.value
        v9 = valores[8] - slider9.value
        v10 = valores[9] - slider10.value
        pontDisp.value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10
        pontDisp.innerHTML = pontDisp.value


        if (pontDisp.value >= 0) {
            botao.disabled = false
        } else {
            botao.disabled = true;
        }
    }

    //-------------------------------------------------------------------

    output7.innerHTML = valores[6];
    slider7.value = valores[6];
    var x = slider7.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider7.style.background = color;

    slider7.oninput = function () {
        output7.innerHTML = this.value + " pts";
        v1 = valores[0] - slider1.value
        v2 = valores[1] - slider2.value
        v3 = valores[2] - slider3.value
        v4 = valores[3] - slider4.value
        v5 = valores[4] - slider5.value
        v6 = valores[5] - slider6.value
        v7 = valores[6] - slider7.value
        v8 = valores[7] - slider8.value
        v9 = valores[8] - slider9.value
        v10 = valores[9] - slider10.value
        pontDisp.value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10
        pontDisp.innerHTML = pontDisp.value


        if (pontDisp.value >= 0) {
            botao.disabled = false
        } else {
            botao.disabled = true;
        }
    }

    //-------------------------------------------------------------------

    output8.innerHTML = valores[7];
    slider8.value = valores[7];
    var x = slider8.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider8.style.background = color;

    slider8.oninput = function () {
        output8.innerHTML = this.value + " pts";
        v1 = valores[0] - slider1.value
        v2 = valores[1] - slider2.value
        v3 = valores[2] - slider3.value
        v4 = valores[3] - slider4.value
        v5 = valores[4] - slider5.value
        v6 = valores[5] - slider6.value
        v7 = valores[6] - slider7.value
        v8 = valores[7] - slider8.value
        v9 = valores[8] - slider9.value
        v10 = valores[9] - slider10.value
        pontDisp.value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10
        pontDisp.innerHTML = pontDisp.value


        if (pontDisp.value >= 0) {
            botao.disabled = false
        } else {
            botao.disabled = true;
        }
    }

    //-------------------------------------------------------------------

    output9.innerHTML = valores[8];
    slider9.value = valores[8];
    var x = slider9.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider9.style.background = color;

    slider9.oninput = function () {
        output9.innerHTML = this.value + " pts";
        v1 = valores[0] - slider1.value
        v2 = valores[1] - slider2.value
        v3 = valores[2] - slider3.value
        v4 = valores[3] - slider4.value
        v5 = valores[4] - slider5.value
        v6 = valores[5] - slider6.value
        v7 = valores[6] - slider7.value
        v8 = valores[7] - slider8.value
        v9 = valores[8] - slider9.value
        v10 = valores[9] - slider10.value
        pontDisp.value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10
        pontDisp.innerHTML = pontDisp.value


        if (pontDisp.value >= 0) {
            botao.disabled = false
        } else {
            botao.disabled = true;
        }
    }

    //-------------------------------------------------------------------

    output10.innerHTML = valores[9];
    slider10.value = valores[9];
    var x = slider10.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider10.style.background = color;

    slider10.oninput = function () {
        output10.innerHTML = this.value + " pts";
        v1 = valores[0] - slider1.value
        v2 = valores[1] - slider2.value
        v3 = valores[2] - slider3.value
        v4 = valores[3] - slider4.value
        v5 = valores[4] - slider5.value
        v6 = valores[5] - slider6.value
        v7 = valores[6] - slider7.value
        v8 = valores[7] - slider8.value
        v9 = valores[8] - slider9.value
        v10 = valores[9] - slider10.value
        pontDisp.value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10
        pontDisp.innerHTML = pontDisp.value


        if (pontDisp.value >= 0) {
            botao.disabled = false
        } else {
            botao.disabled = true;
        }
    }



}