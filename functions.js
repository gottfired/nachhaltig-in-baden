
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

function onKnowledge() {
    clearDropDowns();
    document.getElementById("knowledge").classList.toggle("show");
}


function OnlineHandel() {
    clearDropDowns();
    document.getElementById("OnlineHandel").classList.toggle("show");
}

function onDropDownFood() {
    clearDropDowns();
    document.getElementById("dropDownFood").classList.toggle("show");
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
    <a id="navGardening" href="gardening.html">Gärtnern</a>
    <a id="navClothing" href="clothing.html">Kleidung</a>
    
    
    <div class="dropdown">
        <button onclick="onDropDownFood()" class="dropbtn">
            Essen
            <span class="fa fa-caret-down" style="pointer-events:none;"></span>
        </button>
        <div id="dropDownFood" class="dropdown-content">
            <a id="navFoodShops" href="food-shops.html">Geschäfte</a>
            <a id="navFoodRestaurants" href="food-restaurants.html">Restaurants</a>
        </div>
    </div>

    <a id="navReuse" href="Weiterverwenden.html">Weiterverwenden</a>

    <div class="dropdown">
      <button onclick="onKnowledge()" class="dropbtn">
        Wissenswertes
        <span class="fa fa-caret-down" style="pointer-events:none;"></span>
      </button>
      <div id="knowledge" class="dropdown-content">
        <a id="navUsefulInfo" href="useful-info.html">Tipps</a>
        <a id="navEnergy" href="Energie.html">Energie</a>
        <a id="navTraffic" href="Verkehr.html">Verkehr</a>
        <a id="navCo2" href="CO2Komp.html">CO<sub>2</sub> Kompensation</a>
        <a id="navCalendar" href="calendar.html">Kalender</a>
      </div>
    </div>

    <div class="dropdown">
      <button onclick="OnlineHandel()" class="dropbtn">
        Überregional
        <span class="fa fa-caret-down" style="pointer-events:none;"></span>
      </button>
      <div id="OnlineHandel" class="dropdown-content">
        <a id="navOnlineShopping" href="Online-Handel.html">Online Handel</a>
        <a id="navWool" href="Wolle.html">Wolle</a>
        <a id="navZeroWaste" href="ZeroWaste.html">Zero Waste</a>
      </div>
    </div>

    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="fa fa-bars"></i>
    </a>

  </div>
`;

function setActive(elementId) {
    const element = document.getElementById(elementId);
    element.className += "active";
}