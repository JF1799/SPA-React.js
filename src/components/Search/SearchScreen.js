import React, { useMemo } from "react";
import queryString from "query-string";
// import { heroes } from "../../data/heroes";
import { HeroCard } from "../Heroe/HeroCard";
import { useForm } from "../../routers/useFrom";
import { useLocation } from "react-router-dom";
import { getHeroesByName } from "../../selector/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
  // const heroesFiltered = getHeroesByName(searchText);

  const handleSearch = (e) => {
    e.prevenDefault();
    history.push(`?q=${searchText}`);
    // console.log(searchText);
  };
  return (
    <div>
      <h1>Busqueda: </h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4> Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4> Result</h4>
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
