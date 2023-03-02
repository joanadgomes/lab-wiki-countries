import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries] = useState([])

  return (
    <div className="App">
      <h3>List of Countries</h3>

      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route
          path="/:countryId"
          element={<CountryDetails countries={countries}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
