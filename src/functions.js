$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

var x = window.matchMedia("(max-width: 1000px)")
outer(x) // Call listener function at run time
x.addListener(outer)

function outer(x) {
    if (x.matches) {
        function clearDropDowns(current) {
            var dropdowns = document.querySelectorAll(`div.dropdown-content:not(.${current})`);
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
        this.onKnowledge = function () {
            clearDropDowns("knowledge");
            document.getElementById("knowledge").classList.toggle("show");
        }

        this.OnlineHandel = function () {
            clearDropDowns("onlineHandel");
            document.getElementById("OnlineHandel").classList.toggle("show");
        }
        this.onDropDownFood = function () {
            clearDropDowns("food");
            document.getElementById("dropDownFood").classList.toggle("show");
        }
        this.toggleDropdown = function () {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }
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
        <div id="dropDownFood" class="dropdown-content food">
            <a id="navFoodShops" href="food-shops.html">Geschäfte</a>
            <a id="navFoodRestaurants" href="food-restaurants.html">Restaurants</a>
            <a id="navRecipe" href="recipe.html">Kochrezepte</a>
        </div>
    </div>

    <a id="navReuse" href="Weiterverwenden.html">Weiterverwenden</a>

    <div class="dropdown">
      <button onclick="onKnowledge()" class="dropbtn">
        Wissenswertes
        <span class="fa fa-caret-down" style="pointer-events:none;"></span>
      </button>
      <div id="knowledge" class="dropdown-content knowledge">
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
      <div id="OnlineHandel" class="dropdown-content onlineHandel">
        <a id="navOnlineShopping" href="Online-Handel.html">Online Handel</a>
        <a id="navWool" href="Wolle.html">Wolle</a>
        <a id="navZeroWaste" href="ZeroWaste.html">Zero Waste</a>
      </div>
    </div>

    <a href="javascript:void(0);" class="icon" onclick="(new outer(x)).toggleDropdown();">
      <i class="fa fa-bars"></i>
    </a>

  </div>
  
`;

document.getElementById("footer").innerHTML = `
<div class="footer-left">
  
  
<p class="footer-links">
  <a id="navStart" href="index.html">Home</a>
  <a href="about_us.html">Über uns</a>
  <a href="impressum.html">Impressum</a>
</p>

</div>

<div class="footer-center">


<div>
  <i class="fa fa-envelope"></i>
  <p><a href="mailto:heidrun@nachhaltig-in-baden.com">heidrun@nachhaltig-in-baden.com</a></p>
</div>

</div>

<div class="footer-right">

<p class="footer-company-about">
  <span>Nachhaltig in Baden</span>
  Umweltbewusst und regional einkaufen, Initiativen in Baden, Informationen und Tipps für ein nachhaltiges Leben
  und alle interessanten Termine dazu.
</p>


</div>
  
`;



function setActive(elementId) {
    const element = document.getElementById(elementId);
    element.className += "active";
}