import MainBg from "../main-bg/main-bg";
import "./main.css";

function Main() {
  return (
    <div className="main__container" id="main">
      <MainBg />
      <div className="main__content">
        <h3 className="main__title">Pedestal Education Center</h3>
        <p className="main__description">
          Learn English courses from professionals
        </p>

        <a href="#aboutSchool" className="main__btn">
          <span>We started</span>
          <i></i>
        </a>
      </div>
    </div>
  );
}

export default Main;
