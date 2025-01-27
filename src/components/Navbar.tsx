import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Image from "next/image";
import Logo from "../../public/grit_logo-black.svg";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      variant="outlined"
      color="transparent"
      sx={{ border: "none", backgroundColor: "white" }}
    >
      <Toolbar>
        <Image
          src={Logo}
          alt="Grit System Logo"
          layout="fixed"
          height={40}
          width={160}
        />
        <div style={{ flexGrow: 1 }}></div>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
