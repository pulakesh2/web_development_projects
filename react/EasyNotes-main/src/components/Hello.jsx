import React from "react";
import "../css/howto.css"

export const Hello = () => {
  return (
    <div>

    <section id="how" className="how-to-use-section">
      <div className="container container-sm">

        <div className="row-1 row">
          <div className="content col-12 col-sm-6" data-aos="slide-up">
            <p className="display-1 how-step">Step 1</p>
            <h1 className="display-4 how-heading">this is step 1</h1>
            <p className="how-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              quas praesentium nesciunt quos, hic illo porro tempore repellendus
              labore aspernatur mollitia neque atque molestiae, at, unde nisi.
              Praesentium, voluptatibus obcaecati.
            </p>
          </div>
          <div className="mobile col-12 col-sm-6" data-aos="zoom-in-up">
            <img src="app/app-screen-1.png" alt="" className="app-screen" />
          </div>
        </div>


        <div className="row-1 row flex-sm-row-reverse">
          <div className="content col-12 col-sm-6" data-aos="slide-up">
            <p className="display-1 how-step">Step 2</p>
            <h1 className="display-4 how-heading">this is step 2</h1>
            <p className="how-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              quas praesentium nesciunt quos, hic illo porro tempore repellendus
              labore aspernatur mollitia neque atque molestiae, at, unde nisi.
              Praesentium, voluptatibus obcaecati.
            </p>
          </div>
          <div className="mobile col-12 col-sm-6" data-aos="zoom-in-up">
            <img src="app/app-screen-1.png" alt="" className="app-screen" />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};
export default Hello;
