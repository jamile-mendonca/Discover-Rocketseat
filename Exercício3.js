/* Crie uma função que receba uma string em celsius ou fahreinheit e faça a transformação de uma unidade para a outra */

//Transform degree('50F')
function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C');
  const fahreinheitExists = degree.toUpperCase().includes('F');


  //Fluxo de erro
  if (!celsiusExists && !fahreinheitExists) {
    throw new Error('Grau não identificado');
  }



  let updateDegree
  let formula
  let degreeSign
  //Fluxo alternativo, C -> F
  if (celsiusExists) {
    updateDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = celsius => celsius * 9 / 5 + 32;
    degreeSign = 'F';
  } else if (fahreinheitExists) {
    //Fluxo ideal, F -> C
    updateDegree = Number(degree.toUpperCase().replace("F", ""));
    formula = fahreinheit => (fahreinheit - 32) * 5 / 9;
    degreeSign = 'C';
  }

  return formula(updateDegree) + degreeSign;
}
try {
  console.log(transformDegree('10C'));
  console.log(transformDegree('50F'));
  transformDegree('50Z');
} catch (error) {
  console.log(error.message);
}
