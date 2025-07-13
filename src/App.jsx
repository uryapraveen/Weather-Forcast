import { useState } from 'react';
import WeatherCard from './WeatherCard';
import { searchCities } from './services/api';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResult = await searchCities(searchQuery);
      setCities([searchResult]); 
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to find city...");
      setCities([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <form onSubmit={handleSearch} className="search-form">
        <h1>Search for the Cities Weather 🌆</h1>
        <input
          type="text"
          placeholder="Search for cities..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="cities-grid">
        {cities.map((city) => (
          <WeatherCard city={city} key={city.id || city.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
