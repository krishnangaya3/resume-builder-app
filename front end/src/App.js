import React, { useContext } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import {
  Landing,
  Template1,
  Template2,
  Template3,
  Template4,
  ResumeCreate,
  FourNotFour,
  SignUp,
  SignIn,
  Admin,
  Userpage,
  Userlistpage,
  NewuserPage
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
          <Route
            exact
            path="/template/3"
            element={
              <PDFViewer>
                <Template3 resume={resume} />
              </PDFViewer>
            }
          />
           <Route
            exact
            path="/template/4"
            element={
              <PDFViewer>
                <Template4 resume={resume} />
              </PDFViewer>
            }
          />
          <Route exact path="/create" element={<ResumeCreate />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/user/:userId" element={<Userpage />} />
          <Route exact path="/users" element={<Userlistpage />} />
          <Route exact path="/newUser" element={<NewuserPage />} />
          <Route component={FourNotFour} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
