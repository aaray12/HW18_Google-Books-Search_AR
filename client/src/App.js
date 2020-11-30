import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container} from 'react-bootstrap'
import MyNavbar from "./componets/Navbar"
import Home from "./componets/pages/home"



function App() {
  return (
    <Router>
      <div >
        <MyNavbar/>
        <Container fluid>
        <Route exact path="/" component={Home}/>
        {/* <Route exact path="/savedbooks" component={Portfolio}/> */}
        </Container>
      </div>
    </Router>
  );
}

export default App;

