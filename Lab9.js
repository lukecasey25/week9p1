function printLyric() {


    for (i = 99; i >= 0; i--) {
        if (i >= 3) {

            document.getElementById("main").innerHTML += "<br/>" + i + " " + "Bottles of beer on the wall" + " " + i + " " + "bottles of beer, Take one down and pass it around," + " " + (i - 1) + " " + "bottles of beer on the wall.";

        }
        else if (i == 2) {

            document.getElementById("main").innerHTML += "<br/>" + i + " " + "Bottles of beer on the wall" + " " + i + " " + "bottles of beer, Take one down and pass it around," + " " + "1" + " " + "bottle of beer on the wall.";
        }
        else if (i == 1) {
            document.getElementById("main").innerHTML += "<br/>" + i + " " + "Bottle of beer on the wall" + " " + i + " " + "bottle of beer, Take one down and pass it around," + " no more " + "bottles of beer on the wall.";
        }
        else {
            document.getElementById("main").innerHTML += "<br/>" + "No more Bottles of beer on the wall no more bottles of beer, go to the store and buy some more, 99 bottles of beer on the wall";
        }



    }
}
