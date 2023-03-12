import React from "react";
import { Link } from "next/link";
import { Menu, Image, Button } from "semantic-ui-react";
import day_night_switch from "./showCongration";

const Header = () => {
  return (
  
    <Menu secondary style={{ marginTop: 15, height: 64 }}>
        <Image src='image2vector.svg' size = "tiny" />
        <label style={{ fontFamily: "Milonga", fontSize: 64, marginTop: 18 }}>
          EcoTeleport
        </label>


      <Menu.Menu position="right">
        <Button color='yellow'> User</Button>
        <Button>Day_night_Button</Button>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
