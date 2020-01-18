function navbar() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar-mobile") {
      x.className += " open";
    } else {
      x.className = "navbar-mobile";
    }
}