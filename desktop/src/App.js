import React, { Fragment } from "react";
import TopBar from "./components/TopBar/TopBar";
import { Route, Switch } from "react-router-dom";
import Dishes from "./pages/Dishes/Dishes";
import NewDish from "./components/NewDish/NewDish";
import Orders from "./pages/Orders/Orders";

function App() {
  return (
    <Fragment>
      <TopBar />
      <Switch>
        <Route path="/" exact component={Dishes} />
        <Route path="/newDish" component={NewDish} />
        <Route path="/edit/:id" component={NewDish} />
        <Route path='/orders' component={Orders}/>
      </Switch>
    </Fragment>
  );
}

export default App;
