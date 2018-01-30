var katzDeli = [];

function currentLine(katzDeliLine){
  let lineList = ['The line is currently:'];
  if (katzDeliLine.length === 0){
	  lineList.push(' empty.');
  }
  
  for (let i = 0; i < katzDeliLine.length; i++){
    lineList.push(i+1 + '. ' + katzDeliLine[i]);
  }

  return lineList.join(' ');
}
var yourMom = "Sara";
var katzDeliLine = ['Pam', 'Jessica', yourMom];
console.log(currentLine(katzDeliLine));

var next = "Rachel";

function takeANumber(line, name){
  katzDeliLine.push(name);
  return name + "is now" + katzDeliLine.length + "in line";
}










