import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Row from './components/Row/Row';
import requests from "./request";

function App(){
    return (
        <div className="App">
          <Navbar />
          <Banner />
          <Row />
          <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={false} />
          <Row title="History Movies" fetchUrl={requests.fetchHistoryMovies} isLargeRow={false} />
          <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} isLargeRow={false} />
          <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies} isLargeRow={false} />
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow={false} />
        </div>
      );
}
export default App;
