import React from "react";
import { Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { DcScreen } from "../components/DC/DcScreen";
import { HeroeScreen } from "../components/Heroe/HeroeScreen";
import { MarvelScreen } from "../components/MARVEL/MarvelScreen";
import { SearchScreen } from "../components/Search/SearchScreen";
import { Navbar } from "../components/UI/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroeId" component={HeroeScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
