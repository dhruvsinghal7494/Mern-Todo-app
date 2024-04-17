import React, { useEffect } from "react";

const Home = ({ name }) => {
  return (
    <div className="home-page">
      <span>🎉</span>
      <h1>🎉WELCOME, {name} TO MY Todo App</h1>
      <p>
        Created By <span>Dhruv</span>{" "}
      </p>
    </div>
  );
};

export default Home;
