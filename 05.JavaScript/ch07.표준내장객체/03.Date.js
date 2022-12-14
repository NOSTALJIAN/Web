// Date 객체 생성 방법
// 1. 현재 날짜/시간
let today = new Date();
console.log(today.toDateString());
console.log(today.toLocaleString()); //  Timezone 반영됨
console.log('\n-------------------- 구분선 --------------------\n');

// 2. Unix time 기준
let someDay = new Date(1.6e12); // 2020-06-16T04:30:00.000Z
console.log(someDay);
console.log('\n-------------------- 구분선 --------------------\n');

// 3. 문자열 기반
let strDate = new Date('December 1, 2022 17:05:00');
console.log(strDate);
console.log('\n-------------------- 구분선 --------------------\n');

// 4. 시간 요소(연, 월-1, 일, 시, 분, 초)
let timeDate = new Date(2022, 12, 1, 17, 6, 0);
console.log(timeDate);
console.log('\n-------------------- 구분선 --------------------\n');

// 매개변수로 받은 날짜/시간을 YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수
function twoDigit(num) {
  return num < 10 ? '0' + num : String(num);
}
function myDatetime(date) {
  return (
    `${date.getFullYear()}-${twoDigit(date.getMonth() + 1)}-${twoDigit(date.getDate())} ` +
    `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`
  );
}

console.log(myDatetime(timeDate));
console.log('\n-------------------- 구분선 --------------------\n');

// 시간 더하고 빼기
today.setDate(today.getDate() + 100);
console.log(myDatetime(today));
console.log('\n-------------------- 구분선 --------------------\n');

// 오늘 : 1년 11개월 8일 후
let date = new Date();
date.setFullYear(date.getFullYear() + 1);
date.setMonth(date.getMonth() + 11);
date.setDate(date.getDate() + 8);
console.log(date);
console.log(myDatetime(date));
console.log('\n-------------------- 구분선 --------------------\n');

// 시간 간격
let now = new Date();
console.log(now.getTime());
console.log(myDatetime(now));
const chrisMas = new Date(2022, 11, 25);
console.log(myDatetime(chrisMas));

const diffMs = chrisMas.getTime() - now.getTime(); // X-mas 와 오늘 사이의 밀리초
const diffDay = Math.ceil(diffMs / (24 * 60 * 60 * 1000)); // X-mas 까지 D-day
console.log(diffDay);
console.log('\n-------------------- 구분선 --------------------\n');
