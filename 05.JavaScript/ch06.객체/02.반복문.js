let personInfo = {
    'name' : '제임스', 'age' : 28, 'gender' : '남자',
    'height' : 175, 'job' : '프로그래머', 'bmi' : 30.0
}

for(let attr in personInfo)
    console.log(attr, ':', personInfo[attr]);
console.log("\n-------------------- 구분선 --------------------\n");

// array 에서는 for .. of 반복문을 사용해야 하지만, for .. in 을 사용할 수도 있음
let fruits = ['감', '귤', '배'];
for (let index in fruits)
    console.log(index, fruits[index]);
console.log("\n-------------------- 구분선 --------------------\n");
for (let fruit of fruits)
    console.log(fruit);
console.log("\n-------------------- 구분선 --------------------\n");

/*
 * JSON(JavaScript Object Notation)
 *      외부와 데이터를 주고 받는 경우에 사용
 *      사실상의 업계 표준(de facto standard)
 */
const externalForm = JSON.stringify(personInfo);        //  string 타입
console.log(externalForm);
console.log("\n-------------------- 구분선 --------------------\n");

const internalForm = JSON.parse(externalForm);          //  object 타입
console.log(internalForm);
console.log("\n-------------------- 구분선 --------------------\n");

const exFruits = JSON.stringify(fruits);
console.log(exFruits);
console.log("\n-------------------- 구분선 --------------------\n");

const inFruits = JSON.parse(exFruits);
console.log(inFruits);