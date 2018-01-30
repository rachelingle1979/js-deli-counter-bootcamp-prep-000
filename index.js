var katzDeli = [];

function currentLine(katzDeliLine){
  let lineList = ['The line is currently'];
  if (katzDeliLine.length === 0){
	  lineList.push(' empty.');
  }
  
  for (let i = 0; i < katzDeliLine.length; i++){
    lineList.push(":" + i+1 + '. ' + katzDeliLine[i]);
  }

  return lineList.join(' ');
}

var katzDeliLine = [];
console.log(currentLine(katzDeliLine));

function takeANumber(line, name)