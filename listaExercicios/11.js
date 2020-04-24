function anoBissexto (ano) {
  const multiploQuatro = ano % 4
  const multiploCem = ano % 100
  const multiplo400 = ano % 400
  
  if (multiplo400 == 0) {
    return true
  } else if (multiploCem == 0) {
    return false
  } else if (multiploQuatro == 0){
    return true
  }
  else {
    return false
  }

  //return multiplo400 || (multiploQuatro && !multiploCem)
}

console.log(anoBissexto(4))
console.log(anoBissexto(100))
console.log(anoBissexto(400))
console.log(anoBissexto(2019))
console.log(anoBissexto(2020))