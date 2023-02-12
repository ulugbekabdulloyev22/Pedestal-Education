import "./home.css";
import Advantages from "../../components/advantages/advantages";
import Main from "../../components/main/main";
import AboutSchool from "../../components/aboutSchool/aboutSchool";
import Teachers from "../../components/teachers/teachers";
import Prices from "../../components/prices/prices";
import Filial from "../../components/filial/filial";
import ScrollUp from "../../components/scrollUp/scrollUp";
import Links from "../../components/links/links";
import Comments from "../../components/comments/comments";

function Home() {
  return (
    <div className="home__container">
      <Main />
      <AboutSchool />
      <Advantages />
      <Teachers />
      <Prices />
      <Filial />
      <a href="#main">
        <ScrollUp />
      </a>
      <Links />
      <Comments />
    </div>
  );
}

export default Home;
