// 지뢰 찾기
let N = 8;      // row, col이 8
let array = [];

// Step. 1 초기 지뢰밭 만들고 출력
// random 값 > 0.7 - 지뢰 (*), 나머지 값 - 평지 (.)
for (let i=0; i<N; i++) {
    let row = '';
    for (let k=0; k<N; k++) {
        if (Math.random() > 0.7)
            row += '*';
        else
            row += '.';
    }
    mines.push(row);
}

// for (let i=0; i<N; i++) {
//     // console.log(mines[i]);
//     for (let k=0; k<mines[i].length; k++) {
//         process.stdout.write(mines[i][k]);
//         process.stdout.write(' ');
//     }
//     console.log();
// }
printArray(mines);

function printArray(array) {
    for (let i=0; i<array.length; i++) {
        for (let k=0; k<array[i].length; k++) {
            process.stdout.write(array[i][k]);
            process.stdout.write(' ');
        }
        console.log();
    }
}