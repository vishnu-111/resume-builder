import React, { useState } from "react";
import "./HomePage.css";
const HomePage = ({ personal }) => {
  const [personalDetails, setToPersonalDetails] = useState(false);
  const homeButtonClick = () => {
    setToPersonalDetails(true);
    personal(personalDetails);
  };

  return (
    <>
      <div className="background-image position-relative  "></div>
      <div className="w-50 position-absolute top-50 p-3  ">
        <h1 className="w-75 heading-contents ">Free Resume Builder.</h1>
        <h2 className="heading-1-contents ">Create a resume for Free.</h2>
        <h3 className="text-bg-warning">
          Free to use. Developed by hiring professionals.
        </h3>
        <button
          className="p-4 border-0 rounded-5 bg-primary font-family "
          onClick={homeButtonClick}
        >
          CREATE YOUR RESUME NOW
        </button>
      </div>
    </>
  );
};

export default HomePage;
