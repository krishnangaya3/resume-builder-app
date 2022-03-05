import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Landing, Template1, Template2, ResumeCreate, FourNotFour} from './pages'
import { DetailsContext } from './contexts/DetailsContext'
import { PDFViewer } from '@react-pdf/renderer';
import './App.css';
import SignUp from './component/signup/SignUp';
import Header from './component/layout/Header';
import SignIn from './component/signin/SignIn';

function App() {

  const { resume } = useContext(DetailsContext);



  return (
    <div className="app">
      
      <Router>
      <Header />
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/template/1" exact>
            <PDFViewer>
              <Template1 resume={resume}/>
            </PDFViewer>
          </Route>

          <Route path="/template/2" exact>
            <PDFViewer>
              <Template2 resume={resume}/>
            </PDFViewer>
          </Route>

          <Route path="/create" exact>
            <ResumeCreate />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/signin" exact>
            <SignIn />
          </Route>


          <Route component={FourNotFour} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
