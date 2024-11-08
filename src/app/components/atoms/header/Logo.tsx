import React from "react";
import imageLog from '../../../../assets/box.png'
import { Box } from "@mui/material";
const Logo: React.FC = () => (
  <Box
    component="img"
    src={imageLog}
    alt='bcp-logos'
    sx={{ width: "300px", paddingTop: "1rem", paddingLeft:'1rem'}}
  />
);

export default Logo;
