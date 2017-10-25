function produceDrivingRange(range) {
  return function(startBlock, endBlock) {

    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let distance = Math.abs(end - start);
    let totalRange = range - distance;

    if (totalRange > 0){
      return `within range by ${totalRange}`
    } else {
      return `${Math.abs(totalRange)} blocks out of range`
    }
  }
}


function produceTipCalculator(tipAmount) {
  return function(fareTotal) {
    return tipAmount * fareTotal;
  }
}


function createDriver() {
  let driverId = 0;
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId;
    }
  }
}