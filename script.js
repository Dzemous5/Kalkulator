let iloscPrzecinkow = 0;

// ---------------------------------------------------------------------------------------
// ----------------------------------CYFRY------------------------------------------------
// ---------------------------------------------------------------------------------------
function zero() {
    var wartosc = document.getElementById('display-down').innerHTML;

    if (wartosc == 0) {
        document.getElementById('display-down').innerHTML = '0';
    }
    else {
        document.getElementById('display-down').innerHTML += '0';
    }
}

function jeden() {
    var wartosc = document.getElementById('display-down').innerHTML;

    if (wartosc == 0) {
        document.getElementById('display-down').innerHTML = '1';
    }
    else {
        document.getElementById('display-down').innerHTML += '1';
    }
}

function dwa() {
    var wartosc = document.getElementById('display-down').innerHTML;

    if (wartosc == 0) {
        document.getElementById('display-down').innerHTML = '2';
    }
    else {
        document.getElementById('display-down').innerHTML += '2';
    }
}

function trzy() {
    var wartosc = document.getElementById('display-down').innerHTML;

    if (wartosc == 0) {
        document.getElementById('display-down').innerHTML = '3';
    }
    else {
        document.getElementById('display-down').innerHTML += '3';
    }
}

function cztery() {
    var wartosc = document.getElementById('display-down').innerHTML;

    if (wartosc == 0) {
        document.getElementById('display-down').innerHTML = '4';
    }
    else {
        document.getElementById('display-down').innerHTML += '4';
    }
}

function piec() {
    var wartosc = document.getElementById('display-down').innerHTML;

    if (wartosc == 0) {
        document.getElementById('display-down').innerHTML = '5';
    }
    else {
        document.getElementById('display-down').innerHTML += '5';
    }
}

function szesc() {
    var wartosc = document.getElementById('display-down').innerHTML;

    if (wartosc == 0) {
        document.getElementById('display-down').innerHTML = '6';
    }
    else {
        document.getElementById('display-down').innerHTML += '6';
    }
}

function siedem() {
    var wartosc = document.getElementById('display-down').innerHTML;

    if (wartosc == 0) {
        document.getElementById('display-down').innerHTML = '7';
    }
    else {
        document.getElementById('display-down').innerHTML += '7';
    }
}

function osiem() {
    var wartosc = document.getElementById('display-down').innerHTML;

    if (wartosc == 0) {
        document.getElementById('display-down').innerHTML = '8';
    }
    else {
        document.getElementById('display-down').innerHTML += '8';
    }
}

function dziewiec() {
    var wartosc = document.getElementById('display-down').innerHTML;

    if (wartosc == 0) {
        document.getElementById('display-down').innerHTML = '9';
    }
    else {
        document.getElementById('display-down').innerHTML += '9';
    }
}


// ---------------------------------------------------------------------------------------
// ----------------------------------PRZECINEK--------------------------------------------
// ---------------------------------------------------------------------------------------
function przecinek() {
    if (iloscPrzecinkow == 0) {
    document.getElementById('display-down').innerHTML += '.';
    iloscPrzecinkow++;
    }
}

// ---------------------------------------------------------------------------------------
// ----------------------------------POTĘGA-----------------------------------------------
// ---------------------------------------------------------------------------------------
function potega(){
    var wartosc = document.getElementById('display-down').innerHTML;
    var wynik = Math.pow(wartosc, 2);
    document.getElementById('display-down').innerHTML = wynik;

}

// ---------------------------------------------------------------------------------------
// ----------------------------------PIERWIASTEK------------------------------------------
// ---------------------------------------------------------------------------------------
function pierwiastek(){
    var wartosc = document.getElementById('display-down').innerHTML;
    var wynik = Math.sqrt(wartosc);
    document.getElementById('display-down').innerHTML = wynik;
}
// ---------------------------------------------------------------------------------------
// ----------------------------------CZYSZCZENIE------------------------------------------
// ---------------------------------------------------------------------------------------
function wyczysc(){
    document.getElementById('display-up').innerHTML = "";
    document.getElementById('display-down').innerHTML = "0";
    iloscPrzecinkow = 0;
}

