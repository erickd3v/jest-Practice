const { errStr, errNumber, valueError, undef } = require("../validationErrors");
const regexId = /^([a-z]){2}([0-9]){7}$/;
const regexLetter = /^[a-zA-Z0-9\s.()]+$/;
const regexCountry = /^[a-zA-Z\s.,'-ÁáÉéÍíÓóÚúÀàÈèÌìÒòÙùÄäËëÏïÖöÜüÇç]+$/u;

const ACCEPTED_GENRES = ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary' ,'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];
class Film {
    constructor({idIMDB, title, director, year, countries, genres, calification}) {

        // Id of the film
        if(idIMDB === '' || typeof idIMDB === 'undefined') return {idIMDB : undef};
        if(typeof idIMDB !== 'string') return errStr;

        if(!(regexId.test(idIMDB))) return valueError;
        this.idIMDB = idIMDB;

        // Title of the film
        if(title === '' || typeof title === 'undefined') return {title : undef};
        if(!regexLetter.test(title) || title.length > 100) return valueError;
        if(typeof title !== 'string') return errStr
        this.title = title.trim();

        // Director of the film
        if(director === '' || typeof director === 'undefined') return {director : undef};
        if(!regexLetter.test(director) || director.length > 50) return valueError;
        if(typeof director !== 'string') return errStr;
        this.director = director.trim();

        // Year of the film
        if(typeof year === 'undefined') return {year: undef};
        if(typeof year !== 'number') return errNumber;
        if(year.toString().length !== 4) return valueError;
        this.year = year;

        // Countries of the film
        if(countries.length === 0 || countries === '' || typeof countries === 'undefined') return {countries: undef};
        for(const country of countries) {
            if(!regexCountry.test(country) || typeof country === 'undefined') return valueError;
        }
        this.countries = countries;

        // Genero of the film
        if(genres.length === 0 || genres === '' || typeof genres === 'undefined') return {genres: undef};
        for (const genre of genres) {
            if(!Film.ListGenres.includes(genre)) return valueError;
        }
        this.genres = genres;

        // Calification of the film
        if(calification === '' || typeof calification === 'undefined') return {calification : undef};
        if(calification < 0 || calification > 10 || calification.toString().length > 3) return valueError;
        if(typeof calification !== 'number') return errNumber;
        this.calification = calification
    }
    // Static method to obtain accepted genres
    static get ListGenres() {
        return ACCEPTED_GENRES;
    }
    static AcceptedGenres() {
        return `Los generos aceptados son: ${Film.ListGenres.join(',')}`
    }
    // Print Data Sheet
    printDataSheet() {
        return `Data Sheet:\n` +
           `  Title: ${this.title}\n` +
           `  Director: ${this.director}\n` +
           `  Year: ${this.year}\n` +
           `  Country or Countries: ${this.countries.join(' - ')}\n` +
           `  Genres: ${this.genres.join(', ')}\n` +
           `  Rating: ${this.calification}/10\n` +
           `  ID: ${this.idIMDB}\n`;
    }
}

module.exports = { Film }