var fibonachchiArray = [];
function getFibonachchiArray(n){
    var getSum = 0;
    for( var i=0; i<n; i++) {
        if (fibonachchiArray.length > 1) {
             getSum += fibonachchiArray[fibonachchiArray.length-2]
        }
        if (fibonachchiArray.length === 1) {
            getSum = 1
        }
        if (fibonachchiArray.length === 0) {
            getSum = 1
        }
        fibonachchiArray.push(getSum);
    }
return fibonachchiArray
}
fibonachchiArray = getFibonachchiArray(40);
var evenValuesFibonachchi = arrayNumbers.filter(x => x%2===0);
var oddValuesFibonachchi = arrayNumbers.filter(x => x%2!=0);
var changedEvenValues=evenValuesFibonachchi.map(x=>x-2);
var resultChangedEvenValues=changedEvenValues.reduce(function getSum(sum,current){return sum+current});
var changedOddValues=oddValuesFibonachchi.map(x=>x-4);
var resultChangedOddValues=changedOddValues.reduce(function getSum(sum,current){return sum+current});
var averageResultOdd=resultChangedOddValues/(oddValuesFibonachchi.length+1);
var averageResultEven=resultChangedEvenValues/(evenValuesFibonachchi.length+1);
console.log(oddValuesFibonachchi);
console.log(evenValuesFibonachchi);
console.log(changedEvenValues);
console.log(changedOddValues);
console.log(resultChangedOddValues);
console.log(resultChangedEvenValues);
console.log(averageResultOdd);
console.log(averageResultEven)
