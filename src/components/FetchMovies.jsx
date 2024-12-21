import { useState, useEffect } from 'react';
import './../index.css';

const APIKEY = "1efe3716ab36633b8d2d333ff6caf35b";

const useFetchMovies = (currentSelection) => {
    const [movies, setMovies] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        const fetchMovies1 = async () => {
            const res = await fetch(
                `https://api.themoviedb.org/3/trending/${currentSelection}/day?api_key=${APIKEY}&with_origin_country=US&page=1`
            );
            const data = await res.json();
            setMovies(data.results.slice(0, 16));
        };
        fetchMovies1();
    }, [currentSelection]);

    useEffect(() => {
        const fetchMovies2 = async () => {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&with_origin_country=IN&language=en-US&page=1`
            );
            const data = await res.json();
            setUpcoming(data.results.slice(0, 16));
        };
        fetchMovies2();
    }, []);

    return { movies, upcoming };
};

export default useFetchMovies;
