export default function sortFilms(films, sortMethod, reverseBool) {
    if (sortMethod == 'title') {
        films = films.sort((a,b) => {
            return a.title.toLowerCase()>b.title.toLowerCase() ? 1
                : a.title.toLowerCase()<b.title.toLowerCase() ? -1
                : 0;
        })
    } else if (sortMethod == 'director') {
        films = films.sort((a,b) => {
            return a.director.toLowerCase()>b.director.toLowerCase() ? 1
                : a.director.toLowerCase()<b.director.toLowerCase() ? -1
                : 0;
        })
    } else if (sortMethod == 'runtime') {
        films = films.sort((a,b) => {
            return a.runtime>b.runtime ? 1
                : a.runtime<b.runtime ? -1
                : 0;
        })
    } else if (sortMethod == 'year') {
        films = films.sort((a,b) => {
            return a.year<b.year ? 1
                : a.year>b.year ? -1
                : 0;
        })
    } else if (sortMethod == 'watchdate') {
        films = films.sort((a,b) => {
            return a.dmy[2]<b.dmy[2] ? 1
                : a.dmy[2]>b.dmy[2] ? -1
                : a.dmy[1]<b.dmy[1] ? 1
                : a.dmy[1]>b.dmy[1] ? -1
                : a.dmy[0]<b.dmy[0] ? 1
                : a.dmy[0]>b.dmy[0] ? -1
                : 0;
        })
    }

    reverseBool && films.reverse();

    return films;
}