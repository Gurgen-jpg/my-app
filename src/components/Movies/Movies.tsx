import React, {ChangeEvent, useState} from 'react';
import {MovieCard} from "./MovieCard";
import s from './Movie.module.css';
import {MOVIE_API} from "../Dal/movies-api";

//todo : 1. find API for movies; 2. need to control Error or map films
export const Movies = () => {
    const [search, setSearch] = useState<string>('');
    const [searchResult, setSearchResult] = useState<FilmType[]>([]);
    const [err, setErr] = useState<string>('');

    const searchFilm = async () => {
        try {
            const {data} = await MOVIE_API.searchFilm(search)
            const {Search, Error, Response} = data
            if (Response === 'True') {
                setSearchResult(Search);
                setErr('')
            }
            if (Response === 'False') {
                setErr(Error)
            }
        } catch (e) {
            console.log(e)
        }
    }
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }
    const keyPressHandle = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            searchFilm()
        }
    }

    return (
        <div className={s.moviesList}>
            <header className={s.header}>
                <input className={s.search}
                       placeholder={'Search'}
                       value={search}
                       onChange={changeHandler}
                       onKeyPress={keyPressHandle}
                />
            </header>
            <div className={s.container}>
                <span>{err}</span>
                {searchResult.map((film, index) =>
                    <MovieCard key={index}
                               title={film.title}
                               year={film.title}
                               poster={film.poster}
                    />
                )}
            </div>
        </div>
    );
};

export type  FilmType = {
    title: string,
    year: string,
    imdbID: string,
    type: string,
    poster: string
}
