import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { API_KEY, imgUrl } from "../../Constants/Constants";
import "./Banner.css";
function Banner() {
    const [movie, setMovie] = useState();

    useEffect(() => {
        const n = Math.floor(Math.random() * 20);
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res) => {
            setMovie(res.data.results[n]);
        });
    }, []);
    return (
        <div style={{ backgroundImage: `url(${movie ? imgUrl + movie.backdrop_path : ""})` }} className="Banner">
            <div className="content">
                <h1 className="title">{movie ? movie.title || movie.name : ""}</h1>
                <div className="Buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>

                <h1 className="Discription"> {movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade"></div>
        </div>
    );
}

export default Banner;
