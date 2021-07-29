function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    var returnValue;
    rawFile.open("GET", "Inputs/kayitli-" + file + ".txt", false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText.split("\n");
                returnValue = allText[Math.floor(Math.random() * allText.length)];
                returnValue = returnValue.replace("https://youtu.be/", "");
            }
        }
    }
    rawFile.send(null);
    return returnValue;
}
