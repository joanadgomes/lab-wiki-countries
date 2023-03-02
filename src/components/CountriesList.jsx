import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function CountriesList() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCountries = async () => {
    try {
      let response = await axios.get(apiURL);
      setCountries(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, [countries]);

  return (
    <div>
      {loading && <h2>Loading...</h2>}

      {countries.map((country) => {
        return (
          <ul>
            <Link to={`/${country.alpha3Code}`}>
                <div>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLocaleLowerCase()}.png`} alt="" />
                    {country.name.common}
                </div>
                
                </Link>
          </ul>
        );
      })}
    </div>
  );
}

export default CountriesList;
