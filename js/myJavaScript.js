var input = document.getElementsByClassName('search')[0];
function myFunction() {
    // Declare variables
    var filter, div, a, info, i;
        filter= input.value.toUpperCase();
    div = document.getElementsByClassName("photos");
    a = document.getElementsByClassName('mix');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < a.length; i++) {
        info = a[i].getAttribute("data-title");
        if (info.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

input.addEventListener("keyup", myFunction);
