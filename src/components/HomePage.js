import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const jumbotron = {
    padding: "4rem 2rem",
    marginBottom: "2rem",
    backgroundColor: "#e9ecef",
    borderRadius: ".3rem"
  };

  return (
    <div style={jumbotron}>
      <h1>Pluralsight Administration</h1>
      <p>React, Flux and React Router or responsive web sites</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
};

export default HomePage;
