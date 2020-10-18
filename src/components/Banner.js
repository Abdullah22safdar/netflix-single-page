import React, {useEffect, useState} from "react";
import axios from '../api/axios';
import "../public/css/Banner.css"

const Banner = ({fetchUrl}) => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(fetchUrl);
            setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)])
            return response;
        }
        fetchData()
    },[fetchUrl])

    function truncateString(str=0, num=0) {
        if (str.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    }
    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner__contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name }</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {truncateString(movie?.overview,150)}
                </h1>
            </div>
            <div className="banner-fadeBottom"/>
        </header>
    )
}

export default Banner