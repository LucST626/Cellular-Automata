const numero = 30;
function toBinary(numero) {
    return numero.toString(2).padStart(8, "0");
  }
  function getNeightbors(string, index){
//console.log(string)
  const centro = string[index]
  let izq, der
  index === 0 ? izq = "0" : izq = string[index -1 ]
    index === string.length-1 ? der = "0" : der = string[index +1]
    return  `${izq}${centro}${der}`
  }


  function createCases(num) {
    const binary = toBinary(num)
    const outputs = binary.split("")
    //console.log(outputs);
    const inputs = [
      "111",
      "110",
      "101",
      "100",
      "011",
      "010",
      "001",
      "000"
    ]
    const cases = []
    for  (let i=0; i < inputs.length; i++){
        cases.push ({
          input: inputs[i],
          output: outputs[i]
        }
        )
      }
      return cases
  }

  function applyRule(axiom, rule){
    const cases =  createCases(rule)
    let newString = ""
    for (let i=0 ; i< axiom.length; i++) {
      const neighbors = getNeightbors(axiom, i)
      const ruleCase = cases.find(cell => cell.input == neighbors)
      newString += ruleCase.output;

    }
    return newString
  }

  function generate(rule, generations){
const axiom = "0".repeat(8) + "1" + "0".repeat(8)
let generaciones = []
let newString = axiom
generaciones.push(axiom)
  for (let i=0; i<generations; i++ ){
    newString = applyRule(newString, rule)
    generaciones.push(newString)
}
return generaciones
//console.log(axiom)

  }

  function changeChars(array, char1, char2){

    return array.map(string => string.split("").map( char => char === "1" ? char1 : char2).join(""))
  }
  
  const resultado = generate(30, 70)
  const dibujito = changeChars(resultado, "◉", " ")
  dibujito.forEach((generacion) =>{
    console.log(generacion);
})

