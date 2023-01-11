import  { useState } from "react";
import "./app.css"
import Header from "./common/header/Header";
import{ BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data";

function App() {
  // fetch data from database
  const { products} = Data

  const [cartItem, setCartItem] = useState ([])
  return (
   <>
           <Router>
    <Header/>
    <Switch>
          <Route path="/" exact>
            <Pages products = {products} />         
          </Route>
        </Switch>
        </Router>

   </>
  );
}

export default App;
