import React, {useEffect, useState} from "react";
import axios from '../api/axios';
import "../public/css/Row.css"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title, fetchUrl, isLargeRow, handleUrl, url}) => {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(fetchUrl);
            setMovies(response.data.results);
            return response;
        }
        fetchData();
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars:{
            autoplay: 1
        }
    }

    const handleClick = (movie)=>{
        if (trailerUrl)
        {
            setTrailerUrl('');

        }else {
            movieTrailer(movie?.name || "")
                .then(url=>{
                    const urlParams = new URLSearchParams((new URL(url).search));
                    setTrailerUrl(urlParams.get('v'));

                }).catch(err=>{
                    console.log(err)
            })



        }

    }
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((data) => (
                    <img
                        onClick={()=>handleClick(data)}
                        key={data.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? data.poster_path : data.backdrop_path}`}
                        alt={data.name}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row