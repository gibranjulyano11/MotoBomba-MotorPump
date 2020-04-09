var bomberos = [];
var motobombas = [];
var idiG = [];
var idiJ = [];
var conten1 = document.getElementById("conten1");
var conten2 = document.getElementById("conten2");


document.getElementById("agregarBombero")
    .addEventListener("click", function() {
        document.getElementById("conten1").innerHTML = "";
        idiG = [];
        let nom = document.getElementById("nombre").value;
        let fecha = document.getElementById("fecha").value;
        let bomber = new Bombero(nom, fecha);
        bomberos.push(bomber);
        dibujarBombero();
        marcarVariosBomberos();

        document.getElementById("nombre").value = "";
        document.getElementById("fecha").value = "";


    });
document.getElementById("agregarMotobomba")
    .addEventListener("click", function() {
        idiJ = [];
        document.getElementById("conten2").innerHTML = "";
        let codigo = document.getElementById("codigo").value;
        let motobomb = new Motobomba(codigo);
        motobombas.push(motobomb);
        dibujarMotobomba();
        marcarVariasMotobombas();
        document.getElementById("codigo").value = "";



    });
document.getElementById("asociar")
    .addEventListener("click", function() {


    });

dibujarBombero = () => {
    for (var i = 0; i < bomberos.length; i++) {
        var celda = document.createElement('div');
        celda.className = 'celdas';
        celda.id = i;
        idiG.push(i);
        celda.appendChild(document.createTextNode(bomberos[i].nombre));

        conten1.appendChild(celda);

    }
}


dibujarMotobomba = () => {
    for (var i = 0; i < motobombas.length; i++) {
        var celda = document.createElement('div');
        celda.className = 'celdas';
        celda.id = i;
        idiJ.push(i);
        celda.appendChild(document.createTextNode("M" + i));
        conten2.appendChild(celda);

    }
}

marcarVariosBomberos = () => {
    for (let d = 0; d < idiG.length; d++) {
        marcaNumeroB(d);
    }
}

marcaNumeroB = (d) => {
    let no = document.getElementById(d);
    let g = document.getElementById(d).innerHTML;
    let a1 = 0;
    no.addEventListener("click", function() {
        if (a1 === 0 && g != "0") {
            no.style.backgroundColor = "green";
            a1 = 1;
            console.log(no.innerHTML);
            //console.log(g);
        } else if (g == "0") {} else {
            no.style.backgroundColor = "black";
            a1 = 0;
            //console.log(g);
        }
    });
}

marcarVariasMotobombas = () => {
    for (let d = 0; d < idiJ.length; d++) {
        marcaNumeroM(d);
    }
}

marcaNumeroM = (d) => {
    let no = document.getElementById(d);
    let g = document.getElementById(d).innerHTML;
    let a1 = 0;
    no.addEventListener("click", function() {
        if (a1 === 0 && g != "0") {
            no.style.backgroundColor = "green";
            a1 = 1;
            console.log(no.innerHTML);
            //console.log(g);
        } else if (g == "0") {} else {
            no.style.backgroundColor = "black";
            a1 = 0;
            //console.log(g);
        }
    });
}
