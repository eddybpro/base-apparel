import HeroImgM from "./assets/hero-mobile.jpg";
import HeroImgD from "./assets/hero-desktop.jpg";
import ArrowIcon from "./assets/icon-arrow.svg";
import LogoImg from "./assets/logo.svg";

import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState("");
  const [error, setError] = useState(false);
  const emailRegex =
    /^[a-zA-Z0-9.!#${|}_=\/*+-~]+@[a-zA-Z0-9-]+(?:\.[a-z-A-Z0-9-]+)*$/;

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    if (!emailRegex.test(state)) {
      event.preventDefault();
      setError((error) => (error === true ? error : !error));
    }
  };
  return (
    <main>
      <div className="ImgContainer">
        <picture>
          <source media="(max-width:768px)" srcSet={HeroImgM} />
          <source media="(min-width:769px)" srcSet={HeroImgD} />
          <img src={HeroImgM} alt="hero picture" />
        </picture>
      </div>
      <div className="TxtContainer">
        <div className="TxtContainer-Head">
          <a href="#">
            <img
              src={LogoImg}
              alt="base apparel"
              className="TxtContainer-Head-Logo"
            />
          </a>
        </div>
        <h1 className="TxtContainer-Title">
          <span>we're</span> coming soon
        </h1>
        <p className="TxtContainer-Para">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <form
          action="#"
          method="POST"
          noValidate
          className={
            error ? "TxtContainer-Form FormError" : "TxtContainer-Form"
          }
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className={error ? "error" : ""}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email address"
              value={state}
              onChange={handleChange}
            />
          </label>
          <button
            className="TxtContainer-Btn"
            id="btn"
            aria-label="stay up-to-date"
          >
            <img src={ArrowIcon} alt="" />
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
