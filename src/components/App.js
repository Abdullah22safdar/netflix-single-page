import React, {useState} from 'react';
import requests from "./request";
import './App.css';
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
    const [url, setUrl] = useState('');

    const handleUrl = (movie)=>{
        //console.log(movie)
        setUrl(movie);
        //console.log(url)
    }
    return (
        <div className="App">
            <Nav/>
            <Banner fetchUrl={requests.fetchNetflixOriginals}/>
            <Row url={url} handleUrl={handleUrl} title="Netflix Originals" isLargeRow fetchUrl={requests.fetchNetflixOriginals}/>
            <Row url={url} handleUrl={handleUrl} title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row url={url} handleUrl={handleUrl} title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row url={url} handleUrl={handleUrl} title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row url={url} handleUrl={handleUrl} title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row url={url} handleUrl={handleUrl} title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row url={url} handleUrl={handleUrl} title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
        </div>
    );
}

export default App;
