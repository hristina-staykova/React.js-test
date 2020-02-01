import React from "react";
// import route stuff
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Navigation component
import NavigationTabs from "./components/Navigation.js";
// import HomePage component
import HomePage from "./pages/HomePage.js";
// import ModelerPage component
import ModelerPage from "./pages/ModelerPage.js";
import FrameworksPage from "./pages/FrameworksPage.js";

function App() {
  return (
    <Router>
      <div>
        <NavigationTabs />
        <Route path="/home" component={HomePage} />
        <Route path="/modeler" component={ModelerPage} />
        <Route path="/framework" component={FrameworksPage} />
      </div>
    </Router>
  );
}

export default App;
