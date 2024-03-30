let learnedJavascript: boolean = true;

if (learnedJavascript) {
  console.log("you can see this file created with Typescript");
} else {
  console.log("you can't see this file, get out of here ");
}

// ------------------------

let intermiami: number | null | undefined = 11;
let fcdallas: number = 11;
let messi: number = 1;
let messiPlays: boolean;

let words: string = "i'm exited to see messi";

function jugar(equipo1: number, equipo2: number, messiPlays: boolean): void {
  let motivo: string = "";
  if (messiPlays) {
    equipo1 += 1;
    motivo = "because messi plays";
  }
  if (equipo1 > equipo2) console.log(`${equipo1} wins ${motivo}`);
  if (equipo1 == equipo2) console.log(`${equipo1} and ${equipo2} Tie`);
  if (equipo1 < equipo2) console.log(`${equipo2} wins`);
}

// ----------------------

// no utilizar any

let arreglo: number[] = [1, 2, 3, 4, 5];
let arreglo2: string[] = ["string1", "string2"];

// ----------------------

// typw simpre declarado con mayuscula
type Programador = {
  nombre: string;
  tecnologias: string[];
  tomaCafe: boolean | null;
};

let programador: Programador = {
  nombre: "Lux wise",
  tecnologias: ["react", "Typescript", "express"],
  tomaCafe: false,
};

let programador2: Programador = {
  nombre: "Felipe bueno",
  tecnologias: ["angular"],
  tomaCafe: null,
};
