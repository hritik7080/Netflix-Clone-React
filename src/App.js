import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner'

function App() {
    return ( <
        div className = "App" >
        <
        Banner / >
        <
        Row title = "NETFLIX ORIGINAL"
        fetchUrl = { requests.fetchNetflixOriginals }
        isLargeRow /
        >
        <
        Row title = "Trending Now"
        fetchUrl = { requests.fetchTrending }
        /> <
        Row title = "Top Rated"
        fetchUrl = { requests.fetchtopRated }
        /> <
        Row title = "Action Movies"
        fetchUrl = { requests.fetchActionMovies }
        /> <
        Row title = "Horror Movies"
        fetchUrl = { requests.fetchHorrorMovies }
        /> <
        Row title = "Comedy Movies"
        fetchUrl = { requests.fetchComedyMovies }
        /> <
        Row title = "Romance Movies"
        fetchUrl = { requests.fetchRomanceMovies }
        /> <
        Row title = "Documentries"
        fetchUrl = { requests.fetchDocumentaries }
        /> < /
        div >

    );
}

export default App;