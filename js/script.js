document.addEventListener("DOMContentLoaded", function () {
    const countriesAndStates = {
        "United States": ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
        "Canada": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"],
        "United Kingdom": ["England", "Scotland", "Wales", "Northern Ireland"],
        "Australia": ["New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia", "Tasmania", "Northern Territory", "Australian Capital Territory"],
        "India": ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]
    };

    const countrySelect = document.getElementById("country");
    const stateSelect = document.getElementById("state");

    // Load countries into the dropdown
    for (let country in countriesAndStates) {
        let option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    }

    // Function to update states based on selected country
    countrySelect.addEventListener("change", function () {
        const selectedCountry = countrySelect.value;
        stateSelect.innerHTML = "<option value=''>Select State</option>";

        if (countriesAndStates[selectedCountry]) {
            countriesAndStates[selectedCountry].forEach(state => {
                let option = document.createElement("option");
                option.value = state;
                option.textContent = state;
                stateSelect.appendChild(option);
            });
        }
    });
});
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
function previewImage(input, previewId) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const preview = document.getElementById(previewId);
            preview.src = e.target.result;
            preview.style.display = "block"; // Show the image
        };
        reader.readAsDataURL(file);
    }
}

// Attach the function to the file inputs
document.getElementById("fiance-passport").addEventListener("change", function () {
    previewImage(this, "fiance-preview");
});

document.getElementById("officer-passport").addEventListener("change", function () {
    previewImage(this, "officer-preview");
});
document.getElementById("id-upload").addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const preview = document.getElementById("id-preview");
            preview.src = e.target.result;
            preview.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});
