import {
  AppBar as AppBarMui,
  Box,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

interface IAppBarProps {
  icon: React.ReactNode;
  title: string;
  onClickLogo: () => void;
}

const AppBar: React.FC<IAppBarProps> = (props) => {
  const { icon, title, onClickLogo } = props;

  const handleClickLogo = () => {
    onClickLogo();
  };

  return (
    <>
      <AppBarMui position="fixed">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            data-testid="app-bar-logo"
            onClick={handleClickLogo}
            style={{ cursor: "pointer" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {icon}
            <Typography ml={1}>{title}</Typography>
          </Box>
          <Box></Box>
        </Toolbar>
      </AppBarMui>
      <Offset />
    </>
  );
};

export default AppBar;
