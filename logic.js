let a = [1045.0,234,456.98,238.98,3455,234,1045.0,234]

function promedio(arr){
  let pro = 0;
  for(value of arr){
    pro += value
  }
  return pro / arr.length;
}

promedio(a)

function max (arr){
  let valueMax = 0;
  for(value of arr){
    if(value > valueMax){
      valueMax = value
    }
  }
  return valueMax;
}

max(a)


function calcularModa(arreglo = []) {
  const objetoPrincipal = {};  
  arreglo.map( elementoDentroDelObjeto => {
    if (objetoPrincipal[elementoDentroDelObjeto]) {
        objetoPrincipal[elementoDentroDelObjeto] += 1;    
    } else { 
        objetoPrincipal[elementoDentroDelObjeto] = 1;
    }
  });
  const objetoConvertidoArray = Object.entries(objetoPrincipal).sort((elementoA, elementoB) =>  elementoA[1] - elementoB[1] );
        
  const moda = objetoConvertidoArray[objetoConvertidoArray.length - 1];
  return moda
}

calcularModa(a)


function sumTotal (arr){
  let total = 0
  for(value of arr){
    total += value
  }
  return total
}
sumTotal(a)


function sumTotalLess (arr){
  let total = 0
  for(value of arr){
    if(value < 1500){
      total += value
    }
  }
  return total
}
sumTotalLess(a)
