import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Components/header";
import Footer from "./Components/Footers";

// styles
import { makeStyles } from "@material-ui/core/styles";

// sub-main content
import MainContent from "./Components/mainContent";

import { Container } from "@material-ui/core";

const userStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

function App() {
  const classes = userStyles();

  return (
    <div className="App">
      <CssBaseline />
      <Header>React Shopping Cart</Header>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <MainContent />
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
