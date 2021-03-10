import React from "react";
import Router from './Components/Router/router';
import "./App.css";
import Clock from "./Components/clock";
//import { setRoleId } from './slices/sessionSlice'
import Container from "@material-ui/core/Container"
import ButtonAppBar from './Components/Presentation/buttonappbar'

function App() {
  return (
    <Container maxWidth="xl">
      <ButtonAppBar />
      <Router />
      <Clock />
    </Container>
  );
}

export default App;
