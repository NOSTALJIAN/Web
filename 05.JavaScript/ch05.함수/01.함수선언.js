function 더하기(a, b) {                 //  선언적 함수
    return a+b;
}

const annoySun = function (a, b) {      //  익명 함수
    return a+b;
}

console.log(더하기(3, 4));
console.log(annoySun(3, 4));

const arrowSum = (a, b) => a + b;       //  화살표 함수, 람다 함수
console.log(arrowSum(3, 4));