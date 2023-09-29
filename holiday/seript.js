// Fetch the list of countries and populate the dropdown
fetch("https://holidayapi.com/v1/countries?pretty&key=2ab7fc88-c0d4-49c3-a86c-6e4e4642d84a")
.then(res => res.json())
.then(as => {
    let selectDrop = document.querySelector('.countries');
    let sk = as.countries;
    sk.forEach(country => {
        let option = document.createElement('option');
        option.innerHTML = country.name;
        option.value = `${country.code}`;
        selectDrop.appendChild(option);
        // console.log(option)
    });
})
.catch(error => {
    console.error();
});

// Add event listener to the SUBMIT button
let submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', () => {
// Get the selected country code
let selectedCountryCode = document.querySelector('.countries').value;

// Fetch and display holidays for the selected country
fetch(`https://holidayapi.com/v1/holidays?country=${selectedCountryCode}&year=2022&pretty&key=2ab7fc88-c0d4-49c3-a86c-6e4e4642d84a`)
    .then(rs => rs.json())
    .then(as => {
        let display = document.querySelector('.display');
        display.innerHTML = ''; // Clear previous content
        console.log(as)
        let Holidays = as.holidays;

        Holidays.forEach(holiday => {
            // console.log(holiday.name)
            let sk=document.createElement('p');
            sk.innerHTML=`<hr><b>Holiday Name : ${holiday.name}</b><br>
                            <b>Holiday Date :<i> ${holiday.date}</i></b><br>
                            <b>Holiday Day :<i> ${holiday.weekday.date.name}</i></b>`
            display.appendChild(sk);

        })
    });
})
.catch(error => {
    console.error();
})