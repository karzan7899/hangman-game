const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burundi", "Cambodia", "Cameroon", "CaymanIslands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "CostaRica", "CoteDIvoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "CzechRepublic", "Denmark", "Djibouti", "Dominica", "DominicanRepublic", "Ecuador", "Egypt", "ElSalvador", "EquatorialGuinea", "Estonia", "Ethiopia", "FalklandIslands", "FaroeIslands", "Fiji", "Finland", "France", "FrenchPolynesia", "FrenchWestIndies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "GuineaBissau", "Guyana", "Haiti", "Honduras", "HongKong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "IsleofMan", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "KyrgyzRepublic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "NetherlandsAntilles", "NewCaledonia", "NewZealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "PapuaNewGuinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "PuertoRico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Samoa", "SanMarino", "Satellite", "SaudiArabia", "Senegal", "Serbia", "Seychelles", "SierraLeone", "Singapore", "Slovakia", "Slovenia", "SouthAfrica", "SouthKorea", "Spain", "SriLanka", "StLucia", "StVincent", "StLucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "UnitedArabEmirates", "UnitedKingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "VirginIslands", "Yemen", "Zambia", "Zimbabwe"];

var btnsElements = document.querySelectorAll('.keyboardBtn');
var barElement = document.getElementById('bar');
var imageHuman = document.getElementById('imageHuman');
var num = 1;
var errorCounter = 0;
var trueCounter = 0;
console.log(countries.length);
const randomNumber = Math.floor(Math.random() * 195);
let selectOneCountry;

(function (randomNumber) {
    selectOneCountry = countries[randomNumber].toLocaleUpperCase();
})(randomNumber);

btnsElements.forEach(element => {
    element.addEventListener("click", function () {


        checkValidKey(element, this.value);
        checkIfWin();


    });
});
console.log(selectOneCountry);

function checkValidKey(element, val) {
    let result = selectOneCountry.includes(val);
    if (errorCounter == 8) {

        alert('you have lost Please refresh the page');

    } else if (!result) {
        element.disabled = true;
        num++;
        errorCounter++;
        imageHuman.setAttribute("src", "./images/hangman" + num + ".png");
    } else {
        document.getElementsByClassName('input' + val).value = val;
        const elements = document.querySelectorAll('.input' + val);
        elements.forEach(element => {
            element.value = val;
            trueCounter++;
        });
        element.disabled = true;
        element.style.background = "green";


    }

}

function checkIfWin() {
    if (trueCounter == selectOneCountry.length) {
        alert('Congradulations! You have won!')
    }
}
for (let i = 0; i < selectOneCountry.length; i++) {
    barElement.innerHTML += `<input type="text" class="input${selectOneCountry.charAt(i)}" readonly  maxlength="1" size="1" >`;
}