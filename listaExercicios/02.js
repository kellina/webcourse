function tipoTriangulo (a, b, c) {
  if (a == b && b == c) {
    return 'equilátero'
  } else if (a != b && b != c) {
    return 'escaleno'
  } else {
    return 'isósceles'
  }
}

 
const t1 = tipoTriangulo (2, 1, 55)
console.log(t1)
 

