import React, { Fragment } from "react";
import { Store } from "./Store";
import "./index.css";
import { Link } from "@reach/router";
export default function App(props) {
  const { state } = React.useContext(Store);

  return (
    <Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episodes</p>
        </div>
        <div>
          <Link to="/">Home</Link>{" "}
          <Link to="/faves">Favourite(s) {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </Fragment>
  );
}
