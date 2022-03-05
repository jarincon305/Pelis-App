import yellowStar from "../../assets/Star3.png";
import grayStar from "../../assets/Star5.png";
import search from "../../assets/Vector.png";
import filterImg from "../../assets/FilterIcon.png";
import "../../index.css";
import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';

export default function EjercicioThree() {
  const [movies, setMovies]                   = useState([]);
  const [imgUrl, setImgUrl]                   = useState('');
  const [containerMovies, setContainerMovies] = useState([]);
  const [containerGender, setContainerGender] = useState([]);
  const [genres, setGenres]                   = useState([]);
  const [isOpen, setIsOpen]                   = useState(false);
  const [containerDate, setContainerDate] = useState([]);
  const loop = [1,2,3,4];

  const moviesGet = async () => {
    await axios.get("http://localhost:4000/api/movies")
      .then(response => {
        setImgUrl(response.data.images_url);
        setMovies(response.data.results);
        setContainerMovies(response.data.results);
        setContainerGender(response.data.results);
        setGenres(response.data.genres);
        setContainerDate(response.data.results);
      }).catch(error => {
        console.log(error);
      });
  }

  const handleChangeFilter = (e) =>{
    filter(e.target.value);
  }

  const filter = (terminoBusqueda) => {
    var resultadosBusqueda = containerMovies.filter((elemento) => {
      if(elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return elemento;
      }
    });
    setMovies(resultadosBusqueda);
  }

  const handleSubmit = (e) => {
    setIsOpen(true);
    isOpen && setIsOpen(false);
  }

  const handleChangeCheckbox = (e) => {
    gender(e.target.value);
  }

  const gender = (filterGender) => {
    var resultGender = containerGender.filter((element) => {
      return element.genre_ids.find(value => value == filterGender);
    });
    setMovies(resultGender);
  }

  const convertGender = (parameters) => {
    let genderDescription = [];
    parameters.map((elemento, key) => {
      let objectGender = genres.find(element => element.id == elemento);
      if (objectGender){
        genderDescription.push(objectGender.name + ', ');
      }
    });
    return genderDescription;
  }

  const handleDate = (e) => {
    sortDate(e.target.value);
  }

  const sortDate = (optionDate) => {
    let filterDate = '';
    if (optionDate == 1) {
        filterDate = containerDate.sort((a, b) => Date.parse(a.release_date) - Date.parse(b.release_date));
    } else if (optionDate == 2) {
      filterDate = containerDate.sort((a, b) => Date.parse(a.release_date) - Date.parse(b.release_date)).reverse();
    }
    setMovies(filterDate);
  }

  useEffect(() => {
    moviesGet();
  }, []);

  return (
    <div>
      Peliculas
      <div className="row">
        <div className="col-4">
          <form>
            <input
              type="text"
              placeholder="Buscar una Pelicula"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={handleChangeFilter}
            />
            <img className="imgTop" src={search}/>
          </form>
        </div>
        <div className="vl col-sm-1">
          <div className="container-fluid filterImg">
            <button className="filterButton" onClick={handleSubmit}>
              <img src={filterImg}/>
            </button>
          </div>
        </div>

        {
          isOpen &&
          <div className="absolute col-sm-4">
            <div className="filterGender">
              <p>Genero</p>
                {genres.map((element, index) => {
                    return <div key={index}>
                      <input 
                        type="checkbox" 
                        value={element.id}
                        onChange={handleChangeCheckbox}
                      /> 
                      {element.name}
                      <br/>
                      </div>

                })}
            </div>
          </div>
        }

        <div className="vl col-sm-2">
          <select className="form-select" aria-label="Default select example" onChange={handleDate}>
            <option value="0">Fecha</option>
            <option value="1">Nuevas - Antiguas</option>
            <option value="2">Antiguas - Nuevas</option>
          </select>
        </div>
      </div>

      <div className="col row rows-cols-3 row-cols-md-3 g-3 mt-2 no-gutters animate__animated animate__fadeInLeft">
        {movies.map(element => (
          <div className="col-md-4 mt-2 animate__animated animate__backInDown" key={element.id}>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-5">
                  <p className="spancing"><b>{element.title}</b></p>
                  <img src={imgUrl + element.poster_path} className="mt-5 card-img" alt="" />
                </div>
                <div className="col-7">
                  <div className="card-body">
                    <p className="card-text">{element.overview}</p>
                    <p className="card-text">
                      <small className="text-muted">Titulo: {element.title}</small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Calificación: {element.vote_average}  
                        {loop.map((element, index) => {
                            return <img key={index} src={yellowStar}/>
                        })}
                        <img src={grayStar}/>
                      </small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Genero: {convertGender(element.genre_ids)}</small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Fecha de realizacion: {element.release_date}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}