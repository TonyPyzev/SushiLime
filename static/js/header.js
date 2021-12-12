var header              = document.getElementById('header');

function headerOpenClose() {
    if(screen.width <= 414) {
        if(header.className == "hidden") {
            header.style.marginTop = '0px';
            header.className = "show";
        }
        else if(header.className == "show") {
            header.style.marginTop = '-490px';
            header.className = "hidden";
        }
    }
    else if (screen.width > 414 && screen.width <= 1024) {
        if(header.className == "hidden") {
            header.style.marginTop = '0px';
            header.className = "show";
        }
        else if(header.className == "show") {
            header.style.marginTop = '-45px';
            header.className = "hidden";
        }
    }
}