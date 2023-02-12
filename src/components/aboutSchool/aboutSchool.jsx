import "./aboutSchool.css";

function AboutSchool() {
  return (
    <div className="aboutSchool__container" id="aboutSchool">
      <div className="aboutSchool__title">About School</div>
      <div className="aboutSchool__content">
        <div className="aboutSchool__video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ONpZ6JLcvYY?controls=0"
            title="YouTube video player"
            frameBorder="0"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowFullScreen
          ></iframe>
        </div>

        <div className="aboutSchool__description">
          <h2 className="title">Learn English with us</h2>
          <div className="description">
            <span>PEDESTAL EDUCATION CENTER</span> Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Impedit voluptas atque neque
            repudiandae praesentium laudantium aut necessitatibus culpa ab odit
            exercitationem quaerat ut reprehenderit dolorem maxime fuga mollitia
            similique, soluta voluptate, ex ullam dicta quidem, porro nam. Cum
            odit debitis fugiat delectus repellat quod aliquid veniam fuga ea?
            Necessitatibus est placeat illo. Voluptatum omnis eligendi officiis
            saepe reprehenderit ab aut, molestias et tempora accusantium
            doloremque, nostrum ea sed quis voluptate.aboutSchool
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSchool;
