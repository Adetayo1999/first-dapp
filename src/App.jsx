import React from "react";
import "./App.css";
import ConnectWallet from "./components/ConnectWallet";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./Home";
import PublicRoute from "./routes/PublicRoute";
import Header from "./components/Header";
import { useSelector } from "react-redux";

function App() {
  const { isActive, account } = useSelector((state) => state.accountReducer);
  return (
    <div className="min-h-screen bg-slate-50">
      <Router>
        {isActive && <Header account={account} />}
        <Switch>
          <PrivateRoute exact path="/" component={Home} isActive={isActive} />
          <PublicRoute
            path="/connect-wallet"
            component={ConnectWallet}
            isActive={isActive}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
