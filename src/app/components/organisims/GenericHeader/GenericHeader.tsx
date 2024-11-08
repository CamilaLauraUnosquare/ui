import React from "react";
import Logo from "../../atoms/header/Logo";
import { AppBar, Toolbar } from "@mui/material";
const GenericHeader: React.FC = () => (
  <>
    <AppBar position="fixed" color="primary" sx={{ top: "0", padding:'1rem'}}>
      <Toolbar>
        {" "}
        <Logo />
      </Toolbar>
    </AppBar>
  </>
);

export default GenericHeader;
