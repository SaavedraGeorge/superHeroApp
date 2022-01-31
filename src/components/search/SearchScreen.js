import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesbyName } from '../../selector/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string';



export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const {q = ''} = queryString.parse(location.search);

  const [values, handleInputChange] = useForm({
    searchText: q,
  });

  const {searchText} = values;


  
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  }
 
   const heroesFiltered =  useMemo(() => getHeroesbyName(q), [q]);

 
  
  return(
      <>
          <h1>Search Screen</h1>
          <hr />
          <div className="row">
            <div className="col-5">
              <h4>Búsqueda de personajes</h4>
              <hr />
              <form onSubmit={handleSearch}>
                <input 
                  type="text" 
                  placeholder="Búsqueda de personajes..."
                  className="form-control"
                  name="searchText"
                  value={searchText}
                  onChange={handleInputChange}
                />
                <button type="submit" className="btn btn-outline-primary mt-3 col-12">
                  Buscar
                </button>
              </form>
            </div>
            <div className="col-7">
              <h4>Resultados Búsqueda</h4>
              <hr />
              {
                (q === '') 
                  ? <div className="alert alert-info animate__animated animate__fadeIn">Busca un heroe</div>
                  : ( heroesFiltered.length === 0)
                    && <div className="alert alert-danger animate__animated animate__fadeIn">No hay resultados para la busqueda: <b>{q}</b> </div>
              }
              {
                heroesFiltered.map(heroe => (
                  <HeroCard key={heroe.id}
                  {...heroe} />
                ))
              }
            </div>
          </div>
      </>
  );
};
