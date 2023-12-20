import filmData from '../assets/film_data.json'

export default function filterFilms(title, director, year, minRun, maxRun, films) {
    if (!films) {
        films = filmData.filmData;
    }
    
    const filterResults = films.filter((film) =>
        (!title ? true : film.title.toLowerCase().includes(title)) &&
        (!director ? true : film.director.toLowerCase().includes(director)) &&
        (!year ? true : film.year == year) &&
        (!minRun ? true : film.runtime >= +minRun) &&
        (!maxRun ? true : film.runtime <= +maxRun)
    );
    return filterResults;
}