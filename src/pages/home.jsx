import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";


/**
* The Home function defines the content that makes up the main content of the Home page
*
* This component is attached to the /about path in router.jsx
* The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

export default function Home() {
  return (
    <>
      <h1 className="title">Welcome to r3source!</h1>
      <div className="instructions">
        <h2>The new website is a work in progress!</h2>
        <p>I will try to make everything as nice as I possibly can! Thank you for waiting :)</p>
      </div>
    </>
  );
}
