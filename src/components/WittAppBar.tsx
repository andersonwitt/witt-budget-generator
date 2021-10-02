import { Facebook } from "@mui/icons-material";
import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import { useHistory } from "react-router";
const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const WittAppBar: React.FC = () => {
  const history = useHistory();

  const handleClickLogo = () => {
    history.push("/");
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            onClick={handleClickLogo}
            style={{ cursor: "pointer" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Facebook fontSize="large" htmlColor="#fff" />
            <Typography ml={1}>Orçamentos</Typography>
          </Box>
          <Box></Box>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default WittAppBar;
