window.onload = function () {
  getDatetime();
  function getDatetime() {
    const now = new Date();
    const yy = now.getFullYear();
    const dd = now.getDate();
    const MM = now.getMonth() + 1;
    const ss = now.getSeconds();
    const mm = now.getMinutes();
    const hh = now.getHours();

    let date = `${yy}/${twoDigit(MM)}/${twoDigit(dd)}`;
    let time = `${twoDigit(hh)}:${twoDigit(mm)}:${twoDigit(ss)}`;

    document.getElementById("clock").innerHTML = date + time;
  }
};
function twoDigit(num) {
  return num < 10 ? "0" + num : num;
}
