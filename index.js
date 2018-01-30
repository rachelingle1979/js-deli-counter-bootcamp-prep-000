var katzDeli = [];

function currentLine(katzDeliLine){
  let lineList = 'The line is currently: ';
  for (let i = 0; i < katzDeliLine.length; i++){
    lineList.concat(indexOf(katzDeliLine[i]), '. ', katzDeliLine[i])
  }
  return lineList;
}

function takeANumber(line, name)