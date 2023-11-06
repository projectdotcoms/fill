const item = document.querySelectorAll(".item");
// let arr;
// for (let i = 0; i < 10; i++) {
//   arr.push(false);
// }
for (let i = 0; i < 10; i++) {
  item[i].addEventListener("click", () => {
    var a = i+1;
    while (a < item.length) {
      item[a].style.backgroundColor = "white";
      a++;
    }
    while (i >= 0) {
      item[i].style.backgroundColor = "rgb(9, 124, 177)";
      //   arr[i] = true;
      i--;
    }
  });
}
