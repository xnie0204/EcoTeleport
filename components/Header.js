import React from "react";
import { Link } from "next/link";
import { Menu, Image, Button } from "semantic-ui-react";
import day_night_switch from "./showCongration";

const Header = () => {
  return (
    <Menu secondary style={{ marginTop: 15, height: 64 }}>
        <a href = "/">
      <Image src="image2vector.svg" size= "tiny" />
      </a>
      <label style={{ fontFamily: "Milonga", fontSize: 64, marginTop: 40 }}>
        EcoTeleport
      </label>
      

      <Menu.Menu position="right">
        <a href="/login">
          <Button color="yellow"> User</Button>
        </a>
        <a href="/userPage">
          <Button color="yellow"> Carbon Consume</Button>
        </a>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
