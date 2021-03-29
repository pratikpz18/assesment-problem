
a=[1,2,2,2,4,4,4,5]
result = { };
let maxEl = a[0], maxCount = 1
let minCount = Number.MAX_SAFE_INTEGER, minEl = 0;
for(let i = 0; i < a.length; ++i) {
    if(!result[a[i]]){
      result[a[i]]=0;
    }
    result[a[i]]++;
}
for (const [key, value] of Object.entries(result)) {
  if(value>maxCount){
    maxCount=value
    maxEl=key
  }
  if (value < minCount) {
    minCount = value;
    minEl = key;
  }
}
console.log([maxEl,minEl])