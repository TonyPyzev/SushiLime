var myalert = document.getElementById('alert');
var alertText = document.getElementById('alertText');

async function showAlert(text, isGood) {
    if (isGood === true) {
        myalert.className = 'alert good';
        
    } else {
        myalert.className = 'alert bad';
    }
    myalert.style.display = 'flex';
    myalert.style.opacity = 1;
    alertText.innerText = text;
    await new Promise(r => setTimeout(r, 1500));
    myalert.style.opacity = 0;
    await new Promise(r => setTimeout(r, 1000));
    myalert.style.display = 'none';
}