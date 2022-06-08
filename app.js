//Some Every Exercise

//hasOddNumber
function hasOddNumber(arr){
    return arr.some(function(n){
        if (n%2 !== 0){
            return true;
        } 
    })
    return false
}

//hasAZero
function hasAZero(num){
    return num.toString().split('').some(function(i){
        return i === '0';
    })
}

//hasOnlyOddNumbers
function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
        if(n%2 !==0){
            return false;
        }
    })
    return true;
}

//hasNoDuplicates
function hasNoDuplicates(arr){
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    })
}

//hasCertainKey
function hasCertainKey(objects, key){
    return objects.every(function(val){
        return key in val;
    });
}

//hasCertainValue
function hasCertainValue(objects, key, value){
    return objects.every(function(val){
        return val[key] = value;
    })
}