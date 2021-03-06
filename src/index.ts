import "./styles.css";
/**
 * Para tener control de la gente que hay en una disco el gerente quiere
saber cuantas personas de diferentes edades han entrado.
• No se han permitido la entrada a menores de 18 ni mayores de 40.
Para la carga de los datos se usa la función aleatorio (use la función
aleatorio(menorValor,mayorValor), es decir aleatorio(19,40))
• Se sabe que la cantidad total de personas dentro del local es de 270
• Se quiere saber:
• Cuántas personas son menores de 21 años
• Cuántas personas mayores o igual a 21 años
• Cuántas personas en total
 */

function disco(array: number[]) {
  let mayorVeintiuno: number = 0;
  let menorVeintiuno: number = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] = Math.round(Math.random() * (40 - 18) + 18);
    if (array[i] >= 21) {
      mayorVeintiuno++;
    } else {
      menorVeintiuno++;
    }
  }
  console.log("Cantidad de personas: " + array[i]);
  console.log("Personas mayores o igual a 21: " + mayorVeintiuno);
  console.log("Personas menores a 21: " + menorVeintiuno);
}

let array: number[] = new Array(240);

disco(array);
