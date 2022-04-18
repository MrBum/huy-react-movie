import Popular from "../components/movie/popular";
import Promo from "../components/promo";
import UpComing from "../components/movie/upcoming";
function Home() {
  return (
    <div>
      <Promo />
      <div className="mx-32 mr-32 ">
        <div className="">
          <Popular />
        </div>

        <UpComing />
      </div>
    </div>
  );
}
export default Home;
