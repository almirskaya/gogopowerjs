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
fibonachchiArrayOf40 = getFibonachchiArray(40);
const evenValuesFibonachchi = fibonachchiArrayOf40.filter(x => x%2===0);
const oddValuesFibonachchi = fibonachchiArrayOf40.filter(x => x%2!=0);
const changedEvenValues=evenValuesFibonachchi.map(x=>x-2);
const resultChangedEvenValues=changedEvenValues.reduce(function getSum(sum,current){return sum+current});
const changedOddValues=oddValuesFibonachchi.map(x=>x-4);
const resultChangedOddValues=changedOddValues.reduce(function getSum(sum,current){return sum+current});
const averageResultOdd=resultChangedOddValues/(oddValuesFibonachchi.length+1);
const averageResultEven=resultChangedEvenValues/(evenValuesFibonachchi.length+1);
console.log(oddValuesFibonachchi);
console.log(evenValuesFibonachchi);
console.log(changedEvenValues);
console.log(changedOddValues);
console.log(resultChangedOddValues);
console.log(resultChangedEvenValues);
console.log(averageResultOdd);
console.log(averageResultEven)
