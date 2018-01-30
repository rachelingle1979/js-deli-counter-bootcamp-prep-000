var katzDeli = [];

function currentLine(katzDeliLine){
  let lineList = ['The line is currently'];
  if (katzDeliLine.length === 0){
	  return [...lineList, " empty"].join('');
  }
  
  for (let i = 0; i < katzDeliLine.length; i++){
    fill.push(' ', i+1, '. ', katzDeliLine[i]);
  }
  [lineList ...fill]
  return lineList.join('');
}
var yourMom = "Sara";
var katzDeliLine = ['Pam', 'Jessica', yourMom];
console.log(currentLine(katzDeliLine));

var next = "Rachel";

function takeANumber(line, name){
  line.push(name);
  return name + " is now " + line.length + " in line.";
}

console.log(takeANumber(katzDeliLine,next));










