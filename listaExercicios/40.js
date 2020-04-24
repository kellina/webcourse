function conceitoNotas(notas) {
  for (let i = 0; i < notas.length; i++) {
    let nota = notas[i];
    if (nota > 0 && nota <= 4.9) {
      console.log("Conceito D");
    } else if (nota > 5 && nota <= 6.9) {
      console.log("Conceito C");
    } else if (nota > 7 && nota <= 8.9) {
      console.log("Conceito B");
    } else if (nota >= 9 && nota <= 10) {
      console.log("Conceito A");
    } else {
      console.log("Nota inválida");
    }
  }
}

conceitoNotas([3, 4, 6, 8, 9]);
