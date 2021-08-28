const getListOfCountries = async () => {
	try {
		const countriesListUrl = `https://www.thesportsdb.com/api/v1/json/1/all_countries.php`;
		const response = await fetch(countriesListUrl);
		const data = await response.json();
		displayCountryDetails(data.countries);
	} catch (error) {
		console.log(error);
	}
};

getListOfCountries();

const displayCountryDetails = (countriesData) => {
	const allCountiesContainer = document.getElementById(
		'all-countries-container'
	);
	countriesData.forEach((countryName) => {
		const div = document.createElement('div');
		div.innerHTML = countriesListHtml(countryName);
		allCountiesContainer.appendChild(div);
	});
};

const countriesListHtml = (countryName) => {
	return `
        <div class="col">
        <div class="card radius-10 border-start border-0 border-3 border-info">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <div>
                        <h5 class="my-1">${countryName.name_en}</h5>
                    </div>
                    <div class="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
                        <i class='bx bxs-cart'></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
};
