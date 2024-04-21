var learnedJavascript = true;
if (learnedJavascript) {
    console.log("you can see this file created with Typescript");
}
else {
    console.log("you can't see this file, get out of here ");
}
// ------------------------
var intermiami = 11;
var fcdallas = 11;
var messi = 1;
var messiPlays;
var words = "i'm exited to see messi";
function jugar(equipo1, equipo2, messiPlays) {
    var motivo = "";
    if (messiPlays) {
        equipo1 += 1;
        motivo = "because messi plays";
    }
    if (equipo1 > equipo2)
        console.log("".concat(equipo1, " wins ").concat(motivo));
    if (equipo1 == equipo2)
        console.log("".concat(equipo1, " and ").concat(equipo2, " Tie"));
    if (equipo1 < equipo2)
        console.log("".concat(equipo2, " wins"));
}
// ----------------------
// no utilizar any

var arreglo = [1, 2, 3, 4, 5];
var arreglo2 = ["string1", "string2"];
var programador = {
    nombre: "Lux wise",
    tecnologias: ["react", "Typescript", "express"],
    tomaCafe: false,
};
var programador2 = {
    nombre: "Felipe bueno",
    tecnologias: ["angular"],
    tomaCafe: null,
};
