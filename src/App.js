import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Components/header";
import Footer from "./Components/Footers";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header>React Shopping Cart</Header>
      <main>Products</main>
      <Footer />
    </div>
  );
}

export default App;
