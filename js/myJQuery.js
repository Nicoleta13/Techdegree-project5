function myFunction() {
    // Declare variables
    var input, filter, div, a, info, i;
    input = document.getElementsByClassName('search');
    filter= input.value.toUpperCase();
    div = document.getElementsByClassName("photos");
    a = div.getElementsByClassName('mix');

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

// Using jquery

// $(document).ready(function(){
//   $(".search").on("keyup", function() {
//     var value = $(this).val().toLowerCase();
//     $("a[data-type]").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
//   });
// });
