import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import { GlobalStyles } from "./components/Scaffold";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
    </>
  );
}

export default App;
