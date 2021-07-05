// import CreditCardForm from "./validateCard/CreditCardForm";
import getCard from "./getCards/getCardDetails";
import addCard from "./validateCards/CreditCardForm"
// import Login from "./loginComponents/Login"
// import Signup from "./loginComponents/Signup"
// import PrivateRoute from "./loginComponents/PrivateRoute"
// import Dashboard from "./loginComponents/Dashboard"
// import { AuthProvider } from "./utils/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  return (
      <div >
        <Router>
            <Switch>
              {/* <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/cards" component={CreditCardForm} /> */}
              <Route path="/getCard" component={getCard} />
              <Route path="/cards" component={addCard} />

            </Switch>
        </Router>
      </div>

  )
}

export default App;
