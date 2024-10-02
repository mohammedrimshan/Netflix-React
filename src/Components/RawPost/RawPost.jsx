import React, { useEffect, useState } from "react";
import axios from "../../axios"; // Make sure this path is correct
import { API_KEY, imgUrl } from "../../Constants/Constants";
import "./Rawpost.css";
import Youtube from "react-youtube";

function Rawpost(props) {
    const [movies, setMovies] = useState([]); // State to store the list of movies
    const [playingTrailerId, setPlayingTrailerId] = useState(""); // State to store the ID of the movie trailer that's currently playing
    const [videoKey, setVideoKey] = useState(""); // State to store the video key (YouTube video ID)

    // Fetch movies when component mounts or props.url changes
    useEffect(() => {
        axios.get(props.url).then((res) => {
            setMovies(res.data.results);
        });
    }, [props.url]);

    // YouTube player options
    const opts = {
        height: "390",
        width: "1480", // Adjusted fixed width
        playerVars: {
            autoplay: 1,
        },
    };

    // Function to handle movie trailer click
    function handleMovieTrailer(id) {
        if (playingTrailerId === id) {
            // If the trailer is already playing for the clicked movie, hide it
            setPlayingTrailerId("");
            setVideoKey(""); // Clear the video key as well
        } else {
            // Show the trailer for the clicked movie
            axios
                .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
                .then((res) => {
                    if (res.data.results.length !== 0) {
                        const videoId = res.data.results[0].key; // Get the first video's key
                        setPlayingTrailerId(id); // Set the movie ID to play the video
                        setVideoKey(videoId); // Set the YouTube video key
                        console.log("Trailer found with video key:", videoId); // Debug log
                    } else {
                        console.log("Trailer not found");
                    }
                })
                .catch((error) => {
                    console.error("Error fetching trailer:", error);
                });
        }
    }

    return (
        <div className="row">
            <h2 className="categoryTitle">{props.title}</h2>
            <div className="posters">
                {movies.map((movie, ind) => (
                    <img
                        onClick={() => handleMovieTrailer(movie.id)} // Click handler for movie trailers
                        key={ind}
                        className={props.isSmall ? "small-poster" : "poster"}
                        src={movie.backdrop_path ? `${imgUrl + movie.backdrop_path}` : "https://via.placeholder.com/200x300"}
                        alt="poster"
                    />
                ))}
            </div>
            {/* Render the YouTube component only if there is a valid videoKey */}
            {videoKey && <Youtube opts={opts} videoId={videoKey} />}
        </div>
    );
}

export default Rawpost;
