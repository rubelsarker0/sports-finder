const getSportsList = async () => {
	try {
		const sportsListUrl = `https://www.thesportsdb.com/api/v1/json/1/all_sports.php`;
		const response = await fetch(sportsListUrl);
		const data = await response.json();
		displaySportsDetails(data.sports);
	} catch (error) {
		console.log(error);
	}
};

getSportsList();

const displaySportsDetails = (sportsData) => {
	const allSportsContainer = document.getElementById('all-sports-container');
	sportsData.forEach((sportName) => {
		const div = document.createElement('div');
		div.innerHTML = sportsListHtml(sportName);
		allSportsContainer.appendChild(div);
		console.log(sportName);
	});
};

const sportsListHtml = (sportName) => {
	const {
		strFormat,
		strSport,
		strSportDescription,
		strSportThumb,
		strSportThumbGreen,
	} = sportName;

	return `
            <div class="col">
                <div class="card">
                    <img src="${
											strSportThumb !== null
												? strSportThumb
												: strSportThumbGreen
										}" alt="sport image">
                    <div class="card-body">
                        <h5 class="card-title">${strSport}</h5>
                        <p class="card-text">${strSportDescription.slice(
													0,
													250
												)}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Format: ${strFormat}</li>
                    </ul>
                </div>
            </div>`;
};
