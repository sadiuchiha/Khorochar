import Header from "./components/header/header";
import Home from "./views/home/home";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import addExpenses from "./views/add-expenses/addExpenses";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/addExpense" component={addExpenses}/>
      </Switch>
      <div>Footer</div>
    </Router>
  );
}

export default App;
