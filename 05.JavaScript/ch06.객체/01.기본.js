// 배열(array) - List
let fruits = ['감', '밤', '배'];
let personArray = ['제임스', 28, '남자', 175, '프로그래머', 30.0];
console.log(fruits);
console.log(personArray);
console.log("\n-------------------- 구분선 --------------------\n");

// 객체(object) - Map
let personInfo = {
    'name' : '제임스', 'age' : 28, 'gender' : '남자',
    'height' : 175, 'job' : '프로그래머', 'bmi' : 30.0
}
console.log(personInfo);
console.log("\n-------------------- 구분선 --------------------\n");

// key 값으로 스트링인 경우에 ' ' 생략 가능
// 한글 key 값도 사용 가능
let maria = {name: '마리아', age: 23, 성별: '여자'}
console.log(maria);
console.log("\n-------------------- 구분선 --------------------\n");

// 객체에 대한 접근(access)
console.log(maria['name'], maria['age']);       //  이런 식으로는 사용하지 않음
console.log(maria.name, maria.age);
console.log("\n-------------------- 구분선 --------------------\n");

let key = 'age';
console.log(maria[key]);        //  maria.key 는 허용되지 않음
console.log("\n-------------------- 구분선 --------------------\n");

const name = '홍길동';
const age = 35;
const gender = '남자';
const hong = {name: name, age: age, gender: gender};
console.log(hong);
console.log("\n-------------------- 구분선 --------------------\n");

// ES-6
// key값과 같은 변수명은 생략 가능
const hong2 = {name, age: 50, gender};
console.log(hong2);