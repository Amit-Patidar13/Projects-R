import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement("h1", { id: "heading" }, "hello React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {key: "h1"}, "I am h1 tag of child id 🚀"),
//     React.createElement("h2", {key: "h2"}, "I am h2 tag"),
//   ])
// );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);




const Title = () => (
  <h1>Namestey react JSX 🚀</h1>
);

const HeadingComponent = () => (
  <div>
    <Title/>
    <h1 >Namestey React 🚀</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>);