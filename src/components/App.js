import React from "react";
import Aside from "./Aside";
import ProjectList from "./ProjectList";

const App = () => (
  <React.Fragment>
    <h1 className="app_caption">Список проектов</h1>
    <Aside />
    <ProjectList />
  </React.Fragment>
);

export default App;
