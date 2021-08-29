const getAllLeagues = async () => {
	const leaguesUrl = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
	const response = await fetch(leaguesUrl);
	const data = await response.json();
	displayLeagues(data.leagues);
};

const displayLeagues = (leaguesData) => {
	const tableInformation = document.getElementById('table-information');
	leaguesData.forEach((league) => {
		const tr = document.createElement('tr');
		tr.innerHTML = generateHtml(league);
		tableInformation.appendChild(tr);
		console.log(league);
	});
};

const generateHtml = (leagueData) => {
	const { idLeague, strLeague, strLeagueAlternate, strSport } = leagueData;
	return `
          <td>${idLeague}</td>
          <td>${strLeague}</td>
          <td>${
						strLeagueAlternate !== '' ? strLeagueAlternate : 'not found 🍟'
					}</td>
          <td>${strSport}</td>
     `;
};
