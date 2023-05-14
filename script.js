function pickDice(dice) {
    var image = document.getElementById(dice);

    console.log(image.src)

    if (image.src.match("test1.png")) {
        image.src = "test2.png";
    } else if (image.src.match("test2.png")) {
        image.src = "test3.png";
    } else if (image.src.match("test3.png")) {
        image.src = "test1.png";
        }
}
function pick(dic) {
    var image = document.getElementById(dic);

    console.log(image.src)

    if (image.src.match("test3.png")) {
        image.src = "test2.png";
    } else if (image.src.match("test2.png")) {
        image.src = "test1.png";
    } else if (image.src.match("test1.png")) {
        image.src = "test3.png";
    }
}