let countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (North)", "Korea (South)", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia (formerly Macedonia)", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
let selectedIndex = 0;
let isMenuAOpen = false;


// For create country list
function addOptionInSelectTag() {
    if(document.getElementById("country-select") == null)
        return;

    let str = '';
    for (let i in countries) {
        str += `<option value="${countries[i].replaceAll(' ', '').toLowerCase()}">${countries[i]}</option>`;
    }

    document.getElementById("country-select").innerHTML += str;
}
addOptionInSelectTag();

// For handle menu in mobile section
function menuHandler() {
    isMenuAOpen = !isMenuAOpen;


    const menu = document.getElementById('menu');
    const close = document.getElementById('close');
    const list = document.querySelector('.navbar');


    if(isMenuAOpen) {
        menu.classList.add('hide');
        close.classList.remove('hide');
        list.style.height = '160px';
    }
    else {
        menu.classList.remove('hide');
        close.classList.add('hide');
        list.style.height = '0';
    }
}
// For validate and submit form
function validateForm() {
    let isValid = true;

    document.querySelectorAll('.form-input, .form-select').forEach(function (input) {
        const errorMessage = input.parentElement.querySelector('.error-message');

        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
            errorMessage.innerHTML = "This field can’t be empty.<br />Please fill it in.";
            errorMessage.style.display = 'block';
        } else {
            input.classList.remove('error');
            errorMessage.style.display = 'none';
        }
    });

    if (isValid) {
        let locationArray = window.location.href.split('/');
        locationArray[locationArray.length-1] = 'thank_you_page.html';
        window.location.href = locationArray.join('/');
    }
}

// For controll slide of carousel
function carouselHandler(type, index='') {
    let width = document.getElementById('carousel').offsetWidth;


    if(type == 'prev' && selectedIndex > 0)
        selectedIndex -= 1;
    else if(type == 'next' && selectedIndex < 2)
        selectedIndex += 1;
    else if(type == 'click')
        selectedIndex = index;
    else
        return;


    document.getElementById('carousel').scrollLeft = width * selectedIndex;
    activeDotHandler();
}

// For showing active dot
function activeDotHandler() {
    const divs = document.getElementsByClassName('dot');
    console.log(divs);
    Array.from(divs).forEach((item, index) => {
        item.classList.remove('active');
        if(index == selectedIndex)
            item.classList.add('active');
    });
}

//for open/close video popup
function handleVideo(isVideoOpen) {
    const getVideoWrapper = document.getElementById('video-popup');
    if (getVideoWrapper) {
        isVideoOpen ? getVideoWrapper.classList.remove('hide') : getVideoWrapper.classList.add('hide');
    }
}