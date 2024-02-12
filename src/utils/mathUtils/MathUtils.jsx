export default function numberGenerator( params ) {
    if (params.difficult === 'Fácil') {
      return easyGenerator(params.operation);
    } else if (params.difficult === 'Intermedio') {
      return intermediumGenerator(params.operation);
    } else if (params.difficult === 'Difícil') {
      return hardGenerator(params.operation);
    }
  }
  
  function easyGenerator(operation) {
    let firstNumber, secondNumber;
    
    do {
      firstNumber = Math.floor(Math.random() * 10);
      secondNumber = Math.floor(Math.random() * 10);
    } while (!validateNumbers(operation, firstNumber, secondNumber));
  
    return [firstNumber, secondNumber];
  }
  
  function intermediumGenerator(operation) {
    let firstNumber, secondNumber;
    
    do {
      firstNumber = Math.floor(Math.random() * 100);
      secondNumber = Math.floor(Math.random() * 100);
    } while (!validateNumbers(operation, firstNumber, secondNumber));
  
    return [firstNumber, secondNumber];
  }
  
  function hardGenerator(operation) {
    let firstNumber, secondNumber;
    
    do {
      firstNumber = Math.floor(Math.random() * 1000);
      secondNumber = Math.floor(Math.random() * 1000);
    } while (!validateNumbers(operation, firstNumber, secondNumber));
  
    return [firstNumber, secondNumber];
  }
  
  function validateNumbers(operation, firstNumber, secondNumber) {
    if (operation === 'Resta' && firstNumber <= secondNumber) {
      return false; // La resta requiere que el primer número sea mayor que el segundo
    } else if (operation === 'División' && ((secondNumber === 0 ) ||   firstNumber < secondNumber)) {
      return false; // No se puede dividir entre 0 y los números deben ser divisibles
    }    
    
    return true; 
  }