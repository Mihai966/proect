function pickDice(dice) {
    var image = document.getElementById(dice);

    console.log(image.src)

    if (image.src.match("start.png")) {
        image.src = "logo.png";
    } else if (image.src.match("logo.png")) {
        image.src = "slogan.png";
    } else if (image.src.match("slogan.png")) {
        image.src = "banner-cover.png";
    } else if (image.src.match("banner-cover.png")) {
        image.src = "cartea-de-vizita.png";
    } else if (image.src.match("cartea-de-vizita.png")) {
        image.src = "eticheta.png";
    }
}
function pick(dic) {
    var image = document.getElementById(dic);

    console.log(image.src)

    if (image.src.match("eticheta.png")) {
        image.src = "cartea-de-vizita.png";
    } else if (image.src.match("cartea-de-vizita.png")) {
        image.src = "banner-cover.png";
    } else if (image.src.match("banner-cover.png")) {
        image.src = "slogan.png";
    } else if (image.src.match("slogan.png")) {
        image.src = "logo.png";
    } else if (image.src.match("logo.png")) {
        image.src = "start.png";
    }
}