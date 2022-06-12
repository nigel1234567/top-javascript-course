let countryInput = document.getElementById('country')

countryInput.addEventListener('input', ()=> {
    countryInput.setCustomValidity('');
    if (countryInput.checkValidity() == false) {
        countryInput.setCustomValidity('Please check.')
    }
})

countryInput.addEventListener('invalid', ()=> {
    if(countryInput.value === '') {
        countryInput.setCustomValidity('Please enter a country!')
    } else {
        countryInput.setCustomValidity('Country can only contain upper and lowercase letters. Try again!')
    }
})
