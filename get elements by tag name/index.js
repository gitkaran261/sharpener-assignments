const listItems = document.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++){
    listItems[i].style.fontStyle = "italic";
}
if (listItems[4]) {
    listItems[4].style.color = "blue"
}