import React from "react";
import { Provider } from "../context/Provider";
import { Content } from "./Content";

function App() {
  return (
    <div className="App container-md px-3 p-md-0">
      <Provider>
        <Content />
      </Provider>
    </div>
  );
}

export default App;
