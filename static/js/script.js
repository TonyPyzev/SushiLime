var deliveryCourior     = document.getElementById('deliveryCourior');
var deliveryThemself    = document.getElementById('deliveryThemself');
var samovi              = document.getElementById('samovi');
var deli                = document.getElementById('deli');
var h2Time              = document.getElementById('h2Time');

var deliveryTimeNow     = document.getElementById('deliveryTimeNow');
var deliveryOnTime      = document.getElementById('deliveryOnTime');
var timedeli            = document.getElementById('timedeli');
var timeSamovi          = document.getElementById('timeSamovi');

var paymentMoney        = document.getElementById('paymentMoney');
var paymentTerminal     = document.getElementById('paymentTerminal');

function checkDelivery() {
    if (deliveryCourior.className == "radio checked") {
        deliveryCourior.className = "radio";
        deliveryThemself.className = "radio checked";
        samovi.style.display = 'block';
        deli.style.display = 'none';
        h2Time.innerHTML = 'Час самовивезення:';
    }
    else {
        deliveryCourior.className = "radio checked";
        deliveryThemself.className = "radio";
        samovi.style.display = 'none';
        deli.style.display = 'block';
        h2Time.innerHTML = 'Час доставки:';
    }
}

function checkDeliveryTime() {
    if (deliveryTimeNow.className == "radio checked") {
        deliveryTimeNow.className = "radio";
        deliveryOnTime.className = "radio checked";
        timedeli.style.display = 'block';
        timeSamovi.style.display = 'none';
    }
    else {
        deliveryTimeNow.className = "radio checked";
        deliveryOnTime.className = "radio";
        timeSamovi.style.display = 'block';
        timedeli.style.display = 'none';
    }
}

function checkPayment() {
    if (paymentMoney.className == "radio checked") {
        paymentMoney.className = "radio";
        paymentTerminal.className = "radio checked";
    }
    else {
        paymentMoney.className = "radio checked";
        paymentTerminal.className = "radio";
    }
}

function openLink(link) {
    window.open(link, "_self");
}








function formCollector(url, token) {
    var name                = document.getElementById('name');
    var tel                 = document.getElementById('tel');

    var deliveryCourior     = document.getElementById('deliveryCourior');
    var deliveryThemself    = document.getElementById('deliveryThemself');

    var street              = document.getElementById('street');
    var numberHoues         = document.getElementById('numberHoues');
    var flat                = document.getElementById('flat');
    var entrance            = document.getElementById('entrance');
    var flor                = document.getElementById('flor');

    var deliveryTimeNow     = document.getElementById('deliveryTimeNow');
    var deliveryOnTime      = document.getElementById('deliveryOnTime');

    var delDay              = document.getElementById('delDay');
    var delTime             = document.getElementById('delTime');

    var paymentMoney        = document.getElementById('paymentMoney');
    var paymentTerminal     = document.getElementById('paymentTerminal');

    var regularSticks       = document.getElementById('regularSticks');
    var studySticks         = document.getElementById('studySticks');
    var wasabi              = document.getElementById('wasabi');
    var ginger              = document.getElementById('ginger');
    var sous                = document.getElementById('sous');

    var comment             = document.getElementById('comment');
 
    var error               = false;
    
    var deliveryType        = '';
    var deliveryTime        = '';
    var paymentType         = '';


    if( name.value.length == 0) {
        name.style.borderBottomColor = "#F37D03";
        error = true;
        showAlert("Поле Ім'я потрібно заповнити", false);
    }
    if( tel.value.length == 0 ||
        tel.value.length > 10 ) {
            if(tel.value.length > 10) {
                tel.style.borderBottomColor = "#F37D03";
                error = true;
                showAlert('Номер телефону має бути вказаний за форматом "0987654321"', false);
            } else {
                tel.style.borderBottomColor = "#F37D03";
                error = true;
                showAlert('Поле "Номер телефону" потрібно заповнити', false);
            }
    }


    if( deliveryCourior.className == 'radio checked') {
        deliveryType = "Кур'єр";
    }
    if( deliveryThemself.className == 'radio checked') {
        deliveryType = 'Самовивіз';
    }


    if( street.value.length == 0 &&
        deliveryType == "Кур'єр") {
            street.style.borderBottomColor = "#F37D03";
            error = true;
            showAlert('Поле "Вулиця" потрібно заповнити', false);
    }
    if( numberHoues.value.length == 0 &&
        deliveryType == "Кур'єр") {
            numberHoues.style.borderBottomColor = "#F37D03";
            error = true;
            showAlert('Поле "Будинок" потрібно заповнити', false);
    }
    if( flat.value.length == 0 &&
        deliveryType == "Кур'єр") {
            flat.style.borderBottomColor = "#F37D03";
            error = true;
            showAlert('Поле "Квартира" потрібно заповнити', false);
    }
    if( entrance.value.length == 0 &&
        deliveryType == "Кур'єр") {
            entrance.style.borderBottomColor = "#F37D03";
            error = true;
            showAlert("Поле Під'їзд потрібно заповнити", false);
    }
    if( flor.value.length == 0 &&
        deliveryType == "Кур'єр") {
            flor.style.borderBottomColor = "#F37D03";
            error = true;
            showAlert('Поле "Поверх" потрібно заповнити', false);
    }


    if( deliveryTimeNow.className == 'radio checked') {
        deliveryTime = 'На найближчий час';
    }
    if( deliveryOnTime.className == 'radio checked') {
        deliveryTime = 'На вказаний час';
    }


    if( delDay.value.length == 0 &&
        deliveryTime == 'На вказаний час') {
            delDay.style.borderBottomColor = "#F37D03";
            error = true;
            showAlert('Поле "День" потрібно заповнити', false);
    }
    if( delTime.value.length == 0 &&
        deliveryTime == 'На вказаний час') {
            delTime.style.borderBottomColor = "#F37D03";
            error = true;
            showAlert('Поле "Час" потрібно заповнити', false);
    }


    if( paymentMoney.className == 'radio checked') {
        paymentType = 'Оплата готівкою';
    }
    if( paymentTerminal.className == 'radio checked') {
        paymentType = 'Оплата карткою';
    }

    if( error == false) {
        var info = {
            name: name.value,
            tel: tel.value,
            deliveryType: deliveryType,
            street: street.value,
            numberHoues: numberHoues.value,
            flat: flat.value,
            entrance: entrance.value,
            flor: flor.value,
            deliveryTime: deliveryTime,
            delDay: delDay.value,
            delTime: delTime.value,
            paymentType: paymentType,
            regularSticks: regularSticks.value,
            studySticks: studySticks.value,
            wasabi: wasabi.value,
            ginger: ginger.value,
            sous: sous.value,
            comment: comment.value,
        }
        var json = JSON.stringify(info);

        sendOrder(json, url, token)
    }
}

function sendOrder(json, url, token) {
    $.ajax({
        url: url,
        type: 'POST',
        data: {'data': json, 'csrfmiddlewaretoken': token},
        dataType: 'json',
    });
    openLink('/')
}


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
    await new Promise(r => setTimeout(r, 2000));
    myalert.style.opacity = 0;
    await new Promise(r => setTimeout(r, 1000));
    myalert.style.display = 'none';
}