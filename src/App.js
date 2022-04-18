import {Routes, Route} from "react-router-dom";
import ContentPage from "./page/Content";

import PopularMovie from "./page/PopularMovie";
import MovieDetail from "./components/movie/MovieDetail";
import Home from "./page/Home";
import UpcomingMovie from "./page/UpcomingMovie";
import Search from "./page/Search";

function App() {
  // const [upcomingState, setUpcoming] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     "https://api.themoviedb.org/3/movie/upcoming?api_key=131f3dc4657440aa2ed80c0a22a7d1f9&language=en-US&page=1"
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setUpcoming(res.results);
  //     })
  //     .catch((err) => {});
  // }, []);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/popular" element={<PopularMovie />} />
        <Route path="/upcoming" element={<UpcomingMovie />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </div>
  );
}
export default App;
