import React from 'react';
import s from './Movie.module.css';


export const MovieCard = (props: MovieCardType) => {
    return (
        <div className={s.movie}>
            <img src={props.poster} alt={'no film'}/>
            <div className={s.movieInfo}>
                <h3>{props.title}, {props.year}</h3>
                <span className={s.green}>9.8</span>
            </div>
            <div className={s.overview}>
                <h3>Overview</h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries
            </div>
        </div>
    );
};
export type MovieCardType = {
    title?: string,
    year?: string,
    imdbID?: string,
    type?: string,
    poster?: string
}
