
var space;

function moveStar ()  {
    space = document.getElementById('space');
        console.log('Dale dale');
        space.style.backgroundImage= "url('img/rocket.png')";
        space.style.backgroundRepeat= "no-repeat";
          space.style.backgroundPosition = "center right 10%";
        //moveRocket();
}

var y = 0;
function moveRocket () {
    space.style.backgroundPosition = "center right -"+y+"%";
    if (y < 50) {
        y++;
    } else {
        return;
    }
    console.log("center right "+y+"%");
    setTimeout(moveRocket(), 1000);
    
}

moveStar();