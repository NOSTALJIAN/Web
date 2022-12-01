const bYear = 1994;
const bMonth = 5;
const bDay = 17;

const today = new Date();
const tYear = today.getFullYear();
const tMonth = today.getMonth() + 1;
const tDay = today.getDate();

let fullAge;
if (bMonth < tMonth) {
    fullAge = tYear - bYear;
} else if (bMonth > tMonth) {
    fullAge = tYear - bYear -1;
} else {
    if (bMonth <= tMonth) {
        fullAge = tYear - bYear;
    } else {
        fullAge = tYear - bYear -1;
    }
}

console.log(`생년월일: ${bYear}-${(bMonth<10) ? '0' + bMonth : bMonth}-${(bDay<10) ? '0' + bDay : bDay}`);
console.log(`오늘날짜: ${tYear}-${(tMonth<10) ? '0' + tMonth : tMonth}-${(tDay<10) ? '0' + tDay : tDay}`);
console.log(`만나이: ${fullAge}`);