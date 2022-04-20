import Popular from "../components/movie/popular";
import Promo from "../components/promo";
import UpComing from "../components/movie/upcoming";
import Carousel from "../components/movie/Carousel";
import ScrollToTop from "../components/scroll";
function Home() {
  return (
    <div>
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
