
function clearDropDowns() {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        clearDropDowns();
    }
}

function Technologie() {
    clearDropDowns();
    document.getElementById("Technologie").classList.toggle("show");
}


function OnlineHandel() {
    clearDropDowns();
    document.getElementById("OnlineHandel").classList.toggle("show");
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


document.getElementById("navMenu").innerHTML = `
  <div class="topnav" id="myTopnav">
    <a id="navStart" href="index.html">Start</a>
    <a id="navCook" href="MonatlichesKochrezept.html">Monatliches Kochrezept</a>
    <a id="navWeekly" href="WoechentlicherTipp.html">Wöchentlicher Tipp</a>
    <a id="navFood" href="Essen.html">Essen</a>
    <div class="dropdown">
      <button onclick="Technologie()" class="dropbtn">Technologie
        <i class="fa fa-caret-down"></i>
      </button>
      <div id="Technologie" class="dropdown-content">
        <a id="navEnergy" href="Energie.html">Energie</a>
        <a id="navTraffic" href="Verkehr.html">Verkehr</a>
        <a id="navCo2" href="CO2Komp.html">CO<sub>2</sub> Kompensation</a>
      </div>
    </div>
    <div class="dropdown">
      <button onclick="OnlineHandel()" class="dropbtn">Überregional
        <i class="fa fa-caret-down"></i>
      </button>
      <div id="OnlineHandel" class="dropdown-content">
        <a id="navOnlineShopping" href="Online-Handel.html">Online Handel</a>
        <a id="navWool" href="Wolle.html">Wolle</a>
        <a id="navZeroWaste" href="ZeroWaste.html">Zero Waste</a>
        <a id="navMiscShopping" href="divGesch.html">Diverse Geschäfte</a>
      </div>
    </div>
    <a id="navReuse" href="Weiterverwenden.html">Weiterverwenden</a>

    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="fa fa-bars"></i>
    </a>

  </div>
`;

function setActive(elementId) {
    const element = document.getElementById(elementId);
    element.className += "active";
}