// ---------------------------------------------------------------------------------------
// ----------------------------------COFANIE----------------------------------------------
// ---------------------------------------------------------------------------------------
function cofnij(){
    var liczba = document.getElementById('display-down').innerHTML;
    if (liczba == 0 || liczba.length <= 1) {
        document.getElementById('display-down').innerHTML = "0";
    };
    if (liczba.length >= 2) {
        var nowa_liczba = liczba.slice(0, -1);
        document.getElementById('display-down').innerHTML = nowa_liczba;
    };
}

// ---------------------------------------------------------------------------------------
// ----------------------------------DODAWANIE--------------------------------------------
// ---------------------------------------------------------------------------------------
function dodaj(){
    let gora = document.getElementById('display-up').innerHTML;
    let dol = document.getElementById('display-down').innerHTML;
    if (gora == "" || gora == 0) {
        document.getElementById('display-up').innerHTML = dol;
        document.getElementById('display-down').innerHTML = 0;
        iloscPrzecinkow = 0;
    }
    
    if (gora >= 1 || gora <0) {
        let goraNowa = parseFloat(gora) + parseFloat(dol);
        document.getElementById('display-up').innerHTML = goraNowa;
        document.getElementById('display-down').innerHTML = 0;
        iloscPrzecinkow = 0;
    };
}
// ---------------------------------------------------------------------------------------
// ----------------------------------ODEJMOWANIE------------------------------------------
// ---------------------------------------------------------------------------------------
function odejmij() {
    let gora = document.getElementById('display-up').innerHTML;
    let dol = document.getElementById('display-down').innerHTML;
    if (gora == "" || gora == 0) {
        let goraNowa = 0 - parseFloat(dol);
        document.getElementById('display-up').innerHTML = goraNowa;
        document.getElementById('display-down').innerHTML = 0;
        iloscPrzecinkow = 0;
    }

    if (gora >= 1 || gora <0){
        let goraNowa = parseFloat(gora) - parseFloat(dol);
        document.getElementById('display-up').innerHTML = goraNowa;
        document.getElementById('display-down').innerHTML = 0;
        iloscPrzecinkow = 0;
    }

}
// ---------------------------------------------------------------------------------------
// ----------------------------------MNOŻENIE---------------------------------------------
// ---------------------------------------------------------------------------------------
function mnozenie(){
    let gora = document.getElementById('display-up').innerHTML;
    let dol = document.getElementById('display-down').innerHTML;

    //wymnaza liczbę z góry przez liczbę z dołu (nowa zmienna)
    if (gora == "") {
        document.getElementById('display-up').innerHTML = dol;
        document.getElementById('display-down').innerHTML = 0;
        iloscPrzecinkow = 0;
    }

    else  {
        let goraNowa = parseFloat(gora) * parseFloat(dol);
        document.getElementById('display-up').innerHTML = goraNowa;
        document.getElementById('display-down').innerHTML = 0;
        iloscPrzecinkow = 0;
    }

    
}



// ---------------------------------------------------------------------------------------
// ----------------------------------DZIELENIE--------------------------------------------
// ---------------------------------------------------------------------------------------
function podziel(){
    let gora = document.getElementById('display-up').innerHTML;
    let dol = document.getElementById('display-down').innerHTML;

    if (gora == "") {
        document.getElementById('display-up').innerHTML = dol;
        document.getElementById('display-down').innerHTML = 0;
        iloscPrzecinkow = 0;
    }

    else  {
        let goraNowa = parseFloat(gora) / parseFloat(dol);
        document.getElementById('display-up').innerHTML = goraNowa;
        document.getElementById('display-down').innerHTML = 0;
        iloscPrzecinkow = 0;
    }
}

