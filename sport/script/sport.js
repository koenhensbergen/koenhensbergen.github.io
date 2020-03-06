//positie mogelijkheden x, y
var x = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300];
var y = [100, 200, 300, 400, 500];
//gaat true als op start is gedrukt. activeert count() zodra true is
var aan = false;
//aantal clicks en de secondes die je nog hebt
var clicks = 0;
var aftellen = 10;

//zodra op start is gedrukt begint aftellen
function start () {
aan = true;

var wl = document.getElementById("wl");
var hs = document.getElementById("hs");

//roept interval aan die aftelt per 1000miliseconde oftewel 1 seconde
var interval = setInterval(function() {
    document.getElementById("tijd").innerHTML = --aftellen;
       
//zodra aftellen 0 is stopt de timer en is het spel voorbij
    if (aftellen <= 0)
    {
       document.getElementById("tijd").innerHTML = "0";
       document.getElementById("wl").innerHTML = "GAME OVER!";  
       document.getElementById("hs").innerHTML = "Highscore: " + clicks;     
       clearInterval(interval);
       wl.style.WebkitAnimation = "flash linear 3s infinite";
       hs.style.WebkitAnimation = "beat 3s infinite";
//stopt de interval zodra hij op 0 komt
    }
}, 1000);

}

//optel functie. bij elke keer dat je de bal klikt wordt er 1 bij opgeteld
document.getElementById("bal").addEventListener("click", function(){
// function count() {
    if (aan == true) {

        if (aftellen != 0) {
        clicks++;
        document.getElementById("clicks").innerHTML = clicks;
        // console.log(clicks);
        var plekx = x[Math.floor(Math.random()*x.length)];
        var pleky = y[Math.floor(Math.random()*y.length)];
        document.getElementById("bal").style.top= pleky + "px";
        document.getElementById("bal").style.left= plekx + "px";
        console.log(plekx, pleky);

    }
    }
    });





    


