import "./App.css";
import Header from "./sections/Header";
import Navigation from "./sections/Navigation";
import Trending from "./sections/Trending";
import News from "./sections/News";
import Topics from "./sections/Topics";
import Writer from "./sections/Writers";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Trending />
      <hr className="m-5" />
      <div className="row mx-5">
        <div className="col-md-8 p-0">
          <News />
        </div>
        <div className="col">
          <Topics />
          <Writer />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
