import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function CountryDetails({countries}) {
  const [country, setCountry] = useState(null);

  const { countryId } = useParams();

  const getCountry = async () => {
    try {
      let response = await axios.get(apiURL);
      setCountry(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountry();
  }, [country]);

  const foundCountry = countries.find((country) => {
    return country.alpha3Code === countryId;
  })

  return (
    <div>
      {foundCountry && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLocaleLowerCase()}.png`}
            alt="country"
          />
          <h1>{foundCountry.country.name.common}</h1>
          <h3>{foundCountry.capital}</h3>
          <h3>{foundCountry.area}</h3>
          <h3>{foundCountry.borders}</h3>
        </>
      )}
      <Link to="/">Close details</Link>
    </div>
  );
}

export default CountryDetails;
