import React from "react";
import ReactDOM from "react-dom";
import './styles/main.scss';

const App = () => {
  return <div>Hello React,Webpack 4 & Babel 7!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));