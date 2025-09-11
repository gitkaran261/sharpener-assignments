const fruit = document.getElementsByClassName("fruit");

for (let i = 0; i < fruit.length; i++) {
    fruit[i].style.fontWeight = "bold";
}
if (fruit.length >= 3) {
    fruit[2].style.backgroundColor = "yellow";

}