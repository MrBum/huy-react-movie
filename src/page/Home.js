import Popular from "../components/movie/popular";
import Promo from "../components/promo";
import UpComing from "../components/movie/upcoming";
function Home() {
  return (
    <div>
      <Promo />
      <div>
        <div className="mr-6 ml-4">
          <Popular />
        </div>
        <div className="mr-6 ml-4">
          <UpComing />
        </div>
      </div>
    </div>
  );
}
export default Home;
