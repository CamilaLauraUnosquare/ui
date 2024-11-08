import { Box } from "@mui/material";
import { Footer } from "../../components/common/footer/Footer";
import GenericHeader from "../../components/organisims/GenericHeader/GenericHeader";
export function ApplicationPage({children}) {
  return (
    <>
      <GenericHeader />
      <Box component="main">
        {children}
      </Box>
      <Footer />
    </>
  );
}
