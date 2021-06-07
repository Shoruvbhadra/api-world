fetch("https://restcountries.eu/rest/v2/all")
.then ( res => res.json())
.then(data => displayCountries(data))

const displayCountries = countries => {
    const containerCountry = document.getElementById("countries")
    countries.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.className = 'country';
        const countryInfo = `
            <h3 class="country-name"> ${country.name} </h3>
            <p class="country-capital"> ${country.capital} </p>
            <button onclick="countryDetail('${country.name}')"> details </button>
        `

        countryDiv.innerHTML = countryInfo;
        containerCountry.appendChild(countryDiv);
     })
    }

    const countryDetail = name =>{
        const url = `https://restcountries.eu/rest/v2/name/${name}`
        fetch(url)
        .then ( res => res.json())
        .then(data => giveInfo(data[0]));
        }

    const giveInfo = country => {
        const countryDetail = document.getElementById("country-detail");
        countryDetail.innerHTML=`
            <h1>name: ${country.name} </h1>
            <p> area: ${country.area} </p>
            <img src="${country.flag}">
        `
    }
    
