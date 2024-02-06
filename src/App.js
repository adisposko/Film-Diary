import { useState, useRef } from 'react';

import Header from './UI/Header';
import Diary from './UI/Diary';
import Favorites from './UI/Favorites';
import Modal from './UI/Modal';
import filterFilms from './Utility/filteringLogic';
import sortFilms from './Utility/sortingLogic';
import initialDiary from './assets/initial_diary.json';

export default function App() {
  let unfilteredDiary = useRef(initialDiary.initialDiary); //tracking full, unfiltered diary allows us to remove filters on the displayed diary
  const [displayedDiary, setDisplayedDiary] = useState(unfilteredDiary.current); //same as unfiltered until filters applied
  const [favesArray, setFavesArray] = useState([null, null, null, null, null]); //tracks favorites for page footer "My favorites"
  const [isModalActive, setIsModalActive] = useState(false);
  let searchResults = useRef();
  const [modalType, setModalType] = useState();
  let filtered = useRef(false); //are filters applied to displayed diary
  let filmToAdd = useRef();

  function modalActivation(modalArg) {
    setModalType(modalArg);
    setIsModalActive(true);
  }

  function onSearchClick(params) {
    // searchResults.current = filterFilms(...params);
    console.log(`http://localhost:8000/film-search?title=${params[0]}&director=${params[1]}&year=${params[2]}`);
    fetch(`http://localhost:8000/film-search?title=${params[0]}&director=${params[1]}&year=${params[2]}`)
    .then((response) => {
      if (response.status == 404) {
        throw new Error('No film in the database corresponds to your search!');
      }
      return response.json();
    })
    .then((data) => {
      searchResults.current = data.searchResults
    })
    .then(() => {
      modalActivation('searchResults');
    })
    .catch(err => {
      alert(err.message);
    })
  }

  function addFilmToDiary(film, dmy) {
    film.dmy = dmy;
    unfilteredDiary.current.unshift(film);
    filtered.current = false; //adding to diary automatically removes filters
    setDisplayedDiary(unfilteredDiary.current);
    setIsModalActive(false);
  }

  function sortDiary(sortMethod, reverse) {
    unfilteredDiary.current = sortFilms(unfilteredDiary.current, sortMethod, reverse);
    if (filtered.current) {
      setDisplayedDiary([...sortFilms(displayedDiary, sortMethod, reverse)]);
    } else {
      setDisplayedDiary([...unfilteredDiary.current]);
    }
  }

  function onFilterConfirmClick(params, films) {
    filtered.current = true;
    setDisplayedDiary(filterFilms(...params, films))
  }

  function onRemoveFilterClick() {
    filtered.current = false;
    setDisplayedDiary(unfilteredDiary.current);
  }

  function onBackdropClick() {
    setIsModalActive(false);
  }

  return(
    <>
      <Header modalActivation={modalActivation} filtered={filtered} onRemoveFilterClick={onRemoveFilterClick} sortDiary={sortDiary}/>
      <Diary displayedDiary={displayedDiary}/>
      <Favorites favesArray={favesArray} setFavesArray={setFavesArray}/>

      {isModalActive && (
        <Modal modalType={modalType} modalActivation={modalActivation} onBackdropClick={onBackdropClick} displayedDiary={displayedDiary} onFilterConfirmClick={onFilterConfirmClick} onSearchClick={onSearchClick} searchResults={searchResults} addFilmToDiary={addFilmToDiary} filmToAdd={filmToAdd}/>
      )}
    </>
  )
}