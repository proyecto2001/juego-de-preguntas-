function LaTeX(code) {
  return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
}

function opnLaTeX(code) {
  return `<img src="${LaTeX(code)}" style="height:40px">`;
}

let baseDePreguntas = [
  {
    pregunta: "¿Cual es el hueso más largo del esqueleto humano?",
    imagen: "https://i.ibb.co/xq3CKhr/FEMUR.jpg",
    respuesta: "Fémur",
    distractores: ["Parietal", "Occipital", "Radio"],
  },
  
  {
    pregunta: "Señale la función que no corresponde al sistema óseo:",
    respuesta: "Almacenar proteínas y glucógeno",
    distractores: [" Servir de palanca para los músculos", "Almacenar calcio y fósforo", "Proteger órganos vitales"],
  },  {
    pregunta: "Con respecto al esternón señale lo correcto:",
    imagen: "https://i.ibb.co/k1K71ct/caraaaaaaaaaa.jpg",
    respuesta: "Es un hueso plano y se articula con las costillas",
    distractores: ["Está unido a las costillas flotantes ", "Se articula con el omóplato", "Es lateral en relación a la clavícula"],
  },
  {
    pregunta: "El hueso más pequeño del cuerpo humano es",
    imagen: "https://i.ibb.co/R4xCChc/estr.jpg",
    respuesta: "Estribo",
    distractores: ["Yunque", "Martillo", "Cubito"],
  }, {
    pregunta: "¿Cuántos huesos tiene el cuerpo humano?",
    imagen: "https://i.ibb.co/cX2xGtg/esqqq.jpg",
    respuesta: "206",
    distractores: ["205", "210", "207"],
  },
   {
    pregunta: "La médula ósea es:",
    imagen: "https://i.ibb.co/hsHQgWY/medula-osea.jpg",
    respuesta: "Sustancia interior de los huesos, que tiene funciones hematopoyéticas",
    distractores: ["Membrana densa y delgada ubicada en la superficie de los huesos", "Parte rígida y dura del hueso", "Un tejido flexible"],
  }, 
  {
    pregunta: "Los huesos que jamás crecen son: ",
    respuesta: "Los del oido",
    distractores: ["El estribo", "Los de la cara", "Los de las manos"],
  }, {
    pregunta: " El hueso de la imagen es:",
    imagen: "https://i.ibb.co/MDMwrNn/radio-hueso.jpg",
    respuesta: "Radio",
    distractores: ["Cubito", "Occipital", "Humero"],
  }, 
  {
    pregunta: " El esqueleto apendicular comprende",
    imagen: "https://i.ibb.co/855tFFz/apendicular.jpg",
    respuesta: "126 huesos",
    distractores: ["80 huesos", "60 huesos", "125 huesos"],
  },{
    pregunta: "El esqueleto axial comprende: ",
    imagen: "https://i.ibb.co/Qfy876k/esqueleto-axial-wide.jpg",
    respuesta: "80 huesos",
    distractores: ["126 huesos", " 60 huesos", "90 huesos"],
  },
];
