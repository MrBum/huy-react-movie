import Popular from "../components/movie/PopularMovie";
import Promo from "../components/Promo";
import UpComing from "../components/movie/UpcomingMovie";
import Carousel from "../components/movie/Carousel";
import ScrollToTop from "../components/Scroll";
function Home() {
  return (
    <div className="overflow-hidden">
      <Promo />
      <div>
        <div>
          <ScrollToTop />
        </div>
        <div className="mr-6 ml-4 md:mr-14 md:ml-10">
          <Popular />
        </div>
        <div>
          <Carousel />
        </div>
        <div className="mr-6 ml-4 md:mr-14 md:ml-10 mt-10">
          <UpComing />
        </div>
      </div>
    </div>
  );
}
export default Home;
