import {Routes, Route} from "react-router-dom";
import ContentPage from "./page/Content";

import PopularMovie from "./page/PopularMovie";
import MovieDetail from "./components/movie/MovieDetail";
import Home from "./page/Home";
import UpcomingMovie from "./page/UpcomingMovie";
import Search from "./page/Search";
import CastDetail from "./components/movie/DetailCast";

function App() {
  return (
    <div>
      <Routes>
        <Route exact index element={<Home />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/popular" element={<PopularMovie />} />
        <Route path="/upcoming" element={<UpcomingMovie />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/cast/:id" element={<CastDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
