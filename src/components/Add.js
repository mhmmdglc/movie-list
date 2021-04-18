import React, { useState, useEffect } from "react";
import { ListCard } from "./ListCard";
import data from './../../src/config.json'

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [adultFilter, setAdultFilter] = useState(false);

  useEffect(() => {
    if (query !== "") {
      fetch(
        `${data.BaseUrl}${data.SearchPath}?api_key=${data.Key}&language=en-US&page=1&include_adult=${adultFilter}&query=${query}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setResults(data.results);
          } else {
            setResults([]);
          }
        });
    } else {
      setResults([]);
    }

  }, [query, adultFilter]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };


  const adultHandle = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setAdultFilter(value);
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Film Arayın"
              value={query}
              onChange={onChange}
            />
          </div>
          <span className="count-pill">
            +18 Filtresi:
             <input
              type="checkbox"
              onChange={adultHandle} />
          </span>


          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ListCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
