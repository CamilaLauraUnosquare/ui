import { Box, Grid, Typography } from "@mui/material";
import ProjectLogo from "../../assets/box.png";
import Gestion from "../../assets/gestion.png";

import FondoAjustes from "../../assets/background.jpg";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  title: string;
};

export const AuthLayout = ({ children, title = "" }: Props) => {
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", width: "100vw" }}
    >
      {/* <Grid
        item
        xs={7}
        sx={{
          height: "100vh",
          backgroundImage: `url(${FondoAjustes})`,
          backgroundSize: "cover",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={ProjectLogo}
          sx={{ position: "absolute", top: "30px", left: "30px" }}
        ></Box>
        <Box component="img" src={Gestion} width="250px"></Box>
        <Typography component="div" variant="h4" textAlign="center">
          <Box color="white" fontWeight="700" mt={3}>
            Administrador de Registros Contables
          </Box>
        </Typography>
      </Grid> */}
      <Grid
        item
        className="box-shadow"
        xs={5}
        sx={{
          width: { sm: 450 },
          backgroundColor: "white",
          padding: 8,
          borderRadius: 2,
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          m="auto"
        >
          <Typography variant="h5" component="div" color="primary">
            <Box sx={{ fontWeight: "bold", m: 1 }}>{title}</Box>
          </Typography>
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};
