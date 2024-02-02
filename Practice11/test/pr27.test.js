// Sample Data
const { str, obj, arr, number } = require("../../sampleData");
const moviesData = [
    {
        idIMDB: 'tt0816692',
        title:  'Interstellar',
        director: 'Christopher Nolan',
        year: 2014,
        countries: ['Alberta, Canadá', 'Iceland', 'Los Ángeles, California', 'Canary Islands', 'Norway'],
        genres: ['Adventure', 'Drama', 'Sci-Fi'],
        calification: 8.7
    },
    {
        idIMDB: 'tt0936501',
        title:  'Taken',
        director: 'Pierre Morel',
        year: 2008,
        countries: ['París, France', 'Los Ángeles, California', 'France and Europe'],
        genres: ['Adventure', 'Drama', 'Thriller'],
        calification: 7.8
    },
    {
        idIMDB: 'tt2911666',
        title:  'John Wick',
        director: 'Chad Stahelski . David Leitch (uncredited)',
        year: 2014,
        countries: ['New York, United States', 'New Jersey, United States', 'Montreal, Canadá', 'Red Carpet Club, New York', 'Detroit, Michigan'],
        genres: ['Action', 'Crime', 'Sci-Fi'],
        calification: 7.4
    }
];
const movie = {
    idIMDB: 'tt0816692',
    title:  'Interstellar',
    director: 'Christopher Nolan',
    year: 2014,
    countries: ['Alberta, Canadá', 'Iceland', 'Los Ángeles, California', 'Canary Islands', 'Norway'],
    genres: ['Adventure', 'Drama', 'Sci-Fi'],
    calification: 8.7
};
// Error Message
const { undef } = require("../../validationErrors");
const err = {idIMDB : undef};
// Class
const { Film } = require("../pr27");

describe('Film', () => {
    test('of many movies',() => {
        const expecResult = moviesData.map(movie => {
            return new Film(movie).printDataSheet();
        })
        const resultArr = moviesData.map(movie => {
            return new Film(movie).printDataSheet();
        });
        expect(expecResult).toStrictEqual(resultArr);
    });
    test('of a movie', () => {
        const result1 = new Film(movie).printDataSheet();
        expect(new Film(movie).printDataSheet()).toBe(result1);
    });
    test('of str, arr, obj and number', () => {
        // String
        expect(new Film({str})).toStrictEqual(err);
        // Array
        expect(new Film({arr})).toStrictEqual(err);
        // Object
        expect(new Film({obj})).toStrictEqual(err);
        // Number
        expect(new Film({number})).toStrictEqual(err);
    });
    test('of undefined', () => {
        const noMovie = new Film({});
        expect(noMovie).toStrictEqual(err);
    });
});