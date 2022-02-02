import React from "react";
import UserMenu from "./UserMenu";

const Header = ({ userData }) => {
    return (
      <header className="header">
    <UserMenu userData={userData}/>
  </header>
    );
}

export default Header;