import React, { useContext } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import {
  Landing,
  Template1,
  Template2,
  ResumeCreate,
  FourNotFour,
  SignUp,
  SignIn,
} from "./pages";
import { DetailsContext } from "./contexts/DetailsContext";
import { PDFViewer } from "@react-pdf/renderer";
import "./App.css";

function App() {
  const { resume } = useContext(DetailsContext);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route
            exact
            path="/template/1"
            element={
              <PDFViewer>
                <Template1 resume={resume} />
              </PDFViewer>
            }
          />
          <Route
            exact
            path="/template/2"
            element={
              <PDFViewer>
                <Template2 resume={resume} />
              </PDFViewer>
            }
          />
          <Route exact path="/create" element={<ResumeCreate />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route component={FourNotFour} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
