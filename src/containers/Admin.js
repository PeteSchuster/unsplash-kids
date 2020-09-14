import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import data from "../data/animals.json";

import FetchImageById from '../components/FetchImageById';
import Images from '../components/Images';

const list = data.results;

export const Admin = () => {
  return (
    <div class="Admin">
      <Switch>
        <Route exact path="/admin/:keyword" component={Images}  />
        <Route render={() => (
          list.map(({ id, name }) => (
            <Link to={`/admin/${name}`}>
              <FetchImageById id={id} />
            </Link>
          ))
        )} />
      </Switch>
    </div>
  );
};

export default Admin;
