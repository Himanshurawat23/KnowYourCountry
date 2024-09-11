function fetch() {
    axios.get('https://restcountries.com/v3.1/all')
        .then((res) => {
            let countries = res.data;
            let output = '';
            
            countries.forEach(country => {
                output += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${country.flags.png}" class="card-img-top" alt="Flag of ${country.name.common}">
                        <div class="card-body">
                            <h5 class="card-title">${country.name.common}</h5>
                            <p class="card-text"><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
                            <p class="card-text"><strong>Continent:</strong> ${country.continents[0]}</p>
                        </div>
                    </div>
                </div>`;
            });

            document.getElementById('countryContainer').innerHTML = output;
        })
        .catch((err) => {
            console.log(err);
        });
}
