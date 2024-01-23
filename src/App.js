import { useState, useRef } from 'react';

import Header from './UI/Header';
import Diary from './UI/Diary';
import Favorites from './UI/Favorites';
import Modal from './UI/Modal';
import filterFilms from './Utility/filteringLogic';
import sortFilms from './Utility/sortingLogic';

export default function App() {
  let unfilteredDiary = useRef([]);
  const [displayedDiary, setDisplayedDiary] = useState(unfilteredDiary.current);
  const favesArray = [null, null, null, null, null];
  const [isModalActive, setIsModalActive] = useState(false);
  let searchResults = useRef();
  const [modalType, setModalType] = useState();
  let filtered = useRef(false);
  let filmToAdd = useRef();

  function modalActivation(modalArg) {
    setModalType(modalArg);
    setIsModalActive(true);
  }

  function onSearchClick(params) {
    searchResults.current = filterFilms(...params);
    modalActivation('searchToAdd');
  }

  function addFilmToDiary(film, dmy) {
    film.dmy = dmy;
    unfilteredDiary.current.unshift(film);
    filtered.current = false;
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
      <Favorites favesArray={favesArray}/>

      {isModalActive && (
        <Modal modalType={modalType} modalActivation={modalActivation} onBackdropClick={onBackdropClick} displayedDiary={displayedDiary} onFilterConfirmClick={onFilterConfirmClick} onSearchClick={onSearchClick} searchResults={searchResults} addFilmToDiary={addFilmToDiary} filmToAdd={filmToAdd}/>
      )}
    </>
  )
}