document.body.onload = function() {
    setTimeout(function() {
        var preloader = document.getElementById("preloader");
        if( !preloader.classList.contains("done")) {
            preloader.classList.add("done");
            preloader.style = "opacity: 0";
            setTimeout(() => {
                preloader.style = "display: none";
            }, 500);
        }
    }, 1000);
}