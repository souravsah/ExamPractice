import './App.css';
import { Examdata } from './Context/Exam/Examdata';
import Homepage from './Pages/HomePage/Homepage';
import { Route, Switch, } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import PhysicsPage from './Pages/PhysicsPage/PhysicsPage';
import ChemistryPage from './Pages/ChemistryPage/ChemistryPage';
import MathPage from './Pages/MathPage/MathPage';

function App() {
  return (
    <Examdata>
    <GlobalStyle/>
    <Router>
    <Switch>
    <Route exact path="/" component={Homepage}/>
    <Route exact path="/physics" component={PhysicsPage}/>
    <Route exact path="/chemistry" component={ChemistryPage}/>
    <Route exact path="/math" component={MathPage}/>
    </Switch>

    </Router>
    </Examdata>
  );
}

export default App;
