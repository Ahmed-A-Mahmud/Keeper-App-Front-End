import React from "react";
import SignOut from "./SignOut";

function Header({ user }) {
  return (
    <header>
      <h1>Keeper</h1>
      {user && <SignOut />}
    </header>
  );
}

export default Header;
