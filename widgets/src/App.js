import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React?",
    content:
      "React is the most popular front-end JavaScript library in the field of web development.",
  },
  {
    title: "Why use React?",
    content:
      "React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC template. It can be used with a combination of other JavaScript libraries or frameworks, such as Angular JS in MVC.",
  },
];

const App = () => {
  return (
    <div>
      <Dropdown />
    </div>
  );
};

export default App;
