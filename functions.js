"use strict";

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
var x = window.matchMedia("(max-width: 1000px)");
outer(x); // Call listener function at run time

x.addListener(outer);

function outer(x) {
  if (x.matches) {
    var clearDropDowns = function clearDropDowns(current) {
      var dropdowns = document.querySelectorAll("div.dropdown-content:not(.".concat(current, ")"));
      var i;

      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];

        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    };

    window.onclick = function (event) {
      if (!event.target.matches('.dropbtn')) {
        clearDropDowns();
      }
    };

    this.onKnowledge = function () {
      clearDropDowns("knowledge");
      document.getElementById("knowledge").classList.toggle("show");
    };

    this.OnlineHandel = function () {
      clearDropDowns("onlineHandel");
      document.getElementById("OnlineHandel").classList.toggle("show");
    };

    this.onDropDownFood = function () {
      clearDropDowns("food");
      document.getElementById("dropDownFood").classList.toggle("show");
    };

    this.toggleDropdown = function () {
      var x = document.getElementById("myTopnav");

      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    };
  }
}

document.getElementById("navMenu").innerHTML = "\n  <div class=\"topnav\" id=\"myTopnav\">\n    <a id=\"navStart\" href=\"index.html\">Start</a>\n    <a id=\"navGardening\" href=\"gardening.html\">G\xE4rtnern</a>\n    <a id=\"navClothing\" href=\"clothing.html\">Kleidung</a>\n    \n    \n    <div class=\"dropdown\">\n        <button onclick=\"onDropDownFood()\" class=\"dropbtn\">\n            Essen\n            <span class=\"fa fa-caret-down\" style=\"pointer-events:none;\"></span>\n        </button>\n        <div id=\"dropDownFood\" class=\"dropdown-content food\">\n            <a id=\"navFoodShops\" href=\"food-shops.html\">Gesch\xE4fte</a>\n            <a id=\"navFoodRestaurants\" href=\"food-restaurants.html\">Restaurants</a>\n            <a id=\"navRecipe\" href=\"recipe.html\">Kochrezepte</a>\n        </div>\n    </div>\n\n    <a id=\"navReuse\" href=\"Weiterverwenden.html\">Weiterverwenden</a>\n\n    <div class=\"dropdown\">\n      <button onclick=\"(new outer(x)).onKnowledge();\" class=\"dropbtn\">\n        Wissenswertes\n        <span class=\"fa fa-caret-down\" style=\"pointer-events:none;\"></span>\n      </button>\n      <div id=\"knowledge\" class=\"dropdown-content knowledge\">\n        <a id=\"navUsefulInfo\" href=\"useful-info.html\">Tipps</a>\n        <a id=\"navEnergy\" href=\"Energie.html\">Energie</a>\n        <a id=\"navTraffic\" href=\"Verkehr.html\">Verkehr</a>\n        <a id=\"navCo2\" href=\"CO2Komp.html\">CO<sub>2</sub> Kompensation</a>\n        <a id=\"navCalendar\" href=\"calendar.html\">Kalender</a>\n      </div>\n    </div>\n\n    <div class=\"dropdown\">\n      <button onclick=\"OnlineHandel()\" class=\"dropbtn\">\n        \xDCberregional\n        <span class=\"fa fa-caret-down\" style=\"pointer-events:none;\"></span>\n      </button>\n      <div id=\"OnlineHandel\" class=\"dropdown-content onlineHandel\">\n        <a id=\"navOnlineShopping\" href=\"Online-Handel.html\">Online Handel</a>\n        <a id=\"navWool\" href=\"Wolle.html\">Wolle</a>\n        <a id=\"navZeroWaste\" href=\"ZeroWaste.html\">Zero Waste</a>\n      </div>\n    </div>\n\n    <a href=\"javascript:void(0);\" class=\"icon\" onclick=\"(new outer(x)).toggleDropdown();\">\n      <i class=\"fa fa-bars\"></i>\n    </a>\n\n  </div>\n  \n";
document.getElementById("footer").innerHTML = "\n<div class=\"footer-left\">\n  \n  \n<p class=\"footer-links\">\n  <a id=\"navStart\" href=\"index.html\">Home</a>\n  <a href=\"about_us.html\">\xDCber uns</a>\n  <a href=\"impressum.html\">Impressum</a>\n</p>\n\n</div>\n\n<div class=\"footer-center\">\n\n\n<div>\n  <i class=\"fa fa-envelope\"></i>\n  <p><a href=\"mailto:heidrun@nachhaltig-in-baden.com\">heidrun@nachhaltig-in-baden.com</a></p>\n</div>\n\n</div>\n\n<div class=\"footer-right\">\n\n<p class=\"footer-company-about\">\n  <span>Nachhaltig in Baden</span>\n  Umweltbewusst und regional einkaufen, Initiativen in Baden, Informationen und Tipps f\xFCr ein nachhaltiges Leben\n  und alle interessanten Termine dazu.\n</p>\n\n\n</div>\n  \n";

function setActive(elementId) {
  var element = document.getElementById(elementId);
  element.className += "active";
}