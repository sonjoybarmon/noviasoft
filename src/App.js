import { ThemeProvider } from "@material-ui/styles";
import React, { lazy, useEffect } from "react";
import theme from "./theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./components/home/Home";
import NotFound from "./components/404/NotFound";

const Home = lazy(() => import("./components/home/Home"));

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense
        fallback={
          <div
            style={{
              textAlign: "center",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            loading ....
          </div>
        }
      >
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;
